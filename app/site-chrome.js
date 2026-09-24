'use client'
import {useState,useRef} from 'react'
import Link from 'next/link'
import {address,PhoneLinks,EmailLinks,SocialIcons} from './contact-info'
import WhatsAppForm from './whatsapp-form'

export function SiteHeader({active}){
  const [open,setOpen]=useState(false)
  const dialog=useRef(null)
  const openForm=()=>{setOpen(false);dialog.current.showModal()}
  const links=[['/','Home','home'],['/products','Products','products'],['/about','About','about'],['/contact','Contact','contact']]
  return <header><Link className="brand" href="/"><img src="/bless-tree-logo.jpeg" alt="Bless Tree logo"/><span><strong>Bless Tree</strong><small>Sheetal Laser Art Gallery</small></span></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">☰</button><nav className={open?'visible':''}>{links.map(l=><Link key={l[2]} href={l[0]} style={active===l[2]?{color:'var(--blue)'}:undefined}>{l[1]}</Link>)}<button type="button" className="button small" onClick={openForm}>Get Custom Design <b>↗</b></button></nav><dialog ref={dialog} className="form-modal" aria-labelledby="form-modal-title" onClick={e=>{if(e.target===dialog.current)dialog.current.close()}}><div className="form-modal-box"><button type="button" className="form-modal-close" aria-label="Close" onClick={()=>dialog.current.close()}>×</button><p className="kicker">CUSTOM ORDERS</p><h2 id="form-modal-title">Get a custom design</h2><p className="form-modal-intro">Tell us your idea and we will reply on WhatsApp.</p><WhatsAppForm topic="Custom order request" placeholder="Describe your idea — product type, size, names, occasion…" button="Send request on WhatsApp"/></div></dialog></header>
}

export function SiteFooter(){
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Link className="brand" href="/"><img src="/bless-tree-logo.jpeg" alt="Bless Tree"/><span><strong>Bless Tree</strong><small>Sheetal Laser Art Gallery</small></span></Link><p>Laser-cut keepsakes and considered details for the people, places and moments that matter.</p></div><div className="footer-cta"><p className="footer-label">MAKE IT YOURS</p><p className="footer-cta-text">Have an idea? Share it with us and we will make it for you.</p><Link className="footer-button" href="/custom-order">Start a custom order <span>↗</span></Link></div><div className="footer-nav"><p className="footer-label">EXPLORE</p><Link href="/products">Products</Link><Link href="/about">About</Link><Link href="/custom-order">Custom orders</Link><Link href="/contact">Contact the studio</Link></div><div className="footer-contact"><p className="footer-label">CONTACT</p><p>{address}</p><PhoneLinks/><EmailLinks/><SocialIcons className="footer-social"/></div></div><div className="footer-bottom"><small>© {new Date().getFullYear()} Bless Tree — Sheetal Laser Art Gallery</small><small>Crafted with care, made for your story.</small></div></footer>
}
