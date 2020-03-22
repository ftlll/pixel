from backend import creat_app
from flask import Flask, jsonify, request
from PIL import Image
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

@app.route('/api/pixelize', methods=['GET', 'POST'])
def pixel():
    if (request.method == 'POST'):
        if 'file' not in request.files:
            print('No file attached in request')
            return jsonify({
                "err": "No file attached in request"
            }), 400
        else:
            file = request.files['file']
            filename = file.filename
            if allowed_file(filename):
                #save the file into uploads folder in order to process it
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                image = Image.open(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                width, height = image.size
                #pixels = image.load()
                # for x in range(width):
                #     for y in range(height):
                #         print(pixels[x, y])
                image = rgb_to_grey(image)
                image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                #remove file after process the file
                #os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                return jsonify({
                    "err": "no err"
                }), 200
            else:
                return jsonify({
                    "err": "No file selected"
                }), 400


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
