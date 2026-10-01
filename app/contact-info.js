// Single source for studio contact details (home, contact page and footer)
export const phones=['+91 9412678517']
export const emails=['ajayjain104@gmail.com']
export const address='181/1, North Civil Line, Muzaffarnagar'
export const whatsapp='919412678517'

export const socialLinks=[['Instagram','https://instagram.com/blesstree.in',<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>],['Facebook','https://facebook.com/blesstree',<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.6 1.7-1.6h1.6V3.3C16.5 3.2 15.5 3 14.4 3c-2.4 0-4 1.5-4 4.1v2.7H7.7v3.2h2.7v8h3.1z"/></svg>]]
export const SocialIcons=({className})=><div className={className}>{socialLinks.map(s=><a key={s[0]} href={s[1]} target="_blank" rel="noopener noreferrer" aria-label={s[0]}>{s[2]}</a>)}</div>

export const PhoneLinks=()=><span className="contact-links">{phones.map(p=><a key={p} href={'tel:'+p.replace(/\s/g,'')}>{p}</a>)}</span>
export const EmailLinks=()=><span className="contact-links">{emails.map(e=><a key={e} href={'mailto:'+e}>{e}</a>)}</span>
