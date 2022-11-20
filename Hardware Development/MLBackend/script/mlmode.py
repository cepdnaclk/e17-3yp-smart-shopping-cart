# Ignore warnings
import warnings
warnings.filterwarnings("ignore") # Warning will make operation confuse!!!

# Model
import torch
import json

model = torch.hub.load('ultralytics/yolov5', 'custom', './yolov5/best1.pt')
img = './rat2.jpg'



def getItemsList(filename):
    results = model(filename)
    output = json.dumps(dict(results.pandas().xyxy[0].value_counts('name')))
    return output