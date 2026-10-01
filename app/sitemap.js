import {categories,products,slugify} from './products-data'

export const SITE_URL='https://sheetallaserartgallery.com'

export default function sitemap(){
  const now=new Date()
  const pages=[['',1,'weekly'],['/products',0.9,'weekly'],['/custom-order',0.8,'monthly'],['/about',0.7,'monthly'],['/contact',0.7,'monthly']]
  return [
    ...pages.map(([path,priority,changeFrequency])=>({url:SITE_URL+path,lastModified:now,changeFrequency,priority})),
    ...categories.map(c=>({url:`${SITE_URL}/category/${slugify(c[0])}`,lastModified:now,changeFrequency:'weekly',priority:0.8})),
    ...products.map(p=>({url:`${SITE_URL}/products/${slugify(p[0])}`,lastModified:now,changeFrequency:'monthly',priority:0.6}))
  ]
}
