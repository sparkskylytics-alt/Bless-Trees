'use client'
import {useState} from 'react'
import Link from 'next/link'

export function SiteHeader({active}){
  const [open,setOpen]=useState(false)
  const links=[['/','Home','home'],['/products','Products','products'],['/about','About','about'],['/contact','Contact','contact']]
  return <header><Link className="brand" href="/"><img src="/bless-tree-logo.jpeg" alt="Bless Tree logo"/><span><strong>Bless Tree</strong><small>Sheetal Laser Art Gallery</small></span></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">☰</button><nav className={open?'visible':''}>{links.map(l=><Link key={l[2]} href={l[0]} style={active===l[2]?{color:'var(--blue)'}:undefined}>{l[1]}</Link>)}<Link className="button small" href="/custom-order">Get Custom Design <b>↗</b></Link></nav></header>
}

export function SiteFooter(){
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Link className="brand" href="/"><img src="/bless-tree-logo.jpeg" alt="Bless Tree"/><span><strong>Bless Tree</strong><small>Sheetal Laser Art Gallery</small></span></Link><p>Laser-cut keepsakes and considered details for the people, places and moments that matter.</p></div><div className="footer-cta"><p className="footer-label">MAKE IT YOURS</p><h2>Have an idea<br/><em>worth making?</em></h2><Link className="footer-button" href="/custom-order">Start a custom order <span>↗</span></Link></div><div className="footer-nav"><p className="footer-label">EXPLORE</p><Link href="/products">Products</Link><Link href="/about">About</Link><Link href="/custom-order">Custom orders</Link><Link href="/contact">Contact the studio</Link></div></div><div className="footer-bottom"><small>© {new Date().getFullYear()} Bless Tree — Sheetal Laser Art Gallery</small><small>Crafted with care, made for your story.</small></div></footer>
}
