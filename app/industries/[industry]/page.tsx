import {notFound} from 'next/navigation';
import Link from 'next/link';
import {industries} from '@/lib/content';
import {pageMetadata} from '@/lib/site';
import {Breadcrumb,ServiceLinks,ContactCta} from '@/components/shared';
export const dynamicParams=false;
export function generateStaticParams(){return industries.map(i=>({industry:i.slug}))}
export async function generateMetadata({params}:{params:Promise<{industry:string}>}){const {industry}=await params;const item=industries.find(i=>i.slug===industry);if(!item)return {};return pageMetadata(`${item.name} Software & Websites`,item.description,`/industries/${industry}`)}
export default async function Industry({params}:{params:Promise<{industry:string}>}){const {industry}=await params;const item=industries.find(i=>i.slug===industry);if(!item)notFound();return <><section className="wrap page-intro"><Breadcrumb items={[{name:'Industries',href:'/industries'},{name:item.name,href:`/industries/${industry}`} ]}/><span className="eyebrow">{item.name}</span><h1>{item.heading}</h1><p>{item.body}</p>{industry==='education'&&<Link className="button" href="/school-management-system">Explore the school ERP ↗</Link>}</section><section className="wrap section compact"><div className="feature-grid">{item.offerings.map(([title,body])=><article key={title}><h2>{title}</h2><p>{body}</p></article>)}</div><h2 className="related-heading">Explore our services.</h2><ServiceLinks slugs={item.links}/></section><ContactCta/></>}
