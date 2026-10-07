import type { NextConfig } from 'next';
const slugs = ['app-development','school-management-system','erp-systems','custom-software-development','web-development','workflow-automation'];
const config: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  poweredByHeader: false,
  async redirects() { return slugs.map(slug => ({ source: `/${slug}-botswana`, destination: `/${slug}`, permanent: true })); },
  async headers() { return [{ source: '/:path*', headers: [
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
  ] }]; }
};
export default config;
