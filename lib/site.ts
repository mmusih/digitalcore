import type { Metadata } from 'next';
const origin = new URL(process.env.APP_URL || 'https://dbsystems.tech');
if (!['http:', 'https:'].includes(origin.protocol) || origin.pathname !== '/' || origin.search || origin.hash || origin.username || origin.password) throw new Error('APP_URL must be a plain HTTP(S) origin.');
export const site = {
  name: 'DigitalCore Business Systems', url: origin.origin,
  phone: '+267 76204774', phoneHref: 'tel:+26776204774', email: 'info@dbsystems.tech',
  street: 'Plot 4612, Mogoditshane - Gabane Industrial Area', country: 'Botswana',
  indexable: process.env.SITE_INDEXABLE === 'true',
};
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {title: {absolute: `${title} | DigitalCore`},description,alternates:{canonical:path},openGraph:{title:`${title} | DigitalCore`,description,url:path,siteName:site.name,type:'website',images:[{url:'/social-preview.png',width:1200,height:630,alt:'DigitalCore Business Systems — websites, apps and management systems'}]},twitter:{card:'summary_large_image',title:`${title} | DigitalCore`,description,images:['/social-preview.png']}};
}
export const companySchema = {
  '@context':'https://schema.org','@graph':[
    {'@type':'ProfessionalService','@id':`${site.url}/#business`,name:site.name,url:site.url,logo:`${site.url}/logo.svg`,image:`${site.url}/social-preview.png`,telephone:'+26776204774',email:site.email,address:{'@type':'PostalAddress',streetAddress:site.street,addressLocality:'Mogoditshane',addressCountry:'BW'},description:'Website, mobile app and custom software development in Mogoditshane, Botswana.'},
    {'@type':'WebSite','@id':`${site.url}/#website`,url:site.url,name:site.name,alternateName:'DigitalCore',inLanguage:'en',publisher:{'@id':`${site.url}/#business`}}
  ]
};
