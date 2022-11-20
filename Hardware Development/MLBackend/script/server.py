import os
import urllib.request
from flask import Flask, flash, request, redirect, url_for, render_template,jsonify
from mlmode import getItemsList


app = Flask(__name__)


@app.route('/')
def upload_form():
    return render_template('upload.html')

@app.route('/checkitems', methods=['POST'])
def upload_video():
    print(request.files)
    if ('file' not in request.files):
        print("=====> NO VIDEO FILE")
        return "No file part"
    file = request.files['file']
    if file.filename == '':
        print("=====> FILE NOT FOUND")
        return 'No image selected for uploading'
    else:
        filename = file.filename
        file.save("cartRecordVideo/"+filename)
        print('upload_video filename: ' + filename)
        itemsList=getItemsList(filename)
        return jsonify({'items': itemsList})


if __name__ == "__main__":
    app.run(port=5000,debug=True)