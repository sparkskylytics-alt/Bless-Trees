import Link from 'next/link'
import {categories,products,slugify} from '../products-data'
import {SiteHeader,SiteFooter} from '../site-chrome'

export const metadata={title:'Products | Bless Tree'}

export default async function Products({searchParams}){
  const {category}=await searchParams
  const active=categories.find(c=>slugify(c[0])===category)
  const items=active?products.filter(p=>p[1]===active[0]):products
  return <>
    <SiteHeader active="products"/>
    <main className="page-wrap catalog">
      <p className="kicker">OUR CATALOGUE</p>
      <h1>Our <em>creations.</em></h1>
      <p className="intro">Browse handcrafted temple replicas, awards and honours, wall art, cutouts and wooden puzzles made to order.</p>
      <div className="filter-bar">
        <Link className={!active?'chip on':'chip'} href="/products">All ({products.length})</Link>
        {categories.map(c=><Link key={c[0]} className={active&&active[0]===c[0]?'chip on':'chip'} href={'/products?category='+slugify(c[0])}>{c[0]} ({products.filter(p=>p[1]===c[0]).length})</Link>)}
      </div>
      {active&&<p className="filter-note">{active[1]}</p>}
      <div className="product-grid">
        {items.map(p=><article className="product" key={p[0]}>
          <div className="product-img"><img className="prod-bg" src={p[3]} alt="" aria-hidden="true"/><img className="prod-photo" src={p[3]} alt={p[0]}/></div>
          <div className="product-info">
            <p className="eyebrow">{p[1]}</p>
            <h3>{p[0]}</h3>
            <p>{p[2]}</p>
          </div>
        </article>)}
      </div>
    </main>
    <SiteFooter/>
  </>
}
