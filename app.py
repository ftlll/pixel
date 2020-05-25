from backend import create_app
from flask import Flask, json, request, jsonify, send_file
from PIL import Image, ImageDraw
from numpy import asarray
import os

app = create_app()

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

def pixelate(data, width, height, channel):
    if channel == 4:
        grid = []
        for x in range(0, width):
            for y in range(0, height):
                [R, G, B, A] = data[x,y]
                color = 'rgba(' + str(R) + ',' + str(G) + ',' + str(B) + ',' + str(A) + ')'
                grid.append(color)
        return grid
    else:
        grid = [] 
        for x in range(0, 22):
            for y in range(0, 20):
                [R, G, B, A] = [255, 128, 0, 255]
                color = 'rgba(' + str(R) + ',' + str(G) + ',' + str(B) + ',' + str(A) + ')'
                grid.append(color)
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
                grid = pixelate(data, width, height, 1)
        
                #image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                #remove file after process the file
                os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                return jsonify({
                    'grid': grid,
                    'rows': 22,
                    'columns': 20
                })
            else:
                return jsonify({
                    "msg": "No file selected"
                }), 400
                

def hex_to_rgb(color):
    color = color.lstrip('#')
    lv = len(color)
    return tuple(int(color[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))


def getRGBAData(color):
    if color[0] == '#':
        return hex_to_rgb(color)
    elif color[:4] == 'rgba':
        color = color.lstrip('rgba(')
        color = color.rstrip(')')
        color = tuple(color.split(",")) 
        [r, g, b, a] = color
        color = (int(r), int(g), int(b), round(255 * float(a)))
        return color


def encodePNG(grid, columns, rows, size):
    width = columns * size
    height = rows * size
    img = Image.new('RGBA', (width, height))
    for x in range(rows):
        for y in range(columns):
            if (grid[x * columns + y] != ''):
                for a in range(size):
                    for b in range(size):
                        img.putpixel((size * y + a, size * x + b), getRGBAData(grid[x * columns + y]))
    return img

def savePNG(grid, columns, rows, size, num):
    img = encodePNG(grid, columns, rows, size)
    fileName = 'pil' + str(num) + '.png'
    img.save(fileName)

def encodeGIF(grids, columns, rows, size):
    pngFiles = [encodePNG(grids[i], columns, rows, size) for i in range(len(grids))]
    pngFiles[0].save('pil.gif', save_all=True, append_images=pngFiles[1:], duration=40, loop=0)

@app.route('/api/img', methods=['GET', 'POST'])
def encodeFile():
    if (request.method == 'POST'):
        columns = int(request.get_json()['columns'])
        rows = int(request.get_json()['rows'])
        grids = request.get_json()['grids']
        active = int(request.get_json()['active'])
        size = int(request.get_json()['size'])
        fileType = request.get_json()['type']
        if fileType == 'png':
            savePNG(grids[active], columns, rows, size, active)
            path = '../pil' + str(active) + '.png'
            return send_file(path, as_attachment=True)
        elif fileType == 'gif':
            encodeGIF(grids, columns, rows, size)
            path = '../pil.gif'
            return send_file(path, as_attachment=True)

    

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
