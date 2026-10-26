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

- **Hours** are in four places in `index.html`: the table in the "Hours & location" section (`#visit`), the
  two hours answers in the FAQ (`#faq`), `openingHoursSpecification` in the JSON-LD in the `<head>`, and the
  breakfast opening time in the "Every day" section ("Mornings start at 7"). Change them all together, and
  update Google, Yelp and the other listings so they all agree. (Confirmed by the owner on 2026-10-24.)
- **Reservations, outdoor seating and dogs** (reservations by phone; dogs welcome in the outdoor seating) are in
  the list under the address in "Hours & location", two FAQ answers, and `acceptsReservations` in the JSON-LD.
- **Phone number** (707) 465-5400 is in the hero ("Call"), the "Every day" section, the "Hours & location"
  address and list, the reservations answer in the FAQ, the footer, the JSON-LD `telephone`, and `404.html`.
  Search both HTML files for `465-5400` and `4655400` to find every copy.
- **Menu**: the six signature dishes and the full menu are in the `#menu` section of `index.html`. Dishes are
  also named in the About and "Every day" paragraphs, the FAQ (clam chowder, kids pancakes) and the dish photos
  in the JSON-LD `image` list; update those too if a dish changes or is dropped. Prices are not on the site;
  online ordering (Toast) shows them.
- **Images** are cached by browsers for a week, and fonts for a year. When you replace one, give the new file a
  new name and update every reference to it (`index.html`, `styles.css`, the JSON-LD, `404.html`) instead of
  overwriting the old file, or visitors keep seeing the old one.
- **Old addresses**: only the old site's real pages are redirected (listed in `vercel.json`). Everything else,
  including old spam pages, must keep answering 404, so never add a catch-all redirect. The first redirect is a
  stopgap: it sends a malformed Google Business Profile website link
  (`http://www.seasiderestaurantbar.com/https://seasiderestaurantbar.com/`, live from 2026-10-24) to the home page.
  Remove it once the profile's website shows `https://seasiderestaurantbar.com/`.
- **Sitemap date**: after changing anything visible on the page (hours, menu, phone, text), set `<lastmod>` in
  `sitemap.xml` to that day's date (YYYY-MM-DD) in the same commit.
- **IndexNow**: `b7e9d7684edfe2c0f0c01c74dc568e86.txt` is the site's IndexNow key file. Bing (which ChatGPT search and
  Copilot draw on) and the other IndexNow search engines check it before accepting a re-crawl request, so never
  delete or rename it. After a change is live, ask them to re-crawl the page:
  `curl "https://api.indexnow.org/indexnow?url=https://seasiderestaurantbar.com/&key=b7e9d7684edfe2c0f0c01c74dc568e86"`
  (HTTP 200 or 202 means accepted).
- **Link to the hotel**: `containedInPlace` in the JSON-LD points at `https://oceanfrontlodge1.com/#hotel`, the `@id` of
  the hotel's own structured data on oceanfrontlodge1.com. If either side changes, change both together.
