import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { getWhatsAppUrl, WHATSAPP_LINK_PROPS } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Serviços — Software, Dados e Marketing Digital | Velora',
  description:
    'Serviços completos de desenvolvimento de software, dashboards em Python com integração de dados, marketing digital, tráfego pago, SEO e social media em Balneário Camboriú.',
}

const services = [
  {
    id: 'software',
    href: '/servicos/software',
    title: 'Desenvolvimento de Software',
    description:
      'Sites, e-commerce, sistemas web e aplicativos mobile sob medida para empresas que querem inovar digitalmente.',
    features: [
      'Sites e landing pages',
      'E-commerce e marketplaces',
      'Sistemas web e ERPs',
      'Aplicativos mobile (iOS/Android)',
      'APIs e integrações',
      'Automação de processos',
    ],
    featured: true,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    id: 'dashboards',
    href: '/servicos/dashboards',
    title: 'Dashboards & Dados',
    description:
      'Dashboards em Python com integração de dados — painéis de BI em tempo real que transformam suas fontes em decisões.',
    features: [
      'Dashboards em Python (Plotly/Dash)',
      'Integração de dados (APIs, ERPs, bancos)',
      'BI e relatórios automáticos',
      'Atualização em tempo real',
      'ETL / pipelines de dados',
      'Alertas inteligentes',
    ],
    featured: true,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 3 5-6" />
    ),
  },
  {
    id: 'marketing',
    href: '/servicos/marketing',
    title: 'Marketing Digital / Growth',
    description: 'Estratégias data-driven para crescer online com previsibilidade e ROI positivo.',
    features: [
      'Growth marketing e funis de venda',
      'Análise de dados e métricas',
      'Automação de marketing',
      'Email marketing e CRM',
      'Marketing de conteúdo',
      'Consultoria estratégica',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    id: 'trafego-pago',
    href: '/servicos/trafego-pago',
    title: 'Tráfego Pago',
    description: 'Campanhas segmentadas em Google Ads e redes sociais para gerar vendas rápidas.',
    features: [
      'Google Ads (Search, Display, Shopping)',
      'Facebook e Instagram Ads',
      'LinkedIn e YouTube Ads',
      'Remarketing e retargeting',
      'Otimização de campanhas',
      'Relatórios de performance',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    ),
  },
  {
    id: 'seo',
    href: '/servicos/seo',
    title: 'Tráfego Orgânico / SEO',
    description: 'Otimização para motores de busca, aumento de visibilidade e autoridade digital.',
    features: [
      'SEO técnico e on-page',
      'Pesquisa de palavras-chave',
      'Link building',
      'SEO local',
      'Auditoria de sites',
      'Relatórios de performance',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
  },
  {
    id: 'social-media',
    href: '/servicos/social-media',
    title: 'Social Media',
    description: 'Gestão de redes sociais, criação de conteúdo e engajamento com seu público.',
    features: [
      'Gestão de redes sociais',
      'Criação de conteúdo visual',
      'Community management',
      'Influencer marketing',
      'Social listening',
      'Análise de engajamento',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 9h6m-6 4h6m-6 4h6" />
    ),
  },
]

const process = [
  { step: '01', title: 'Análise', desc: 'Entendemos seu negócio, dados e objetivos.' },
  { step: '02', title: 'Estratégia', desc: 'Desenhamos um plano técnico e de crescimento.' },
  { step: '03', title: 'Execução', desc: 'Implementamos com metodologia ágil e qualidade.' },
  { step: '04', title: 'Otimização', desc: 'Medimos, ajustamos e escalamos continuamente.' },
]

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="O que fazemos"
        title={<>Soluções completas em <span className="text-gradient-accent">tecnologia e marketing</span></>}
        description="Um ecossistema integrado — do software e dos dados ao marketing — para acelerar o crescimento do seu negócio."
      >
        <a href={getWhatsAppUrl('orcamento')} {...WHATSAPP_LINK_PROPS} className="btn-primary group">
          Solicitar orçamento
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#lista" className="btn-secondary">Ver serviços</a>
      </PageHero>

      {/* Lista de serviços */}
      <section id="lista" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Reveal
                key={service.id}
                delay={(index % 2) * 90}
                className={service.featured ? 'lg:col-span-2' : ''}
              >
                <div className={`card-elegant group h-full p-8 md:p-10 ${service.featured ? 'md:flex md:gap-10' : ''}`}>
                  <div className={service.featured ? 'md:max-w-md' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="icon-badge w-14 h-14 group-hover:bg-gray-900 group-hover:text-white">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {service.icon}
                        </svg>
                      </div>
                      {service.featured && <span className="badge-light">Carro-chefe</span>}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <a href={service.href} className="link-arrow mt-6">
                      Saiba mais
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  <ul className={`mt-8 grid gap-3 ${service.featured ? 'md:mt-0 md:flex-1 sm:grid-cols-2' : 'sm:grid-cols-2'}`}>
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-600 text-sm">
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section-padding bg-[#fafafa] border-y border-gray-100">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="display text-4xl md:text-5xl text-gray-900 mb-5">Como trabalhamos</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-gray-600">Um processo estruturado para garantir resultados consistentes.</p>
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
        <div className="container-custom relative z-10 text-center py-28">
          <Reveal>
            <h2 className="display text-4xl md:text-5xl text-white mb-6">Pronto para começar?</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato e descubra como podemos ajudar sua empresa a crescer digitalmente.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <a href={getWhatsAppUrl('orcamento')} {...WHATSAPP_LINK_PROPS} className="btn-primary group">
              Solicitar orçamento
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
