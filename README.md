# Abney Village Website

A community website for Abney, a small village in the Hope Valley, Peak District, Derbyshire.

🌐 [www.abney-hope-valley.co.uk](https://www.abney-hope-valley.co.uk)

## Tech Stack

- **Backend:** Python / Flask
- **Templating:** Jinja2
- **Styling:** Tailwind CSS v3
- **Interactivity:** TypeScript
- **Image Hosting:** Cloudflare R2
- **Deployment:** Vercel
- **DNS:** Cloudflare

## Pages

- **Home** — Hero carousel, intro and quick links
- **About** — History and heritage of the village
- **Gallery** — Photo grid with lightbox
- **Village Hall** — Info and booking enquiry form
- **Find Us** — Google Maps embed and directions

## Local Development

### Prerequisites
- Python 3
- Node.js

### Setup

1. Clone the repo:
```bash
git clone https://github.com/WillKirk/abney-village-site.git
cd abney-village-site
```

2. Create and activate a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Install Node dependencies:
```bash
npm install
```

5. Create a `.env` file in the project root:
```
R2_PUBLIC_URL=your_r2_public_url
R2_ACCOUNT_ID=your_cloudflare_account_id
R2_ACCESS_KEY=your_r2_access_key
R2_SECRET_KEY=your_r2_secret_key
R2_BUCKET=abney-village-images
```

6. Start the development servers:

Terminal 1 — Flask:
```bash
python app.py
```

Terminal 2 — Tailwind + TypeScript watchers:
```bash
npm run dev
```

7. Visit [http://127.0.0.1:5000](http://127.0.0.1:5000)

## Image Hosting

Images are hosted on Cloudflare R2 in two folders:

- `carousel/` — Hero images shown on the homepage
- `gallery/` — All photos shown in the gallery

To add images, upload directly to the R2 bucket via the Cloudflare dashboard.

## Deployment

The site auto-deploys to Vercel on every push to `main`. Environment variables are configured in the Vercel project settings.

## Project Structure

```
AbneyWebsite/
├── app.py                  # Flask routes
├── requirements.txt        # Python dependencies
├── package.json            # Node dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment config
├── .env                    # Environment variables (not committed)
├── templates/
│   ├── base.html           # Base template with navbar and footer
│   ├── index.html          # Homepage
│   ├── about.html          # About page
│   ├── gallery.html        # Gallery page
│   ├── village_hall.html   # Village hall page
│   └── find_us.html        # Find us page
└── static/
    ├── css/
    │   ├── input.css       # Tailwind input
    │   └── output.css      # Compiled CSS
    ├── js/                 # Compiled TypeScript
    ├── ts/                 # TypeScript source
    │   ├── carousel.ts
    │   ├── gallery.ts
    │   ├── nav.ts
    │   ├── transitions.ts
    │   └── village_hall.ts
    └── favicon.ico
```
