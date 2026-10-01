import {SiteHeader,SiteFooter} from '../../site-chrome'
import Link from 'next/link'
import {products,slugify} from '../../products-data'
export default async function Detail({params}){
  const {slug}=await params
  const product=products.find(p=>slugify(p[0])===slug)
  const name=product?product[0]:slug.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ')
  const img=product?product[3]:'/products/flower jaali wooden wall art.jpg'
  const desc=product?product[2]:'A laser-cut creation made with care and ready to be personalized around your idea.'
  return <><SiteHeader active="products"/><main className="form-page"><Link className="back" href="/products">← All creations</Link><div className="showcase" style={{padding:0,margin:0,maxWidth:'none'}}><div className="show-img"><img src={img} alt={name}/></div><div className="show-copy"><p className="kicker">HOME / PRODUCTS / {name}</p><h1>{name}</h1><p className="intro">{desc}</p><ul><li>Material and finish discussed on enquiry</li><li>Personalization options available</li><li>Ideal for meaningful gifting or display</li></ul><div className="actions"><Link className="button" href={'/contact?product='+encodeURIComponent(name)}>Enquire About This Product ↗</Link><Link className="text-link" href="/custom-order">Request customization →</Link></div></div></div></main><SiteFooter/></>
}
