import './globals.css';
import HeroEnhancer from './hero-enhancer';
import { SITE_URL } from './sitemap';

const description =
  'Sheetal Laser Art Gallery (Bless Tree), Muzaffarnagar — custom laser cut wooden art, temple replicas, awards & honour plaques, wall art, cutouts and wooden puzzles. Personalised gifts made to order.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sheetal Laser Art Gallery | Bless Tree – Custom Laser Cut Art & Gifts',
    template: '%s | Sheetal Laser Art Gallery',
  },
  description,
  keywords: [
    'Sheetal Laser Art Gallery',
    'Bless Tree',
    'laser cut art',
    'laser cutting Muzaffarnagar',
    'custom laser art',
    'wooden wall art',
    'temple replica',
    'Ram Mandir replica',
    'Jain temple replica',
    'custom awards',
    'trophies and honour plaques',
    'momento',
    'personalised gifts',
    'wooden cutouts',
    'wooden jigsaw puzzles',
    'jaali wall art',
    'corporate gifts Muzaffarnagar',
  ],
  applicationName: 'Sheetal Laser Art Gallery',
  authors: [{ name: 'Bless Tree' }],
  alternates: { canonical: '/' },
  icons: {
    icon: '/bless-tree-logo.jpeg',
    shortcut: '/bless-tree-logo.jpeg',
    apple: '/bless-tree-logo.jpeg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Sheetal Laser Art Gallery',
    title: 'Sheetal Laser Art Gallery | Bless Tree',
    description,
    images: [{ url: '/bless-tree-logo.jpeg', width: 415, height: 415, alt: 'Bless Tree logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Sheetal Laser Art Gallery | Bless Tree',
    description,
    images: ['/bless-tree-logo.jpeg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeroEnhancer />
        {children}
      </body>
    </html>
  );
}
