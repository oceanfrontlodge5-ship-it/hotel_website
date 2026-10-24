# Seaside Restaurant & Bar website

The website of Seaside Restaurant & Bar, inside the Oceanfront Lodge at 100 A Street, Crescent City, CA:
https://seasiderestaurantbar.com/

It is a plain static site with no build step:

- `index.html`: the whole site on one page (hero, about, full bar, breakfast/lunch/dinner, menu, hours and
  location, FAQ, footer). Its `<head>` also holds the title, description, social-sharing tags and the
  structured data (the JSON-LD script) that search engines read.
- `styles.css` and `script.js`: the look and the in-page scrolling.
- `images/`: photos and icons. `fonts/`: Playfair Display and Source Sans 3, served from this site (SIL Open
  Font License, see `fonts/OFL.txt`).
- `404.html`: the page shown for addresses that don't exist.
- `vercel.json`: redirects (www to the bare domain, `/index.html` to `/`, and the old site's real pages to the
  matching section) and caching and security headers.
- `robots.txt`, `sitemap.xml`, `favicon.ico`.
- `.vercelignore` keeps this README off the live site.

## Preview

From the repo folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/. The redirects and headers in `vercel.json` only work on Vercel, and this
local server shows its own 404 page instead of `404.html`.

## Publishing

The repo is connected to Vercel through GitHub: every push to `main` deploys to the live site. Work on a
branch and merge it into `main` when it is ready to go live.

## When something changes

- **Hours** are in three places in `index.html`: the table in the "Hours & location" section (`#visit`), the
  two hours answers in the FAQ (`#faq`), and `openingHoursSpecification` in the JSON-LD in the `<head>`.
  Change all three together. Until the owner confirms the hours, each visible value is marked with
  `<!-- HOURS (provisional) -->`. Also update Google, Yelp and the other listings so they all agree.
- **Phone number** (707) 465-5400 is in the hero ("Call"), the "Every day" section, the "Hours & location"
  address, the footer, the JSON-LD `telephone`, and `404.html`. Search both HTML files for `465-5400` and
  `4655400` to find every copy.
- **Menu**: the six signature dishes and the full menu are in the `#menu` section of `index.html`. Prices are
  not on the site; online ordering (Toast) shows them.
- **Images** are cached by browsers for a week, and fonts for a year. When you replace one, give the new file a
  new name and update every reference to it (`index.html`, `styles.css`, the JSON-LD, `404.html`) instead of
  overwriting the old file, or visitors keep seeing the old one.
- **Old addresses**: only the old site's real pages are redirected (listed in `vercel.json`). Everything else,
  including old spam pages, must keep answering 404, so never add a catch-all redirect.
