# AGENTS.md

## Project overview
This repository is a personal landing page / link-in-bio site for Nelson Souza, built with Next.js and React. The app renders a branded homepage with social links and portfolio actions.

Primary files and responsibilities:
- `app/page.tsx` – main landing page layout and link cards
- `app/layout.tsx` – document metadata and root layout
- `app/globals.css` – design system and styling for the landing page
- `public/` – static assets such as profile image/logo
- `tests/rendered-html.test.mjs` – smoke test for rendered HTML output

## Development workflow
Use these commands from the repository root:
- `npm install`
- `npm run dev` – run the app locally
- `npm run build` – verify the production build
- `npm test` – run the build and rendered HTML smoke test

## Coding expectations
- Prefer small, focused changes.
- Preserve the existing branding, color palette, and tone of the page.
- Keep content in Portuguese unless the user explicitly asks otherwise.
- Do not introduce unnecessary dependencies or new frameworks.
- If modifying UI, keep the design simple and polished.
- For page content changes, update the relevant social links, headings, and metadata consistently.

## Validation
Before marking a task complete, verify the relevant behavior with:
- `npm run build` for build-related changes
- `npm test` when the rendered page or content is affected

## Notes
This project is intentionally lightweight and focused on a single-page personal brand experience. Avoid expanding it into a large app unless the user explicitly requests additional functionality.
