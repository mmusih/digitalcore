import type { Metadata } from 'next';
import {Header} from '@/components/header';
import {Footer,JsonLd} from '@/components/shared';
import {site,companySchema} from '@/lib/site';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'DigitalCore Business Systems',template:'%s | DigitalCore'},description:'Website and custom software development in Mogoditshane, Botswana.',robots:site.indexable?{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large'}}:{index:false,follow:false},icons:{icon:'/icon.svg',apple:'/apple-touch-icon.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><JsonLd data={companySchema}/></body></html>}
