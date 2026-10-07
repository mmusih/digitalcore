import assert from 'node:assert/strict';
const base = process.env.TEST_URL || 'http://127.0.0.1:4392';
const origin = process.env.APP_URL || 'https://dbsystems.tech';
const paths=['/','/services','/industries','/about','/contact','/privacy','/web-development','/custom-software-development','/app-development','/erp-systems','/workflow-automation','/school-management-system','/industries/education','/industries/healthcare','/industries/retail','/industries/professional-services'];
const titles=new Set();const descriptions=new Set();const internalLinks=new Set();
for(const path of paths){
 const response=await fetch(base+path);assert.equal(response.status,200,path);
 const html=await response.text();assert.equal((html.match(/<h1\b/g)||[]).length,1,`${path}: one H1`);
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert(title?.includes('DigitalCore'),`${path}: branded title`);assert(!titles.has(title),`${path}: unique title`);titles.add(title);
 const description=html.match(/<meta name="description" content="([^"]+)"/)?.[1];assert(description,`${path}: description`);assert(!descriptions.has(description),`${path}: unique description`);descriptions.add(description);
 const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];assert(canonical);assert.equal(new URL(canonical).href,new URL(path,origin).href,`${path}: canonical`);
 assert(html.includes('tel:+26776204774'));assert(html.includes('Plot 4612'));assert(!html.includes('Kweneng'));assert(!html.includes('Trusted by'));
 assert(html.match(/<meta name="robots" content="[^"]*index, follow/),`${path}: production indexable`);
 for(const [,schema] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)){const data=JSON.parse(schema);if(data['@graph']){const business=data['@graph'].find(x=>x['@type']==='ProfessionalService');assert.equal(business.telephone,'+26776204774');assert.equal(business.address.addressCountry,'BW')}}
 for(const [,href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)){if(href.startsWith('/'))internalLinks.add(href.split(/[?#]/)[0]||'/')}
}
for(const path of internalLinks)assert(paths.includes(path),`Unexpected internal link ${path}`);
const sitemap=await(await fetch(base+'/sitemap.xml')).text();assert.equal((sitemap.match(/<loc>/g)||[]).length,16);
for(const path of paths)assert(sitemap.includes(origin+(path==='/'?'':path)),`Missing sitemap URL ${path}`);
const robots=await(await fetch(base+'/robots.txt')).text();assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
for(const slug of ['app-development','school-management-system','erp-systems','custom-software-development','web-development','workflow-automation']){const response=await fetch(`${base}/${slug}-botswana`,{redirect:'manual'});assert([301,308].includes(response.status));assert(response.headers.get('location')?.endsWith('/'+slug))}
assert.equal((await fetch(base+'/this-page-does-not-exist')).status,404);
for(const asset of ['/icon.svg','/logo.svg','/social-preview.png','/apple-touch-icon.png'])assert.equal((await fetch(base+asset)).status,200,asset);
console.log(`PASS: ${paths.length} pages, unique metadata, H1s, canonicals, production indexing, business schema, contacts, ${internalLinks.size} internal link destinations, sitemap, robots, redirects, 404 and brand assets.`);
