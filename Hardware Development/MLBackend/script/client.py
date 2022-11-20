import requests
files = {'file': open('rat2.jpg','rb')}
res = requests.post("http://127.0.0.1:5000/checkitems",files=files)
print(res)