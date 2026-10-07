import {IndustryTiles,Breadcrumb,ContactCta} from '@/components/shared';
import {pageMetadata} from '@/lib/site';
export const metadata=pageMetadata('Software & Website Services by Industry','Explore DigitalCore services for education, healthcare, retail and professional services. School ERP, websites and custom software in Botswana.','/industries');
export default function Industries(){return <><section className="wrap page-intro"><Breadcrumb items={[{name:'Industries',href:'/industries'}]}/><h1>Choose your industry.</h1><p>Explore the school ERP and the custom development services available for your organisation.</p></section><section className="wrap section compact"><IndustryTiles/></section><ContactCta/></>}
