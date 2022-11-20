import requests
files = {'file': open('videoplayback.mp4','rb')}
requests.post("http://127.0.0.1:5000/checkitems",files=files)