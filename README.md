# Sawera Nadeem — React Portfolio

A responsive personal portfolio built with React, Vite, and regular CSS.

## Run locally

1. Install Node.js (LTS) if it is not installed.
2. Open this folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## Check the production build

```bash
npm run build
npm run preview
```

## Add your CV

Copy your CV PDF to `public/Sawera_Nadeem_CV.pdf`. The Download CV link in the hero already points to this exact path. If you use a different filename, update the link in `src/App.jsx`.

## Add real project links

Open `src/data.js`. Each project has `github` and `demo` values. Replace the empty strings with your real URLs, for example:

```js
github: "https://github.com/your-username/your-repository",
demo: "https://your-live-demo.example",
```

Leave a value as an empty string if you do not have that link yet. Do not add made-up URLs.

## Update your information

- Contact details and headline: `src/data.js`
- Projects, skills, certifications: `src/data.js`
- Section text and layout: `src/App.jsx`
- Colors, spacing, responsive styles: `src/styles.css`
- Page title and SEO description: `index.html`

## Notes

- No backend or database is required.
- The contact section uses normal `mailto:`, `tel:`, and LinkedIn links; it does not pretend to submit a form.
- Google Fonts is loaded from an external stylesheet for Manrope and DM Mono. If you want a fully offline site, remove the `@import` line from `src/styles.css`; fallback fonts are included.
- Project descriptions are intentionally conservative. Update them to match the features actually completed before sharing the portfolio with recruiters.
