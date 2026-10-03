# Tianasoft website

A small Persian/RTL page introducing two products in development:
**Assistant** (document-grounded Persian voice assistance) and **Visitors**
(event registration and staff follow-up).

Plain HTML and CSS, with local assets. No build, packages, backend, CDN, analytics,
or external runtime requests. There is currently no behavior requiring JavaScript.
Trials and screenshots are not included.

## Preview

Open `index.html` directly in a browser. For an HTTP preview, if Python 3 is available:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open <http://127.0.0.1:8080/>. This command is for local preview, not production.

## Deploy

Copy these files together into the public directory of an existing static web
server or hosting service, keeping their relative paths:

```text
index.html
style.css
assets/
  tianasoft-logo.png
  fonts/
    vazirmatn-arabic-wght-normal.woff2
    vazirmatn-latin-wght-normal.woff2
    Vazirmatn-OFL.txt
```

No install, build, application process, API, or URL rewrites are needed. The host
only needs to serve static files and use `index.html` as its directory index.
It works at a domain root or in a subdirectory such as `/website/`.

Do not upload `.git/`, agent guidance, or development documentation. Keep the font
license with the deployed fonts. After uploading, check the actual public URL;
hosting permissions, HTTPS, and cache configuration belong to the host.

## Edit

- Product copy, metadata, and availability: `index.html`.
- Colors, spacing, typography, and responsive layout: `style.css`.
- Logo and fonts: `assets/`.

Product descriptions were checked against `../assistant/README.md` and
`../visitors/README.md`; those repositories are not runtime dependencies.
For contributor guidance, see [AGENTS.md](AGENTS.md).

## Checks

For page changes:

1. Open the page over HTTP and directly from `index.html`. Check the Persian
   text, loaded Vazirmatn font, logo, and both products.
2. Inspect desktop (around 1280px) and narrow mobile (320–390px). Check RTL order,
   readable text, wrapping, and no horizontal scrolling; also check 200% zoom.
3. Use Tab and Enter to check the skip link, home link, and product navigation.
   Focus must be visible, and each link must reach the correct destination.
4. Check the browser console and network for errors or external requests.
   Content and navigation must still work with JavaScript disabled.
5. Serve the page from a subdirectory and confirm CSS, fonts, and logo load.
6. Run `git diff --check`.

For documentation-only edits, check affected instructions, local links, and
whitespace; browser checks are not needed. No test framework is required for this
static page. Add focused automated tests only when meaningful behavior needs them.

## Assets

The Tianasoft logo is a trimmed, reduced-size copy of
`../visitors/static/tianasoft-logo.png`. Vazirmatn variable WOFF2 files are copied
unchanged from `../visitors/static/fonts/` and covered by the bundled
[SIL Open Font License](assets/fonts/Vazirmatn-OFL.txt).
