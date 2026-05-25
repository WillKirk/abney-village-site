import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    images_dir = os.path.join(app.static_folder, 'images')
    if os.path.exists(images_dir):
        images = [
            f for f in os.listdir(images_dir)
            if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))
        ]
        images.sort()
        images = images[:5]
    else:
        images = []
    return render_template('index.html', images=images)
@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)