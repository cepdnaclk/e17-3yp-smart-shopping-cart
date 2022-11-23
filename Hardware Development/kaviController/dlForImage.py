import requests

def checkProductsUsingDL(image):
    files = {'file': open(image,'rb')}
    res = requests.post("http://192.168.8.174:5001/checkitems",files=files)
    print(res.json())
    return res.json()['items']

if __name__=="__main__":
    print(checkProductsUsingDL('rat2.jpg'))