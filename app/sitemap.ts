import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
import {services,industries} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{return site.indexable?['','/services','/industries','/about','/contact','/privacy',...services.map(s=>'/'+s.slug),...industries.map(i=>'/industries/'+i.slug)].map(path=>({url:site.url+path})):[]}
