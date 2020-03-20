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
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

                return jsonify({
                    "err": "no err"
                }), 200
            else:
                return jsonify({
                    "err": "No file selected"
                }), 400


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
