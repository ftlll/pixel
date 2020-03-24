from backend import creat_app
from flask import Flask, json, request, jsonify
from PIL import Image
from numpy import asarray
import os

app = creat_app()

app.config['UPLOAD_FOLDER'] = os.path.dirname(os.path.abspath(__file__)) + '/backend/uploads/'
app.config["ALLOWED_IMAGE_EXTENSIONS"] = ["PNG", "JPG", "JPEG", "GIF"]

def allowed_file(fileName):
    if not "." in fileName:
        return False
    ext = fileName.rsplit(".", 1)[1]

    if ext.upper() in app.config["ALLOWED_IMAGE_EXTENSIONS"]:
        return True
    else:
        return False

def rgb_to_grey(image):
    if image.mode != 'RGB':
        image = image.convert('RGB')
    image = image.convert('L')
    return image

def resize(image, height, width):
    image = image.resize((height,width), resample=Image.BILINEAR)
    image = image.resize(image.size,Image.NEAREST)
    return image

def pixelate(data, width, height):
    grid = []
    for x in range(0, width):
        row = []
        for y in range(0, height):
            [R, G, B, A] = data[x,y]
            color = 'rgba(' + str(R) + ',' + str(G) + ',' + str(B) + ',' + str(A) + ')'
            row.append(color)
        grid.append(row)
    return grid

@app.route('/api/pixelate', methods=['GET', 'POST'])
def pixel():
    if (request.method == 'POST'):
        if 'file' not in request.files:
            print('No file attached in request')
            return jsonify({
                "msg": "No file attached in request"
            }), 400
        else:
            file = request.files['file']
            filename = file.filename
            if allowed_file(filename):
                #save the file into uploads folder in order to process it
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                image = Image.open(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                print(image.mode)
                if image.mode == 'RGB':
                    channel = 3
                elif image.mode == 'RGBA':
                    channel = 4
                elif image.mode == 'L':
                    channel = 1
                else:
                    channel = 1
                width, height = image.size
                data = image.load()
                if channel == 4:
                    grid = pixelate(data, width, height)
                else:
                    grid = []
        
                #image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                #remove file after process the file
                os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                return jsonify({
                    'grid': grid,
                    'rows': height,
                    'columns': width
                })
            else:
                return jsonify({
                    "msg": "No file selected"
                }), 400


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
