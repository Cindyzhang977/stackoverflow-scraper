from flask import Flask
import script

app = Flask(__name__)

@app.route('/hello-world')
def hello_world():
	return {'text': 'Hello world!'}

@app.route('/scrape-query')
@app.route('/scrape-query/<query>')
def scrape_query(query):
	return {'results': script.scrape(query)}