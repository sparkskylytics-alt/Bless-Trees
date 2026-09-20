import Link from 'next/link'
import {SiteHeader,SiteFooter} from '../site-chrome'

export const metadata={title:'About | Bless Tree'}

const facts=[['2010','Archies Gift Gallery opens as a retail gift counter'],['2019','Manufacturing unit starts, offering customized gift articles'],['2020','Four laser machines running in the unit'],['Today','Laser cutting, UV printing and MV marking under one roof']]
const team=[['Mrs. Mitashi Jain','Proprietor','/mitashi-jain.jpg'],['Prerak Jain','Marketing Head','/prerak-jain.jpg']]

export default function About(){
  return <>
    <SiteHeader active="about"/>
    <main className="page-wrap about-page">
      <p className="kicker">OUR STORY</p>
      <h1>A gift counter in 2010,<br/><em>a laser workshop today.</em></h1>
      <div className="about-cols">
        <div>
          <p>Bless Tree began as Archies Gift Gallery, a retail gift counter opened by Mr. Ajay Kumar Jain in 2010. After the next generation joined, Mr. Prerak Jain built a new startup offering customized gift articles, then started a manufacturing unit in 2019 — by 2020 it ran four laser machines. The unit today works with laser cutting, UV printing and MV marking machines.</p>
          <p>Bless Tree is the legally authorised brand of this sole proprietorship, owned by Mrs. Mitashi Jain, with eight members on the team — three designers, three machine operators, and dedicated production and marketing heads.</p>
          <div className="about-cta"><Link className="button" href="/custom-order">Start a custom order <b>↗</b></Link><Link className="text-link" href="/products">Browse products <b>→</b></Link></div>
        </div>
        <div className="about-people">{team.map(t=><figure key={t[0]}><img src={t[2]} alt={t[0]}/><figcaption><strong>{t[0]}</strong><small>{t[1]}</small></figcaption></figure>)}</div>
      </div>
      <div className="timeline">{facts.map(f=><div key={f[0]}><span>{f[0]}</span><p>{f[1]}</p></div>)}</div>
    </main>
    <SiteFooter/>
  </>
}
