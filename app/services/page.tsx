import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {services} from '@/lib/content';
import {pageMetadata} from '@/lib/site';
import {Breadcrumb,ContactCta} from '@/components/shared';
export const metadata=pageMetadata('Website, App & Software Development Services','Explore DigitalCore services: websites, custom software, mobile apps, ERP, school management and workflow automation in Botswana.','/services');
export default function Services(){return <><section className="wrap page-intro"><Breadcrumb items={[{name:'Services',href:'/services'}]}/><h1>Our services.</h1><p>Websites, applications and systems for your organisation.</p></section><section className="wrap section compact"><div className="service-grid all-services">{services.map((s,i)=><Link href={`/${s.slug}`} key={s.slug} className="service-card"><span className="eyebrow">0{i+1}</span><h2>{s.name}</h2><p>{s.intro}</p><span className="card-link">Explore service <ArrowUpRight size={18}/></span></Link>)}</div></section><ContactCta/></>}
