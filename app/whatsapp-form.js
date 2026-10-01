'use client'
import {whatsapp} from './contact-info'

// Enquiry form that opens WhatsApp with the message pre-filled, so the owner can reply directly
export default function WhatsAppForm({className,heading,product,topic='Enquiry',placeholder='Tell us what you would like made — size, occasion, names…',button='Send on WhatsApp'}){
  function submit(e){
    e.preventDefault()
    const f=new FormData(e.currentTarget)
    const lines=[`Hello Bless Tree, ${topic.toLowerCase()} from the website.`,`Name: ${f.get('name').trim()}`,`Mobile: ${f.get('mobile').trim()}`]
    if(product) lines.push(`Product: ${product}`)
    lines.push(`Requirement: ${f.get('message').trim()}`)
    window.location.href=`https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
  }
  return <form className={className} onSubmit={submit}>
    {heading&&<p className="form-heading">{heading}</p>}
    <label>Name *<input name="name" required placeholder="Your name" autoComplete="name"/></label>
    <label>Mobile number *<input name="mobile" type="tel" inputMode="tel" required autoComplete="tel" placeholder="10-digit mobile number" pattern="(\+?91)?\s?[6-9]\d{4}\s?\d{5}" title="Enter a valid 10-digit Indian mobile number"/></label>
    <label className="full">What would you like made? *<textarea name="message" required placeholder={placeholder}/></label>
    <button className="button" type="submit">{button} <b>→</b></button>
    <small className="wa-note">Opens WhatsApp with your message ready to send.</small>
  </form>
}
