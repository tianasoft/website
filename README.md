# Tianasoft website

A standalone Persian/RTL marketing page for **Visitors**, Tianasoft's event
registration and staff follow-up software. The homepage focuses on Visitors,
not Assistant. Visitors remains in development, without a public release or trial.
The owner-approved introduction/contact address is **info@tianasoft.ir**.

Plain HTML, CSS, and a small deferred JavaScript file for optional scroll reveals
and back-to-top visibility. No build, packages, backend, CDN, analytics, or external
runtime requests. Content, navigation, and the native FAQ work without JavaScript.
Illustrations and UI examples are conceptual, not product screenshots or real data.

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
assets/
  site.css
  site.js
  tianasoft-logo.png
  visitor-followup-workflow.webp
  trade-fair-hero.webp
  fonts/
    vazirmatn-arabic-wght-normal.woff2
    vazirmatn-latin-wght-normal.woff2
    Vazirmatn-OFL.txt
```

No install, build, application process, API, or URL rewrites are needed. The host
only needs to serve static files and use `index.html` as its directory index.
It works at a domain root or in a subdirectory such as `/website/`.

The production host is accessed with `ssh tianasoft`. Nginx serves
<https://tianasoft.ir/> from `/usr/share/nginx/html/tianasoft.ir/`.
Back up the existing published files outside the document root before deployment.
Upload assets before replacing `index.html`, and verify the public HTTPS URL.
Static file updates do not require an Nginx reload or application restart.

Do not upload `.git/`, agent guidance, or development documentation. Keep the font
license with the deployed fonts. Hosting permissions, HTTPS, and cache configuration
belong to the host; do not change them as part of a static content update.

## Edit

- Product copy, metadata, contact, and availability: `index.html`.
- Colors, spacing, typography, and responsive layout: `assets/site.css`.
- Optional motion and back-to-top visibility: `assets/site.js`.
- Logo, artwork, and fonts: `assets/`.

For contributor guidance, see [AGENTS.md](AGENTS.md).

## Checks

For page changes:

1. Open the page over HTTP and directly from `index.html`. Check Persian text,
   loaded Vazirmatn fonts, logo, both illustrations, and the development notice.
2. Inspect desktop (around 1280px) and narrow mobile (320–390px). Check RTL order,
   readable text, wrapping, and no page or hero horizontal scrolling; also check
   200% browser zoom. The quick-navigation strip may scroll horizontally.
3. Use Tab and Enter to check the skip link, section navigation, FAQ disclosure,
   and back-to-top link. Focus must be visible and links must reach the correct
   destination. Verify the contact link's `mailto:` address without sending mail.
4. Check the browser console and network for errors or external requests.
   Content, links, and FAQ must work with JavaScript disabled. With reduced motion
   enabled, content must remain visible without scroll animations.
5. Serve the page from a subdirectory and confirm CSS, JavaScript, fonts, logo,
   and artwork load. Confirm all relative resource and fragment links resolve.
6. Run `node --check assets/site.js` and `git diff --check`.

For documentation-only edits, check affected instructions, local links, and
whitespace; browser checks are not needed. No test framework is required for this
static page. Add focused automated tests only when meaningful behavior needs them.

## Assets and provenance

The page, CSS, and optional interactions were imported from
`../visitors/marketing-site/` at commit `177ac9d`, following its initial addition in
`1a51124`. That repository is a read-only source, not a runtime dependency.

The two artwork files are WebP conversions of the source site's PNG illustrations;
the trade-fair image is reduced to 1280px wide. The Tianasoft logo remains the
trimmed 128px copy of `../visitors/static/tianasoft-logo.png` already used here.
Vazirmatn variable WOFF2 files are unchanged and covered by the bundled
[SIL Open Font License](assets/fonts/Vazirmatn-OFL.txt).
