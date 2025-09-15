import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços - Desenvolvimento de Software e Marketing Digital | Velora',
  description: 'Serviços completos de desenvolvimento de software, marketing digital, tráfego pago, SEO e social media em Balneário Camboriú. Sites, aplicativos e estratégias de crescimento digital.',
}

export default function ServicosPage() {
  const services = [
    {
      id: 'software',
      title: 'Software / Desenvolvimento',
      description: 'Criamos sites, sistemas e aplicativos personalizados para empresas que querem inovar digitalmente.',
      icon: (
        <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        'Desenvolvimento de Sites Responsivos',
        'Sistemas Web Personalizados',
        'Aplicativos Mobile (iOS/Android)',
        'E-commerce e Marketplaces',
        'APIs e Integrações',
        'Manutenção e Suporte Técnico'
      ],
      color: 'slate'
    },
    {
      id: 'marketing',
      title: 'Marketing Digital / Growth',
      description: 'Ajudamos empresas a crescerem online com estratégias de marketing eficazes.',
      icon: (
        <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: [
        'Estratégias de Growth Marketing',
        'Análise de Dados e Métricas',
        'Automação de Marketing',
        'Email Marketing',
        'Marketing de Conteúdo',
        'Consultoria Estratégica'
      ],
      color: 'slate'
    },
    {
      id: 'paid-traffic',
      title: 'Tráfego Pago',
      description: 'Campanhas segmentadas em Google Ads e redes sociais para gerar vendas rápidas.',
      icon: (
        <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      features: [
        'Google Ads (Search, Display, Shopping)',
        'Facebook e Instagram Ads',
        'LinkedIn Advertising',
        'YouTube Ads',
        'Remarketing e Retargeting',
        'Otimização de Campanhas'
      ],
      color: 'slate'
    },
    {
      id: 'seo',
      title: 'Tráfego Orgânico / SEO',
      description: 'Otimização para motores de busca, aumento de visibilidade e autoridade digital.',
      icon: (
        <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      features: [
        'SEO Técnico e On-Page',
        'Pesquisa de Palavras-chave',
        'Link Building',
        'SEO Local',
        'Auditoria de Sites',
        'Relatórios de Performance'
      ],
      color: 'slate'
    },
    {
      id: 'social-media',
      title: 'Social Media',
      description: 'Gestão de redes sociais, criação de conteúdo e engajamento com seu público.',
      icon: (
        <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 9h6m-6 4h6m-6 4h6" />
        </svg>
      ),
      features: [
        'Gestão de Redes Sociais',
        'Criação de Conteúdo Visual',
        'Community Management',
        'Influencer Marketing',
        'Social Listening',
        'Análise de Engajamento'
      ],
      color: 'slate'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Nossos Serviços
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Soluções completas em tecnologia e marketing digital para acelerar o crescimento do seu negócio
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="card-elegant overflow-hidden group">
                <div className="p-10">
                  <div className="flex items-start mb-8">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-gray-200 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                      <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="px-10 pb-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">O que incluímos:</h3>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={`/servicos/${service.id === 'paid-traffic' ? 'trafego-pago' : service.id === 'social-media' ? 'social-media' : service.id}`}
                    className="inline-flex items-center text-gray-900 font-medium hover:text-black transition-colors duration-300"
                  >
                    Saiba mais sobre {service.title}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Um processo estruturado para garantir resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Análise</h3>
              <p className="text-gray-600 leading-relaxed">Entendemos seu negócio e objetivos</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Estratégia</h3>
              <p className="text-gray-600 leading-relaxed">Desenvolvemos um plano personalizado</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Execução</h3>
              <p className="text-gray-600 leading-relaxed">Implementamos as soluções</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-700">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Otimização</h3>
              <p className="text-gray-600 leading-relaxed">Monitoramos e melhoramos continuamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pronto para começar?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer digitalmente.
          </p>
          <a href="/contato" className="btn-primary group">
            Solicitar Orçamento
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
