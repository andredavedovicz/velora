import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Contato — Velora',
  description:
    'Entre em contato com a Velora para desenvolvimento de software, dashboards em Python e marketing digital em Balneário Camboriú.',
  alternates: { canonical: '/contato' },
}

const channels = [
  {
    title: 'WhatsApp',
    value: '(47) 99724-9820',
    href: getWhatsAppUrl('fale-conosco'),
    icon: (
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
    ),
    fill: true,
  },
  {
    title: 'E-mail',
    value: 'contato@velora.com.br',
    href: 'mailto:contato@velora.com.br',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Localização',
    value: 'Balneário Camboriú · SC',
    href: '#',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
]

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={<>Vamos <span className="text-gradient-accent">conversar</span></>}
        description="Pronto para acelerar seu negócio? Conte sua ideia e retornamos com um plano claro."
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Canais */}
            <div className="lg:col-span-2 space-y-4">
              <Reveal>
                <h2 className="display text-2xl md:text-3xl text-gray-900 mb-2">Fale com a gente</h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Escolha o canal que preferir ou preencha o formulário ao lado.
                </p>
              </Reveal>
              {channels.map((c, i) => (
                <Reveal key={c.title} delay={120 + i * 80}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="card-elegant flex items-center gap-4 p-5 group"
                  >
                    <div className="icon-badge w-12 h-12 group-hover:bg-gray-900 group-hover:text-white">
                      <svg
                        className="w-6 h-6"
                        fill={c.fill ? 'currentColor' : 'none'}
                        stroke={c.fill ? 'none' : 'currentColor'}
                        viewBox="0 0 24 24"
                      >
                        {c.icon}
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{c.title}</div>
                      <div className="text-sm text-gray-500">{c.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Formulário */}
            <div className="lg:col-span-3">
              <Reveal delay={120}>
                <div className="card-elegant p-8 md:p-10">
                  <h2 className="display text-2xl md:text-3xl text-gray-900 mb-2">Conte sobre seu projeto</h2>
                  <p className="text-gray-600 mb-8">Preencha os campos e enviaremos direto para o nosso WhatsApp.</p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
