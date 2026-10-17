# Nucleus

Nucleus is a travel stories and trip-planning website for discovering memorable
destinations and planning a stay.

## Features

- Destination imagery and editorial travel stories, including individual blog pages.
- Trip planning with an interactive booking calendar.
- Traveller reviews, contact details, and an interactive Leaflet map.
- Responsive navigation and a light/dark theme toggle that remembers your choice.

## Built with

React, React Router, Vite, Swiper, Leaflet, and React DayPicker.

## Local development

```sh
npm ci
npm run dev
```

Run the production checks with:

```sh
npm run lint
npm run build
```

## GitHub Pages

The published site URL is `https://ngurahariwhrihaspati.github.io/nucleus/`.
GitHub Pages is configured to use **GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` installs dependencies, runs lint and build checks,
then deploys the site whenever changes are pushed to `main`.

Vite uses the `/nucleus/` base path for production builds, and the Pages `404.html`
fallback keeps blog post routes working when opened directly.
