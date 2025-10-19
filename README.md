Charllson Portfolio (v3)

A simple, responsive personal portfolio built with HTML, CSS and JavaScript with Gemini AI intergrated into it. This repository contains the source for `index.html` plus styles, scripts and assets used to present projects, skills and contact information.

Project structure

- index.html — main page
- css/
  - style.css — primary styles
  - animations.css — animation helpers
  - responsive.css — responsive rules
- js/
  - main.js — main site scripts
  - animation.js — animation helpers
  - ai-chat.js —  chat/AI helper
- assets/
  - images/ — profile and project images
  - icons/ — favicon and icon assets

Features

- Responsive hero, projects and contact sections
- Animated background and micro-interactions
- Custom cursor and profile card
- Simple contact form (front-end only)

Getting started

1. Open the project
   - Clone or download the project folder to your machine.
2. Serve or open `index.html`
   - For the best dev experience, serve the folder using a local static server (recommended):

```powershell
# Using VS Code Live Server (recommended)
# Install the Live Server extension, then click "Go Live" in the status bar.

# Or use Python's simple HTTP server from PowerShell (if Python is installed):
python -m http.server 5500
# Then open http://localhost:5500 in your browser
```

3. Development notes
   - CSS is in `css/`. Edit `style.css` for layout and colors.
   - JS is in `js/`. `main.js` includes interactive behavior.
   - Add or replace images in `assets/images/`.

Favicon

- A scalable SVG favicon is included at `assets/icons/favicon.svg` and referenced from `index.html`.
- Browsers cache favicons aggressively. If you update the icon, force-refresh the page, open the site in an Incognito window, or temporarily change the filename (e.g., `favicon-v2.svg`) to force a reload.
- To support older browsers, consider adding a multi-resolution `favicon.ico` (16x16, 32x32) and PNG variants (32x32, 192x192) and reference them in the head.

Deployment

- This is a static site — deployable to GitHub Pages, Netlify, Vercel, or any static host.
- If deploying to GitHub Pages, put `index.html` at the repository root (already set) and enable Pages in the repo settings.

Attribution and license

- Images in `assets/images/` should be your own or properly licensed.
- This repository doesn't include a license file. Add `LICENSE` if you want to open-source the project.

Contact

- Author: Charllson
- Reach: update the email/links in `index.html` contact section to your real email and profiles.

---

If you'd like, I can:
- Add a `favicon.ico` + PNGs and update `index.html` head for full compatibility.
- Add a `package.json` + simple npm scripts to run a dev server and linting.
