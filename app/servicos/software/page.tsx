import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechMarquee from '@/components/TechMarquee'
import { getWhatsAppUrl, WHATSAPP_LINK_PROPS } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Desenvolvimento de Software | Velora — Web, Mobile e Sistemas',
  description:
    'Desenvolvimento de software sob medida: sites, e-commerce, sistemas web, aplicativos mobile e automações. Tecnologia moderna para empresas que querem inovar.',
  keywords:
    'desenvolvimento de software, sites personalizados, e-commerce, sistemas web, aplicativos mobile, react, next.js, react native, apis, automações',
}

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Sites responsivos, sistemas web e aplicações modernas com as melhores tecnologias do mercado.',
    features: ['Sites institucionais', 'E-commerce e lojas virtuais', 'Sistemas de gestão (ERPs)', 'Painéis administrativos', 'Landing pages de alta conversão'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Desenvolvimento Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android com experiência fluida e moderna.',
    features: ['Apps iOS e Android', 'Aplicações híbridas', 'PWA (Progressive Web Apps)', 'Integração com sistemas', 'Publicação nas stores'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
    ),
  },
  {
    title: 'Sistemas & Automações',
    description: 'Softwares sob medida e automações para resolver gargalos reais do seu negócio.',
    features: ['Análise de requisitos', 'Arquitetura customizada', 'Automação de processos', 'APIs e integrações', 'Testes e qualidade'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
]

const process = [
  { step: '01', title: 'Descoberta', desc: 'Entendemos seu negócio, objetivos e requisitos.' },
  { step: '02', title: 'Planejamento', desc: 'Definimos arquitetura, tecnologias e cronograma.' },
  { step: '03', title: 'Desenvolvimento', desc: 'Construímos com metodologia ágil e entregas frequentes.' },
  { step: '04', title: 'Entrega & suporte', desc: 'Testamos, publicamos e damos manutenção contínua.' },
]

export default function SoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Desenvolvimento de Software"
        title={<>Software sob medida para <span className="text-gradient-accent">inovar</span></>}
        description="Criamos sites, e-commerce, sistemas web e aplicativos mobile com tecnologia moderna — do conceito à produção."
      >
        <a href={getWhatsAppUrl('software')} {...WHATSAPP_LINK_PROPS} className="btn-primary group">
          Solicitar orçamento
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#servicos" className="btn-secondary">Ver serviços</a>
      </PageHero>

      {/* Serviços */}
      <section id="servicos" className="section-padding bg-white scroll-mt-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="display text-4xl md:text-5xl text-gray-900 mb-5">O que desenvolvemos</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-gray-600">Do site ao app, do sistema à automação — software completo para o seu negócio.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <div className="card-elegant h-full p-8 group">
                  <div className="icon-badge w-14 h-14 mb-6 group-hover:bg-gray-900 group-hover:text-white">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {service.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Banner para Dashboards */}
      <section className="pb-4 bg-white">
        <div className="container-wide">
          <Reveal>
            <a
              href="/servicos/dashboards"
              className="card-elegant group flex flex-col md:flex-row md:items-center gap-6 p-8 md:p-10 bg-[#fafafa]"
            >
              <div className="icon-badge w-14 h-14 shrink-0 group-hover:bg-gray-900 group-hover:text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 3 5-6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Precisa de dashboards de dados?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Temos uma frente dedicada a dashboards em Python com integração de dados e BI em tempo real.
                </p>
              </div>
              <span className="link-arrow md:ml-auto shrink-0">
                Ver Dashboards & Dados
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Stack — faixa diagonal colorida */}
      <TechMarquee />

      {/* Processo */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="display text-4xl md:text-5xl text-gray-900 mb-5">Nosso processo</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-gray-600">Metodologia comprovada para entregar soluções de qualidade.</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="card-elegant h-full p-8">
                  <div className="text-5xl font-bold text-gray-200 mb-4">{p.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="pointer-events-none absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full glow-accent opacity-30" aria-hidden />
        <div className="container-custom relative z-10 text-center py-28">
          <Reveal>
            <h2 className="display text-4xl md:text-5xl text-white mb-6">
              Pronto para transformar sua ideia em realidade?
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Vamos conversar sobre seu projeto e desenhar a solução ideal.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getWhatsAppUrl('software')} {...WHATSAPP_LINK_PROPS} className="btn-primary group">
                Solicitar orçamento
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/servicos" className="btn-secondary">Ver outros serviços</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
