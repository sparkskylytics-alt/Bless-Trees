'use client'
import {useEffect,useRef,useState} from 'react'

const slides=[
  ['/golden-background.png','Golden Temple wooden replica at sunrise'],
  ['/ram-mandir-hero.png','Shri Ram Mandir Ayodhya wooden replica','fit'],
  ['/tijara-hero.png','Tijara Ji Jain Temple at sunset'],
]

// Background slideshow for the home hero: auto-advances, supports dots, arrows and swipe.
// A 'fit' slide shows the whole photo at full hero height instead of cropping it to fill the width.
export default function HeroSlider(){
  const [active,setActive]=useState(0)
  const [prev,setPrev]=useState(null)
  const touchX=useRef(null)
  const go=i=>{setPrev(active);setActive((i+slides.length)%slides.length)}

  useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t=setTimeout(()=>go(active+1),5500)
    return()=>clearTimeout(t)
  },[active])

  return <>
    <div className="hero-slides"
      onTouchStart={e=>{touchX.current=e.touches[0].clientX}}
      onTouchEnd={e=>{if(touchX.current===null)return;const dx=e.changedTouches[0].clientX-touchX.current;if(Math.abs(dx)>40)go(active+(dx<0?1:-1));touchX.current=null}}>
      {slides.map((s,i)=><div key={s[0]} className={'hero-slide'+(s[2]?' '+s[2]:'')+(i===active?' on':i===prev?' prev':'')} style={{'--slide':`url('${s[0]}')`}} role="img" aria-label={s[1]} aria-hidden={i!==active}>{s[2]==='fit'&&<img src={s[0]} alt=""/>}</div>)}
    </div>
    <div className="hero-controls">
      <button type="button" className="hero-arrow" aria-label="Previous slide" onClick={()=>go(active-1)}>←</button>
      <div className="hero-dots">{slides.map((s,i)=><button type="button" key={s[0]} className={i===active?'on':''} aria-label={`Show slide ${i+1}`} aria-current={i===active} onClick={()=>go(i)}/>)}</div>
      <button type="button" className="hero-arrow" aria-label="Next slide" onClick={()=>go(active+1)}>→</button>
    </div>
  </>
}
