'use client'
import {useEffect} from 'react'

export default function HeroEnhancer(){
  useEffect(()=>{
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduced) return
    const targets=[...document.querySelectorAll('main > section, footer')]
    const items=[...document.querySelectorAll('.category, .product, .feature, .steps > div')]
    targets.forEach((element,index)=>{
      element.classList.add('reveal')
      element.style.setProperty('--reveal-delay',`${Math.min(index * 35,180)}ms`)
    })
    items.forEach((element,index)=>{
      element.classList.add('reveal-item')
      element.style.setProperty('--item-delay',`${(index % 4) * 75}ms`)
    })
    document.documentElement.classList.add('motion-ready')
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },{threshold:.12,rootMargin:'0px 0px -7% 0px'})
    ;[...targets,...items].forEach(element=>observer.observe(element))
    return()=>{
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  },[])
  return null
}
