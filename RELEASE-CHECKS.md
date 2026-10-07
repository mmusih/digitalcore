# Release checks — 7 October 2026

## Passed locally

- Next.js production build, including TypeScript and prerendering.
- 16 public pages return HTTP 200, with distinct titles and descriptions and one primary heading per page.
- Canonicals, production indexing metadata and JSON-LD business contact details.
- All 16 internal page-link destinations, sitemap and robots file.
- Six original `-botswana` service URLs permanently redirect to the retained service URLs.
- An unknown URL returns HTTP 404.
- Logo, SVG favicon, social-sharing PNG and Apple icon return HTTP 200.
- Desktop visual inspection; homepage industry tiles at 390 px and school ERP page at 320 px with no horizontal overflow in the inspected views.
- Interactive core changes state; school capability tabs update their content.
- Mobile navigation opens, Escape closes it and focus returns to the trigger.
- Education tile navigates to its page; school ERP link opens the product page.
- Narrow mobile heading adjusted after visual inspection, then rebuilt and checked again.

Verification uses the actual production server. Re-run route checks with `node scripts/check-release.mjs` after building with `APP_URL=https://dbsystems.tech` and `SITE_INDEXABLE=true`, and starting on port 4392. Set TEST_URL and APP_URL if testing different origins. The check script is retained locally; it is not needed in the upload ZIP.

## Delivery scope

This release uses the club project's Next.js/React/TypeScript/Tailwind/Radix UI foundation. It is a public marketing site; it has no editable CMS or admin login. Contact links use the user's phone/email application. There is no contact form submission endpoint or enquiry database, so database and SMTP setup are not required.

The Laravel source remains in the parent directory for reference. Only the new Next.js application is included in the deployment ZIP.

## Requires verification after deployment

Hostinger build, final domain and HTTPS configuration, actual phone/email handling, mailbox delivery, Google structured-data validation, Search Console ownership/indexing, and deployed performance/Core Web Vitals. No live deployment or Google-account changes have been performed. This delivery makes no ranking guarantee.
