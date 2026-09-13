import './globals.css'
import HeroEnhancer from './hero-enhancer'
export const metadata={title:'Bless Tree | Sheetal Laser Art Gallery',description:'Custom laser art and personalized creations.'}
export default function RootLayout({children}){return <html lang="en"><body><HeroEnhancer/>{children}</body></html>}
