# StackOverflow Scraper

Webscrape StackOverflow posts related to an user inputted question. Displays the post and the top answer for the user to browse without the burden of clicking through links. If a post seems promising, click to view full post on StackOverflow.

## Demo
[![Demo video](http://img.youtube.com/vi/4oSAqtPvEvo/0.jpg)](http://www.youtube.com/watch?v=4oSAqtPvEvo)


## Run
```
cd server
gunicorn -b :<PORT> app:app
```

### References
- [Tutorial](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project) on connecting React frontend to Flask backend
- [Tutorial](https://blog.miguelgrinberg.com/post/how-to-deploy-a-react--flask-project) on deploying app with gunicorn
