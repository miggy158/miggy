# Miggy — Personal Portfolio

A responsive personal portfolio website for **Miguel Jadraque**, a Computer Science student and frontend developer / UI-UX designer based in Caloocan City, Metro Manila, Philippines.

The site is built with plain HTML, CSS, and JavaScript — no frameworks and no build step required. It showcases an introduction, skills, projects, experience, certificates, education, and contact information, along with a live GitHub contribution calendar.

## Features

- **Responsive layout** — two-column desktop layout that collapses to a single column on smaller screens.
- **Dark mode** — toggle in the hero section; the preference is saved in `localStorage` under the `theme` key and restored on every page.
- **Skills preview and full tech stack page** — a summary on the home page with a "View All" page for the complete list.
- **Certificate gallery** — a "View All" page with a click-to-preview image modal. Close it with the close button, by clicking the overlay, or by pressing `Escape`.
- **GitHub contribution calendar** — rendered on the home page with [`github-calendar`](https://github.com/Bloggify/github-calendar), linking to the GitHub profile.
- **Project cards** — each project links to a live demo or its GitHub repository.
- **Contact section** — email, social links, and call-to-action cards.
- **Icons** — [Phosphor Icons](https://phosphoricons.com/) loaded from a CDN.
- **Fonts** — Inter, loaded from Google Fonts.

## Tech Stack

| Layer      | Tools                                                  |
| ---------- | ------------------------------------------------------ |
| Markup     | HTML5                                                  |
| Styling    | CSS3 (custom properties, flexbox/grid, media queries)  |
| Behavior   | Vanilla JavaScript (ES6+)                              |
| Icons      | Phosphor Icons (CDN)                                   |
| Fonts      | Google Fonts — Inter                                   |
| Extras     | `github-calendar` (CDN)                                |

No package manager, bundler, or compilation step is needed to run the site.

## Project Structure

```text
miggy/
├── public/
│   ├── index.html        # Home page: hero, about, skills, projects,
│   │                     # interests, experience, certificates,
│   │                     # education, contact, GitHub calendar
│   ├── skills.html       # Full tech stack page
│   ├── certificate.html  # Certificate gallery with image modal
│   ├── style.css         # All site styles, dark mode, responsive rules
│   ├── script.js         # Theme toggle and certificate modal logic
│   └── src/
│       └── assets/
│           ├── icons/    # Section icons (about, skills, experience, ...)
│           └── images/   # Profile photos, certificate scans, slider images
└── server/
    ├── .gitignore        # Ignores .env files and node_modules/
    └── package.json      # Placeholder for future server-side work (currently empty)
```

> The `server/` directory is reserved for future backend work and is not used by the current site.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, or Safari).
- Optional: Python or Node.js if you prefer to serve the files over a local web server.

### Option 1 — Open the file directly

Open `public/index.html` in your browser. Most features work this way, but the GitHub calendar and some CDN resources load more reliably when the site is served over HTTP.

### Option 2 — Serve locally (recommended)

Using Python:

```bash
cd public
python -m http.server 8000
```

Then visit <http://localhost:8000>.

Using Node.js:

```bash
npx serve public
```

Then open the URL printed in the terminal.

## Usage

| Page               | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| `index.html`       | Main portfolio page. Use the theme switch in the top-right to toggle dark mode. |
| `skills.html`      | Complete list of frontend, backend, developer, and AI/ML tools. Reached via **Skills → View All**. |
| `certificate.html` | All certificates. Click a certificate image to open a full-size preview. Reached via **Certificates → View All**. |

**Dark mode:** the selected theme persists across pages and visits through `localStorage`.

**Certificate preview:** click any certificate card on `certificate.html`, then close the overlay with `×`, the background, or the `Escape` key.

## Customization

- **Content** — edit the section markup in `public/index.html`, `public/skills.html`, and `public/certificate.html`. Most text, project links, certificates, and contact details are hard-coded there.
- **Styling** — all styles live in `public/style.css`. The layout has breakpoints at `800px` and `700px`. Dark-mode overrides are scoped under `body.dark-mode`.
- **Images and icons** — add or replace files in `public/src/assets/images/` and `public/src/assets/icons/`, then update the corresponding `src` attributes.
- **GitHub calendar** — change the username in the inline script at the bottom of `public/index.html` (`GitHubCalendar('.calendar', 'miggy158', ...)`).
- **Profile links** — update the CV link, email, and social URLs in the hero and contact sections of `public/index.html`.

## Deployment

Because the site is fully static, the contents of `public/` can be deployed to any static host, such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages. Set the publish/output directory to `public`.

## Notes

- The home page links to `blog.html` in the hero's **Read my blog** button, but that page is not included in this repository. Add `public/blog.html` or update the link in `public/index.html`.
- The GitHub calendar and Phosphor Icons are loaded from CDNs, so an internet connection is required for them to appear.
- `public/skills.html` references its favicon as `../src/assets/images/Image.jpg`; if the favicon does not appear, change it to `src/assets/images/Image.jpg` to match the other pages.

## License

© Miguel Jadraque. All rights reserved.
