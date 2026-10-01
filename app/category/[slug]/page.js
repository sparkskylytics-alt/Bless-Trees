import {SiteHeader,SiteFooter} from '../../site-chrome'
import Link from 'next/link'
import {categories,products,slugify} from '../../products-data'
export default async function Category({params}){
  const {slug}=await params
  const cat=categories.find(c=>slugify(c[0])===slug)
  const name=cat?cat[0]:slug.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ')
  const desc=cat?cat[1]:'Thoughtful laser-cut pieces designed to be personal, distinctive and made to last.'
  const items=products.filter(p=>p[1]===name)
  return <><SiteHeader active="products"/><main className="form-page"><Link className="back" href="/#categories">← Home / Categories</Link><p className="kicker">CATEGORY</p><h1>{name}</h1><p className="intro">{desc}</p>{items.length>0?<div className="product-grid">{items.map(p=><article className="product" key={p[0]}><div className="product-img"><img className="prod-bg" src={p[3]} alt="" aria-hidden="true"/><img className="prod-photo" src={p[3]} alt={p[0]}/></div><div className="product-info"><h3>{p[0]}</h3><p>{p[2]}</p></div></article>)}</div>:<Link className="button" href="/products">Explore all creations ↗</Link>}</main><SiteFooter/></>
}
