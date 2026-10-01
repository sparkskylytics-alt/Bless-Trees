'use client'
import {Suspense} from 'react'
import {useSearchParams} from 'next/navigation'
import {products} from '../products-data'
import {SiteHeader,SiteFooter} from '../site-chrome'
import {address,PhoneLinks,EmailLinks} from '../contact-info'
import WhatsAppForm from '../whatsapp-form'
function EnquiryForm(){const product=useSearchParams().get('product');const match=products.find(p=>p[0]===product);return <>{product&&<div className="selected"><img src={match?match[3]:'/products/flower jaali wooden wall art.jpg'} alt="Selected product"/><div><small>SELECTED PRODUCT</small><strong>{product}</strong><span>Custom laser art</span></div></div>}<WhatsAppForm product={product}/></>}
export default function Contact(){return <><SiteHeader active="contact"/><main className="page-wrap contact-page"><p className="kicker">LET'S START A CONVERSATION</p><h1>Tell us what you’d like to <em>create.</em></h1><div className="contact-cols"><div className="contact-form"><Suspense fallback={null}><EnquiryForm/></Suspense></div><aside className="contact-side"><div><small>PHONE</small><strong><PhoneLinks/></strong></div><div><small>EMAIL</small><strong><EmailLinks/></strong></div><div><small>STUDIO</small><strong>{address}</strong></div></aside></div></main><SiteFooter/></>}
