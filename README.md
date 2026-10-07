# DigitalCore website

Deploy this folder, not the Laravel project one directory above it.

## Runtime

Next.js 16.3.4, React 19.2.6, TypeScript, Tailwind CSS 4 and Radix UI, matching the club project's core stack. Standard Node.js server; Node 24 recommended. No Sites or Cloudflare account is required.

This is a public marketing site with static, server-rendered pages. Enquiries use direct phone and email links, not a submitted website form. It has no admin login and requires no database, SMTP credentials or migration. MySQL/Drizzle can be added when there is a database-backed feature to store or manage; unused database dependencies are not included.

## Local use

1. Run `npm ci`.
2. Copy `.env.example` to `.env.local` and use `SITE_INDEXABLE=false` for local work.
3. Run `npm run dev`.

Production build: `npm run build`. Start: `npm start`. Next.js uses the `PORT` provided by the host.

## Editing

- `lib/content.ts`: services, industries and school ERP copy.
- `lib/site.ts`: contact details and metadata helpers.
- `app/globals.css`: design, responsive layouts and motion.
- `components`: reusable navigation, school capability tabs and core interaction.
- `public`: vector logo, favicon, social-sharing image and Apple icon.

The four industry tiles open real pages. The six original service URLs remain available; old `-botswana` service URLs have permanent redirects. No client names, customer logos, testimonials or invented performance figures are published.

SEO includes unique metadata, canonicals, business and breadcrumb structured data, sitemap, robots, and a staging noindex setting. `APP_URL` and `SITE_INDEXABLE` are read during the build: rebuild after changing them. The index flag defaults to false unless explicitly set to `true`.

Scroll effects are progressive enhancements using native scrolling. Content remains present without motion or JavaScript. The mobile menu and capability tabs use Radix UI for keyboard and focus behaviour. Reduced-motion preferences are respected.

See `HOSTINGER.md` for upload instructions and `RELEASE-CHECKS.md` for validation and remaining live checks.
