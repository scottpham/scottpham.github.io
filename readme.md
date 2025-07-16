# My Portfolio Site

Simple portfolio site built with HTML, CSS, and Alpine.js. Loads portfolio data from a CSV file.

## How it works

The site needs these files:
- `index.html` - main page
- `portfolio.csv` - my portfolio data  
- `assets/images/brooklyn.png` - headshot
- `assets/scottpham_resume.pdf` - resume
- Portfolio images in `assets/images/` (350px by 150px, 7:3 aspect ratio)

## Running locally

Just open `index.html` in a browser. If CSV loading gets blocked, use a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`

## Updating portfolio

Edit `portfolio.csv` and add new images to `assets/images/`
