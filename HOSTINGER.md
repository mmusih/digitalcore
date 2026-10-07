# Deploy DigitalCore on Hostinger Business

Use Hostinger's **Node.js / Deploy Web App** flow. Do not upload this application as a PHP site or as static files in `public_html`.

## Before starting

- Keep a backup of any currently deployed website before replacing it.
- Use the new `digitalcore-next-hostinger.zip` delivered in the parent project's `outputs` folder. The ZIP has `package.json` at its root.
- Do not use the older `digitalcore2.zip`; it contains the previous Laravel website.

## Upload

1. Sign in to hPanel and open **Websites → Add Website → Deploy Web App** (some versions label this **Node.js Web App**).
2. Choose **Upload your website files** and upload `digitalcore-next-hostinger.zip`. For an existing Node.js app, use its redeploy/upload-new-files flow.
3. Confirm these settings:

| Setting | Value |
| --- | --- |
| Framework | Next.js |
| Node.js | 24 |
| Project root | `.` |
| Install command, if requested | `npm ci` |
| Build command | `npm run build` |
| Build output, if requested | `.next` |
| Start command, if requested | `npm start` |

4. Add these environment variables before the build:

| Variable | Value |
| --- | --- |
| `APP_URL` | Your exact public HTTPS origin, for example `https://dbsystems.tech` |
| `SITE_INDEXABLE` | `true` for the public production website; `false` for a temporary/staging deployment |

`APP_URL` must not contain a page path, query string, credentials or fragment. If using a Hostinger temporary address for a preview, use that address and `SITE_INDEXABLE=false`; set the final origin and `true` and **rebuild** when going live. Do not set a custom `PORT`: Hostinger provides it.

5. Click **Deploy** and wait for the build to finish.
6. Connect the intended domain using hPanel's displayed instructions, enable HTTPS and choose one preferred hostname. Redirect the other hostname (for example `www`) to it. `APP_URL` must match the preferred hostname.
7. If you change `APP_URL` or `SITE_INDEXABLE`, redeploy so the static pages, metadata and sitemap are regenerated.

No MySQL database, database import, admin password, SMTP service or Laravel command is needed for this release. Contact buttons call +267 76204774 or open an email addressed to info@dbsystems.tech. Confirm that this existing mailbox receives mail before launch.

## Check after deployment

- Open the homepage on desktop and phone. Test the mobile menu and industry links.
- Open Education, then the school ERP page. Test capability tabs and the demo email link.
- Confirm address and phone, and make a test phone/email enquiry yourself.
- Open `/sitemap.xml` and `/robots.txt`. The production sitemap should list 16 pages on your final HTTPS domain.
- Check the source of a public page: its canonical should use the final domain and its robots metadata must allow indexing.
- Open `/web-development-botswana`: it should permanently redirect to `/web-development`. An invented URL must return a real 404.
- Run Google's Rich Results Test and PageSpeed Insights on the deployed URL. Local build checks are not a Google ranking or Core Web Vitals result.
- Verify the domain in Google Search Console, submit `/sitemap.xml` and request indexing of the homepage and school ERP page.
- If eligible, create or update your Google Business Profile with the same name, address and phone; do not create a duplicate listing.

## Updating later

Keep a copy of the last working ZIP. Edit source files, rebuild and upload a new ZIP through the app's deployment page. This site stores no enquiries or editable content in a database, so there is no database migration or content import step.

## Official instructions

- https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/
- https://www.hostinger.com/support/how-to-add-environment-variables-during-node-js-application-deployment/
- https://www.hostinger.com/support/how-to-redeploy-a-node-js-application/
