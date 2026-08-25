import './global.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
})
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { getPersonStructuredData, getProjectsStructuredData } from './data/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Christian Crivelli — Business Analytics & Data Science',
    template: '%s | Christian Crivelli',
  },
  description:
    'Business Analytics graduate and incoming BI & Smart Services MSc student building data-for-good projects in sports, civic data, and demographics.',
  openGraph: {
    title: 'Christian Crivelli — Business Analytics & Data Science',
    description:
      'Business Analytics graduate and incoming MSc student in Business Intelligence & Smart Services, building data-driven projects in sports analytics, civic data, and demographic research.',
    url: baseUrl,
    siteName: 'Christian Crivelli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Christian Crivelli — Business Analytics & Data Science',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian Crivelli — Business Analytics & Data Science',
    description:
      'Business Analytics graduate and incoming MSc student in Business Intelligence & Smart Services, building data-driven projects in sports analytics, civic data, and demographic research.',
    images: ['/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personStructuredData = getPersonStructuredData()
  const projectsStructuredData = getProjectsStructuredData()

  return (
    <html
      lang="en"
      className={cx(
        'bg-[var(--bg)] text-[var(--ink)]',
        spaceGrotesk.className,
        spaceGrotesk.variable,
        GeistMono.variable
      )}
    >
      <head>
        {/* Applies a saved dark-mode choice before first paint, so there's no
            flash of the wrong theme. Site defaults to light — system
            `prefers-color-scheme` is intentionally ignored (see issue #26);
            only an explicit toggle (persisted below) switches to dark. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }}
        />
      </head>
      <body className="antialiased max-w-5xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}