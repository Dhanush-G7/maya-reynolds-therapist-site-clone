# Dr. Maya Reynolds therapist site

Next.js site for Dr. Maya Reynolds, PsyD.

## Local images

All site images are bundled locally and do not depend on Maya's website or a remote image host:

- `public/images/maya/portrait.jpg`
- `public/images/maya/office1.jpeg`
- `public/images/maya/office2.jpeg`

The homepage references these files with `/images/maya/...`, so they will continue to work after deployment as long as the `public` folder is deployed with the app.

## Run locally

```bash
npm install
npm run dev
```
