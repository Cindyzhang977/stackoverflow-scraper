from flask import Flask

app = Flask(__name__)

@app.route('/hello-world')
def hello_world():
	return {'text': 'Hello world!'}

@app.route('/scrape-query')
def scrape_query():
	return {'results': 'Here is json of results'}