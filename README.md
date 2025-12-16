# AI Marketing Mentorship Platform

A multi-page web application for a 6-month AI Marketing mentorship program.

## Project Structure

```
training-marketing/
├── index.html        # Homepage (Hero + Goals)
├── curriculum.html   # Learning roadmap timeline
├── tools.html        # 30+ AI tools grid
├── styles.css        # Shared styles
├── app.js            # Shared JavaScript
└── README.md         # This file
```

## How to Run Locally

```bash
cd training-marketing
python3 -m http.server 4000
# Open http://localhost:4000
```

## Deploy to Cloudflare Pages

### Option 1: Direct Upload (Easiest)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Workers & Pages** → **Create application** → **Pages**
3. Choose **Upload assets**
4. Drag & drop all files:
   - `index.html`
   - `curriculum.html`
   - `tools.html`
   - `styles.css`
   - `app.js`
5. Click **Deploy site**
6. Done! Your site is live at `your-project.pages.dev`

### Option 2: Connect to Git

1. Push this folder to GitHub/GitLab
2. Go to Cloudflare Dashboard → **Workers & Pages** → **Create**
3. Select **Connect to Git**
4. Choose your repository
5. Build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `/` or `.`
6. Click **Save and Deploy**

### Option 3: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy (from project directory)
cd training-marketing
wrangler pages deploy .
```

## Custom Domain

After deployment:
1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `marketing.yourdomain.com`)
4. Follow DNS instructions

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` or `/index.html` | Hero + 6 Goals |
| Curriculum | `/curriculum.html` | 18-week timeline |
| Tools | `/tools.html` | 30+ AI tools grid |

## Customization

### Colors (in `styles.css`)
```css
:root {
  --accent-cyan: #00d9ff;
  --accent-orange: #ff6b35;
  --accent-purple: #a78bfa;
}
```

### Add New Pages
1. Copy any existing `.html` file
2. Update the content
3. Add link to navigation in all pages

## Tech Stack

- Pure HTML5/CSS3/JavaScript
- No build process required
- No dependencies
- Fast loading (<2s)
