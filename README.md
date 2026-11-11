# 2CM demo shop

A colorful demo storefront for 2CM, a world trading company selling everyday electronics: power banks, earphones, and speakers. Prices are in Hong Kong dollars.

Checkout is a demonstration only. Orders placed here are not fulfilled, and no payment is taken. Contact details on the site are placeholders.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Local dev is served at `/` and does not use the `/2cm-shop` prefix.

To use another port:

```bash
npx next dev --port 43123
```

## GitHub Pages

The public demo is [https://yinp9002.github.io/2cm-shop/](https://yinp9002.github.io/2cm-shop/).

Pushes to `main` run `.github/workflows/pages.yml`, which builds a static export and deploys the `out` directory to GitHub Pages. Pull requests run the same build without deploying. In the repository settings, set Pages to deploy from GitHub Actions.

The Pages build is selected with `GITHUB_PAGES=true` (`npm run build:pages`). That build:

- statically exports the site (`output: 'export'`) into `out/`
- sets `basePath` to `/2cm-shop` so links and `/_next` assets load under the project site
- adds trailing slashes so GitHub Pages can serve each route from `route/index.html`
- turns off Next.js image optimization, which needs a server
- turns off Cache Components and partial prefetching, which cannot be used with a static export
- copies `public/.nojekyll` so GitHub Pages does not ignore the `_next` folder

`PAGES_BASE_PATH` overrides `/2cm-shop` when you need a different subpath. Leave both variables unset for local development and for `npm run build` / `npm run start`.

To produce the Pages export locally:

```bash
npm run build:pages
```

## Scripts

- `npm run dev` — start the development server at [http://localhost:3000](http://localhost:3000)
- `npm run build` — production build for `npm run start`
- `npm run build:pages` — static GitHub Pages export (`GITHUB_PAGES=true`)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

The cart is stored in the browser. Product photos are the official demo photo pack.
