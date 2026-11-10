# Award & Certificate Images

Place certificate and award photos here. Reference them in `src/content/awards/*.md` using the `certificateImage` and `awardImage` fields.

## Supported formats
- JPG, JPEG, PNG, WEBP (images)
- PDF (certificates — browsers will display them; for best results convert to image)

## Naming convention
Use descriptive, lowercase filenames with hyphens:
- `qualcomm-appreciation.jpg`
- `lnt-star-team-award.pdf`
- `tcs-star-of-month-oct.png`

## How awards appear on the site

1. Add your image file to this folder.
2. Edit the matching award entry in `src/content/awards/` and set:
   - `certificateImage: /images/awards/your-file.jpg`
   - `awardImage: /images/awards/your-ceremony-photo.jpg` (optional)
3. Run `npm run build` and the image will appear on `/awards` and the homepage preview.

## Current award entries (edit to add images)

| Award ID | File to edit | Suggested image |
|----------|-------------|-----------------|
| `qualcomm-appreciation` | `src/content/awards/qualcomm-appreciation.md` | `/images/awards/qualcomm-appreciation.*` |
| `lnt-star-team-award-2` | `src/content/awards/lnt-star-team-award-2.md` | `/images/awards/lnt-star-team-award-2.*` |
| `aip-anchor-award` | `src/content/awards/aip-anchor-award.md` | `/images/awards/aip-anchor-award.*` |
| `on-the-spot-8th-march` | `src/content/awards/on-the-spot-8th-march.md` | `/images/awards/on-the-spot-8th-march.*` |
| `star-of-the-month-oct` | `src/content/awards/star-of-the-month-oct.md` | `/images/awards/star-of-the-month-oct.*` |
| `star-team-award` | `src/content/awards/star-team-award.md` | `/images/awards/star-team-award.*` |

## Profile photo

Upload your headshot to `public/images/profile/anirban-chatterjee.jpg` and it will appear on the homepage hero and About page automatically.
