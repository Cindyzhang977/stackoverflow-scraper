import requests
from bs4 import BeautifulSoup
import json
import sys


def parse_page(url):
    """
    parse and return information from the url site
    """
    data = {}
    page = requests.get(url, 'html.parser')
    soup = BeautifulSoup(page.content, 'html.parser')
    data['url'] = url
    data['question'] = soup.h1.a.text
    posts = soup.find_all('div', {'class': 'post-text'})
    data['post'] = str(posts[0])
    data['answers'] = str(posts[1]) if len(posts) > 1 else []
    return data


def scrape(question):
    """
    scrape stack overflow with the question
    """
    question = question.replace(' ', '+')
    root = 'https://stackoverflow.com'
    page = requests.get('https://stackoverflow.com/search?q={0}'.format(question))
    soup = BeautifulSoup(page.content, 'html.parser')

    question_urls = [root + elem.div.h3.a["href"]
                     for elem in soup.find_all('div', {"class": "summary"})]

    data = []
    for url in question_urls:
        data.append(parse_page(url))

    return data
