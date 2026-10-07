'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {Dialog} from 'radix-ui';
import {Menu,X,ArrowUpRight} from 'lucide-react';
import {Brand} from './brand';
const links=[['Services','/services'],['Industries','/industries'],['About','/about'],['Contact','/contact']];
export function Header(){const [open,setOpen]=useState(false);const path=usePathname();return <header className="site-header"><div className="wrap nav-row"><Link href="/" aria-label="DigitalCore home"><Brand/></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(([name,url])=><Link key={url} href={url} aria-current={path===url?'page':undefined}>{name}</Link>)}</nav><Link className="button small desktop-cta" href="/contact">Discuss a project <ArrowUpRight size={16}/></Link><Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger className="menu-button" aria-label="Open navigation"><Menu/></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="menu-overlay"/><Dialog.Content className="mobile-menu"><Dialog.Title>DigitalCore</Dialog.Title><Dialog.Description className="sr-only">Main navigation</Dialog.Description><Dialog.Close className="menu-close" aria-label="Close navigation"><X/></Dialog.Close><nav aria-label="Mobile navigation">{links.map(([name,url])=><Link key={url} href={url} onClick={()=>setOpen(false)} aria-current={path===url?'page':undefined}>{name}<ArrowUpRight/></Link>)}</nav><p>Mogoditshane, Botswana</p></Dialog.Content></Dialog.Portal></Dialog.Root></div></header>}
