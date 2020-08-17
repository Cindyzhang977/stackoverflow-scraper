from flask import Flask
import script

app = Flask(__name__, static_folder='../client/build', static_url_path='/')

@app.route('/')
def index():
	return app.send_static_file('index.html')

@app.route('/_ah/api/scrape-query')
@app.route('/_ah/api/scrape-query/<query>')
def scrape_query(query):
	return {'results': script.scrape(query)}