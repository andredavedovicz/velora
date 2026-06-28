import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { getWhatsAppUrl, WHATSAPP_LINK_PROPS } from '@/lib/whatsapp'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const SITE_URL = 'https://veloralabs.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Velora — Tecnologia, Dados e Marketing Digital em Balneário Camboriú',
  description:
    'Empresa brasileira de tecnologia e marketing digital em Balneário Camboriú · SC. Desenvolvimento de software, dashboards em Python com integração de dados, sites, aplicativos, tráfego pago, SEO e social media. Atendimento em todo o Brasil.',
  keywords:
    'software Balneário Camboriú, agência de tecnologia Santa Catarina, dashboards python, integração de dados, business intelligence, marketing digital Balneário Camboriú, tráfego pago, tráfego orgânico, social media, desenvolvimento de apps, criação de sites SC, crescimento digital, Velora',
  authors: [{ name: 'Velora', url: SITE_URL }],
  creator: 'Velora',
  publisher: 'Velora',
  applicationName: 'Velora',
  openGraph: {
    title: 'Velora — Tecnologia, Dados e Marketing Digital em Balneário Camboriú',
    description:
      'Software sob medida, dashboards em Python com integração de dados e marketing orientado a resultado. Empresa brasileira em Balneário Camboriú · SC.',
    url: SITE_URL,
    siteName: 'Velora',
    locale: 'pt_BR',
    type: 'website',
    countryName: 'Brasil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora — Tecnologia, Dados e Marketing Digital',
    description:
      'Empresa brasileira de tecnologia, dados e marketing digital em Balneário Camboriú · SC.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'BR-SC',
    'geo.placename': 'Balneário Camboriú',
    'geo.position': '-26.9926;-48.6356',
    ICBM: '-26.9926, -48.6356',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const footerLinks = {
    servicos: [
      { label: 'Desenvolvimento de Software', href: '/servicos/software' },
      { label: 'Dashboards & Dados', href: '/servicos/dashboards' },
      { label: 'Marketing Digital', href: '/servicos/marketing' },
      { label: 'Tráfego Pago', href: '/servicos/trafego-pago' },
      { label: 'SEO', href: '/servicos/seo' },
      { label: 'Social Media', href: '/servicos/social-media' },
    ],
    empresa: [
      { label: 'Sobre', href: '/sobre' },
      { label: 'Serviços', href: '/servicos' },
      { label: 'Contato', href: '/contato' },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'Velora',
    url: SITE_URL,
    image: `${SITE_URL}/icon.svg`,
    logo: `${SITE_URL}/icon.svg`,
    description:
      'Empresa brasileira de tecnologia, dados e marketing digital em Balneário Camboriú · SC. Desenvolvimento de software, dashboards em Python, sites, aplicativos, tráfego pago, SEO e social media.',
    telephone: '+55-47-99724-9820',
    email: 'contato@velora.com.br',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Balneário Camboriú',
      addressRegion: 'SC',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.9926,
      longitude: -48.6356,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    knowsLanguage: 'pt-BR',
    slogan: 'Do código ao resultado.',
  }

  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="fixed top-0 w-full z-50 glass-nav">
          <Navigation />
        </header>

        <main>{children}</main>

        <FloatingWhatsApp />

        <footer className="relative overflow-hidden bg-black text-gray-300 pt-20 pb-10">
          <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
              <div className="md:col-span-5">
                <a href="/" className="inline-block text-3xl font-bold">
                  <span className="bg-gradient-to-br from-emerald-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent pr-[0.04em]">V</span>
                  <span className="text-white tracking-tight">elora</span>
                </a>
                <p className="text-gray-400 leading-relaxed mt-5 max-w-sm">
                  Empresa híbrida de tecnologia, dados e marketing digital. Construímos
                  software, dashboards inteligentes e crescimento — do código ao resultado.
                </p>
                <div className="flex items-center gap-2 mt-6 text-sm text-gray-500">
                  <span className="dot-accent" />
                  Balneário Camboriú · SC · Atendimento em todo o Brasil
                </div>
              </div>

              <div className="md:col-span-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-[0.18em] mb-5">
                  Serviços
                </h4>
                <ul className="space-y-3 text-gray-400">
                  {footerLinks.servicos.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="hover:text-white transition-colors duration-300">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-[0.18em] mb-5">
                  Empresa
                </h4>
                <ul className="space-y-3 text-gray-400">
                  {footerLinks.empresa.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="hover:text-white transition-colors duration-300">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-[0.18em] mb-5">
                  Vamos conversar
                </h4>
                <a
                  href={getWhatsAppUrl('iniciar-projeto')}
                  {...WHATSAPP_LINK_PROPS}
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-accent transition-colors duration-300"
                >
                  Iniciar projeto
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="flex gap-3 mt-6">
                  {['x', 'instagram', 'linkedin'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      aria-label={s}
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                      <SocialIcon name={s} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Velora. Todos os direitos reservados.</p>
              <p className="flex items-center gap-2">
                Construído com tecnologia de ponta
                <span className="dot-accent" />
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'x') {
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
  if (name === 'instagram') {
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-.97.04-1.5.21-1.85.34-.46.18-.8.4-1.15.74-.34.35-.56.69-.74 1.15-.13.35-.3.88-.34 1.85-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.97.21 1.5.34 1.85.18.46.4.8.74 1.15.35.34.69.56 1.15.74.35.13.88.3 1.85.34 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.97-.04 1.5-.21 1.85-.34.46-.18.8-.4 1.15-.74.34-.35.56-.69.74-1.15.13-.35.3-.88.34-1.85.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.97-.21-1.5-.34-1.85a3.1 3.1 0 00-.74-1.15 3.1 3.1 0 00-1.15-.74c-.35-.13-.88-.3-1.85-.34-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.3 5.3 0 110 10.6 5.3 5.3 0 010-10.6zm0 1.62a3.68 3.68 0 100 7.36 3.68 3.68 0 000-7.36zm5.5-1.62a1.24 1.24 0 110 2.48 1.24 1.24 0 010-2.48z" />
      </svg>
    )
  }
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
