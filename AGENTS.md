# Agent Guide

A single-page, Persian, right-to-left marketing site for Tianasoft's Visitors
product. Keep it copy-and-serve static HTML/CSS, with plain JavaScript only when needed.

## Project map

- `index.html` — page structure, Persian copy, and product status.
- `assets/site.css` — responsive layout and local Vazirmatn font declarations.
- `assets/site.js` — optional scroll reveals and back-to-top visibility.
- `assets/` — Tianasoft logo, illustrations, fonts, and font license.
- [README.md](README.md) — preview, deployment, and verification.
- [Development](docs/agents/development.md) — scope, UI, and documentation rules.

## Working rules

- KISS: make the smallest complete change. No framework, package manager, build
  step, backend, or speculative scaffolding.
- Communicate with the owner in English. Website copy stays Persian; source
  identifiers and documentation stay English.
- Preserve RTL, local assets, accessibility, and relative URLs. The page must work
  at a domain root, in a subdirectory, and when opened directly.
- Visitors is in development, with no public release or trial. The approved
  contact is `info@tianasoft.ir`. Illustrative UI is labeled conceptual; do not
  invent availability, claims, contact details, or real product screenshots.
- Sibling product repositories are read-only references unless explicitly in scope.
- Ask about material scope changes; preserve unrelated work. Do not deploy,
  commit, or push without explicit authorization.

## Verification

Use the [README checks](README.md#checks) for the affected scope. Visually check
desktop and mobile after layout changes. Report what remains unverified.
