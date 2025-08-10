import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Raghavendra Reddy Padala - Mobile App Developer & AI Engineer',
    template: '%s | Raghavendra Reddy Padala'
  },
  description: 'Mobile and AI-focused developer building high-performance applications with Flutter, React, and cloud services. Specializing in scalable mobile apps, machine learning integration, and full-stack development.',
  keywords: [
    'Flutter Developer',
    'Mobile App Developer', 
    'AI Engineer',
    'React Developer',
    'Full Stack Developer',
    'Machine Learning',
    'Firebase',
    'MongoDB',
    'Node.js',
    'Dart',
    'Python',
    'Mobile Development',
    'App Development',
    'Cross Platform Development',
    'Raghavendra Reddy Padala',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Hyderabad Developer',
    'Indian Developer'
  ],
  authors: [{ name: 'Raghavendra Reddy Padala' }],
  creator: 'Raghavendra Reddy Padala',
  publisher: 'Raghavendra Reddy Padala',
  generator: 'Next.js',
  applicationName: 'Raghavendra Reddy Portfolio',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: '#FFD400',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: "raghavendrareddypadala.vercel.app", // Replace with your actual domain
    siteName: 'Raghavendra Reddy Padala Portfolio',
    title: 'Raghavendra Reddy Padala - Mobile App Developer & AI Engineer',
    description: 'Mobile and AI-focused developer building high-performance applications with Flutter, React, and cloud services. View my portfolio of scalable apps and AI-powered solutions.',
    images: [
      {
        url: '/images/my.png', // Create a 1200x630 image for social sharing
        width: 1200,
        height: 630,
        alt: 'Raghavendra Reddy Padala - Mobile App Developer Portfolio',
        type: 'image/png',
      },
      {
        url: '/images/my.png', // Your existing profile image
        width: 400,
        height: 400,
        alt: 'Raghavendra Reddy Padala Profile Photo',
        type: 'image/png',
      }
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle', // Replace with your Twitter handle if you have one
    creator: '@yourtwitterhandle',
    title: 'Raghavendra Reddy Padala - Mobile App Developer & AI Engineer',
    description: 'Mobile and AI-focused developer building high-performance applications with Flutter, React, and cloud services.',
    images: ['/images/og-image.png'],
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification and webmaster tools
  verification: {
    google: 'oi9NT56ZdhlOJhxz-vGHeTZHu2If3TlUHxmOMJU5cvI',
  },

  
  // Language and region
  alternates: {
    canonical: 'raghavendrareddypadala.vercel.app', // Replace with your actual domain
    languages: {
      'en-US': 'raghavendrareddypadala.vercel.app',
      'en': 'raghavendrareddypadala.vercel.app',
    },
  },

  // Category for better classification
  category: 'Portfolio',

  // Additional structured data hints
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Raghavendra Reddy',
    'msapplication-TileColor': '#FFD400',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
       
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional SEO meta tags */}
         <meta name="google-site-verification" content="oi9NT56ZdhlOJhxz-vGHeTZHu2If3TlUHxmOMJU5cvI" />
       <meta name="msvalidate.01" content="16AD33AF54305A8ED428D2B61553DC82" />
        <meta name="format-detection" content="9032323095" />
        <meta name="theme-color" content="#FFD400" />
        <meta name="color-scheme" content="light" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Raghavendra Reddy Padala",
              "url": "raghavendrareddypadala.vercel.app", // Replace with your domain
              "image": "raghavendrareddypadala.vercel.app/images/my.png", // Replace with your domain
              "email": "raghavareddy696969@gmail.com",
              "jobTitle": "Mobile App Developer & AI Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Coffecodes Agency"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Your College Name" // Add your college name
              },
              "knowsAbout": [
                "Flutter Development",
                "Mobile App Development",
                "Artificial Intelligence",
                "Machine Learning",
                "React Development",
                "Full Stack Development",
                "Firebase",
                "Node.js",
                "Python",
                "Dart"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/raghavendra-reddy-28bbb6256/",
                "https://github.com/Raghavendra-Reddy-Padala"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nizamabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              }
            })
          }}
        />

        {/* Performance and loading optimizations */}
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}