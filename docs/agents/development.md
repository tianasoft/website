# Development

## Boundaries

This repository introduces Visitors; it does not host the application itself.
Keep content in semantic HTML, presentation in CSS, and any future necessary
interaction in a small, local, deferred JavaScript file. Do not add JavaScript
solely to populate content that can live in HTML.

No framework, bundler, backend, form submission service, or third-party runtime
is needed. Keep every resource URL relative so copying the published files is
the whole deployment. Do not add SPA routing, a service worker, or a dependency
on sibling repositories.

## Content and UI

- Preserve `lang="fa"`, `dir="rtl"`, Persian copy, and local Vazirmatn fonts.
  Use logical CSS properties and isolate Latin text with `dir` or `bdi`.
- Preserve the imported illustration-led product story and responsive layout.
  Feature cards and conceptual UI examples are informational, not interactive
  product controls. Do not add inactive buttons or screenshot placeholders.
- Preserve semantic headings, native links, visible focus, the skip link,
  sufficient contrast, and readable mobile layouts. Do not hide overflow to
  conceal layout bugs or make essential content depend on JavaScript.
- Describe only capabilities supported by the product sources. The live demo
  destination is approved in README; do not infer commercial terms or guarantees.
  Product screenshots are approved only from a local disposable instance using
  synthetic data and neutral sample organization branding. Never capture live
  customer records or copy customer branding, contacts, private documents, or
  credentials into marketing assets.
- No invented launch dates, prices, customer counts, testimonials, or contacts.
  Keep the availability notice factual: the demo is available, with ongoing bug
  fixes and feature development. Use only the approved demo and contact
  destinations in README; do not claim demo resets, privacy isolation, or delivery
  automation without evidence.

## Change and documentation discipline

Follow the short working rules in [AGENTS.md](../../AGENTS.md). Prefer a direct
local edit over a reusable abstraction for a one-off need. Keep changes scoped;
do not import the sibling applications or modify them to support this page.

Each instruction has one home: `AGENTS.md` is the entry point, this document owns
contributor detail, and [README.md](../../README.md) owns preview, deployment,
asset provenance, and verification. Keep them consistent when behavior changes.
Do not add speculative plans, duplicate guides, or routine check reports.

Use the [README checks](../../README.md#checks) proportionately. Syntax checks do
not replace inspecting the rendered page. Do not install tooling merely to
test static copy; document genuine verification limitations instead.
