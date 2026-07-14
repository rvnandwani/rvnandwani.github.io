# Agent notes — Raghav Nandwani Portfolio

Guidance for future agents editing this static GitHub Pages portfolio.

## Principles

- Keep the site static: HTML / CSS / vanilla JS only. No frameworks, bundlers, or backends.
- **Do not hardcode resume facts in HTML.** Update `script.js` data objects (`EXPERIENCE`, `EDUCATION`, `SKILLS`, `CERTIFICATIONS`, `TESTIMONIALS`, `CONTACT`, `ABOUT`).
- There is **no dedicated Projects section**. Projects and media belong only in Experience / Education modals.
- Favicon / `images/logos/icon.png` is for branding assets (browser tab). Do **not** place the logo image in page layouts; the in-page brand mark is the “RN” text monogram.
- Experience cards show only: organization, location, role, duration. Detail lives in the modal.
- Education cards show only: university, degree (+ field), duration. Detail lives in the modal.
- Testimonials show a short highlight sentence only; name links to LinkedIn.
- Resume PDF is download-only (never embedded).

## File map

| File | Role |
|------|------|
| `index.html` | Semantic shell, SEO meta, section skeletons |
| `style.css` | Design system, layout, responsive, modal, motion |
| `script.js` | Data + renderers + modal + nav + scroll reveal |
| `resume/Raghav_Nandwani_ResumeAI.pdf` | Downloadable resume |
| `images/profile/` | Hero + about photos |

## Design constraints

- Premium AI-engineering aesthetic: modern, clean, technical.
- Avoid cyberpunk, neon glow, constant motion, purple-gradient clichés.
- Selective motion only: scroll fade-in, card hover, modal enter/exit, button feedback.
- Respect `prefers-reduced-motion`.

## Interaction contracts

- Escape and backdrop click close modals; restore focus to the opener.
- Mobile: stacked layouts; modals go full-screen under 768px.
- Certifications open `credential_url` in a new tab.
- **Critical:** `.modal-backdrop` must remain non-interactive when closed (`[hidden] { display: none !important }` plus `pointer-events: none` unless `.is-open`). Author `display: grid` alone will override `[hidden]` in some browsers and create an invisible full-page click trap.

## When updating content

1. Prefer editing the arrays/objects at the top of `script.js`.
2. Keep LinkedIn/media URLs on the matching experience (`media` array).
3. After content changes, spot-check modals, filters, and resume download path.
