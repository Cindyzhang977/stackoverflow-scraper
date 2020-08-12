from flask import Flask

app = Flask(__name__)

@app.route('/hello-world')
def hello_world():
	return {'text': 'Hello world!'}
