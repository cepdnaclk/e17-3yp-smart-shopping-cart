import requests
files = {'file': open('cocacola.png','rb')}
requests.post("http://127.0.0.1:5000/checkitems",files=files)