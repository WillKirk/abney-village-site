import os
import boto3
from flask import Flask, render_template
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

R2_URL = os.getenv('R2_PUBLIC_URL')
R2_ACCOUNT_ID = os.getenv('R2_ACCOUNT_ID')
R2_ACCESS_KEY = os.getenv('R2_ACCESS_KEY')
R2_SECRET_KEY = os.getenv('R2_SECRET_KEY')
R2_BUCKET = os.getenv('R2_BUCKET')

s3 = boto3.client(
    's3',
    endpoint_url=f'https://{R2_ACCOUNT_ID}.r2.cloudflarestorage.com',
    aws_access_key_id=R2_ACCESS_KEY,
    aws_secret_access_key=R2_SECRET_KEY,
    region_name='auto'
)

def get_images(prefix='', limit=None):
    response = s3.list_objects_v2(Bucket=R2_BUCKET, Prefix=prefix)
    images = [
        obj['Key'] for obj in response.get('Contents', [])
        if obj['Key'].lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))
    ]
    images.sort()
    if limit:
        images = images[:limit]
    return images

@app.route('/')
def index():
    images = get_images(limit=5)
    return render_template('index.html', images=images, r2_url=R2_URL)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/gallery')
def gallery():
    images = get_images()
    return render_template('gallery.html', images=images, r2_url=R2_URL)

@app.route('/village-hall')
def village_hall():
    return render_template('village_hall.html')

@app.route('/find-us')
def find_us():
    return render_template('find_us.html')

if __name__ == '__main__':
    app.run(debug=True)