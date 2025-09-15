import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO & Tráfego Orgânico | Velora - Otimização para Motores de Busca',
  description: 'Otimização para motores de busca, aumento de visibilidade e autoridade digital. SEO técnico e de conteúdo para crescimento sustentável.',
  keywords: 'seo, tráfego orgânico, otimização, google, motores de busca, autoridade digital, link building, conteúdo otimizado',
};

export default function SeoPage() {
  const services = [
    {
      title: "SEO Técnico",
      description: "Otimização técnica do seu site para melhor performance nos motores de busca.",
      features: [
        "Auditoria técnica completa",
        "Otimização de velocidade",
        "Estrutura de URLs amigáveis",
        "Schema markup",
        "Core Web Vitals"
      ],
      icon: "⚙️"
    },
    {
      title: "SEO de Conteúdo",
      description: "Criação de conteúdo otimizado que ranqueia e converte nos motores de busca.",
      features: [
        "Pesquisa de palavras-chave",
        "Criação de conteúdo estratégico",
        "Otimização on-page",
        "Estruturação de conteúdo",
        "Meta tags otimizadas"
      ],
      icon: "📝"
    },
    {
      title: "Link Building",
      description: "Construção de autoridade através de links de qualidade de sites relevantes.",
      features: [
        "Estratégia de link building",
        "Outreach profissional",
        "Criação de conteúdo linkável",
        "Monitoramento de backlinks",
        "Recuperação de links tóxicos"
      ],
      icon: "🔗"
    }
  ];

  const tools = [
    { name: "Google Search Console", category: "Analytics" },
    { name: "SEMrush", category: "SEO Tools" },
    { name: "Ahrefs", category: "SEO Tools" },
    { name: "Screaming Frog", category: "Technical SEO" },
    { name: "GTmetrix", category: "Performance" },
    { name: "Google PageSpeed", category: "Performance" },
    { name: "Schema.org", category: "Structured Data" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Moz", category: "SEO Tools" },
    { name: "Majestic", category: "Link Analysis" }
  ];

  const benefits = [
    {
      benefit: "Visibilidade Orgânica",
      description: "Apareça nas primeiras posições do Google sem pagar por anúncios"
    },
    {
      benefit: "Autoridade Digital",
      description: "Construa credibilidade e confiança com seu público-alvo"
    },
    {
      benefit: "Tráfego Qualificado",
      description: "Receba visitantes interessados em seus produtos ou serviços"
    },
    {
      benefit: "Crescimento Sustentável",
      description: "Resultados duradouros que se multiplicam ao longo do tempo"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Auditoria",
      description: "Análise completa do site atual e identificação de oportunidades"
    },
    {
      step: "2", 
      title: "Estratégia",
      description: "Definição de palavras-chave e estratégia de conteúdo"
    },
    {
      step: "3",
      title: "Otimização",
      description: "Implementação de melhorias técnicas e de conteúdo"
    },
    {
      step: "4",
      title: "Monitoramento",
      description: "Acompanhamento de resultados e ajustes contínuos"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            SEO & Tráfego Orgânico
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Otimização para motores de busca, aumento de visibilidade e autoridade digital
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="card-elegant p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                <ul className="text-left space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ferramentas Profissionais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Utilizamos as melhores ferramentas do mercado para otimização SEO
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-500">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Benefícios do SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Por que investir em otimização para motores de busca
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.benefit}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Nosso Processo SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Metodologia comprovada para resultados orgânicos duradouros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-700">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Pronto para Aparecer no Google?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Otimização profissional para aumentar sua visibilidade orgânica
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contato" 
              className="btn-primary group"
            >
              Auditoria Gratuita
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/servicos" 
              className="btn-secondary group"
            >
              Ver Outros Serviços
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
