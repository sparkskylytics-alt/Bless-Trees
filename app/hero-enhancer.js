'use client'
import {useEffect} from 'react'

export default function HeroEnhancer(){
  useEffect(()=>{
    const stage=document.querySelector('.hero-art')
    if(!stage || stage.querySelector('video')) return
    const video=document.createElement('video')
    video.className='hero-film'
    video.src='https://videos.pexels.com/video-files/7480063/7480063-uhd_4096_2160_25fps.mp4'
    video.autoplay=true; video.muted=true; video.loop=true; video.playsInline=true
    video.setAttribute('aria-label','Woodworking craft process')
    stage.appendChild(video)
    const move=(event)=>{
      const box=stage.getBoundingClientRect()
      const x=(event.clientX-box.left)/box.width-.5
      const y=(event.clientY-box.top)/box.height-.5
      stage.style.setProperty('--rx',`${-y*9}deg`)
      stage.style.setProperty('--ry',`${x*12}deg`)
      stage.style.setProperty('--mx',`${x*14}px`)
      stage.style.setProperty('--my',`${y*14}px`)
    }
    const reset=()=>{stage.style.setProperty('--rx','3deg');stage.style.setProperty('--ry','-7deg');stage.style.setProperty('--mx','0px');stage.style.setProperty('--my','0px')}
    stage.addEventListener('pointermove',move);stage.addEventListener('pointerleave',reset);reset()
    return()=>{stage.removeEventListener('pointermove',move);stage.removeEventListener('pointerleave',reset);video.remove()}
  },[])
  return null
}
