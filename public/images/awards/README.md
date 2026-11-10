# Award & Certificate Files

Certificate PDFs and award photos used on `/awards` and the homepage preview.

## Files currently in use

| File | Award entry (`src/content/awards/`) |
|------|--------------------------------------|
| `qualcomm-appreciation.pdf` | `qualcomm-appreciation.md` |
| `aip-anchor.pdf` | `aip-anchor-award.md` (primary) |
| `aip-anchor-2.pdf` | `aip-anchor-award.md` (additional) |
| `star-team-award.pdf` | `star-team-award.md` (primary) |
| `star-team-award-2.pdf` | `star-team-award.md` (additional) |
| `star-of-the-month-oct.pdf` | `star-of-the-month-oct.md` |
| `on-the-spot-8th-march.pdf` | `on-the-spot-8th-march.md` (primary) |
| `on-the-spot-8th-march-2.pdf` | `on-the-spot-8th-march.md` (additional) |
| `sun-certified-java-programmer-5.pdf` | `scjp-5.md` |

## Adding a new certificate (no code changes needed)

1. Drop the file here (JPG, PNG, WEBP or PDF). Use a lowercase-hyphen filename,
   e.g. `citi-engineer-excellence.pdf`.
2. Either:
   - open the admin UI at `/admin/` → **Awards & Recognition** → set
     **Certificate Image**, or
   - edit the award's `.md` file and add:
     `certificateImage: "/images/awards/your-file.pdf"`
3. Run `npm run build` (or let Netlify rebuild) — the thumbnail, "View
   certificate" button and full-screen viewer pick it up automatically.

PDF certificates render inline in the card thumbnail and in the full-screen
lightbox (zoom via the viewer, ← → to browse, Esc to close, download link at
the bottom). Images are shown with `object-fit: cover` in cards and
`object-fit: contain` in the lightbox so certificates are never cropped.

## Notes

- Originals are preserved as uploaded — nothing is re-encoded.
- Keep files under ~2 MB each for fast page loads.
- Profile photo lives in `../profile/anirban-chatterjee.jpg`.
