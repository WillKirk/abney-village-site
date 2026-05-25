import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    images_dir = os.path.join(app.static_folder, 'images')
    images = [
        f for f in os.listdir(images_dir)
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))
    ]
    images.sort()
    return render_template('index.html', images=images)
@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)