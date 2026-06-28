import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { getWhatsAppUrl, WHATSAPP_LINK_PROPS } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Marketing Digital & Growth | Velora - Estratégias de Crescimento Online',
  description: 'Ajudamos empresas a crescerem online com estratégias de marketing eficazes. Growth hacking, inbound marketing e otimização de conversões.',
  keywords: 'marketing digital, growth hacking, inbound marketing, estratégias de crescimento, conversão, lead generation, marketing automation',
  alternates: { canonical: '/servicos/marketing' },
};

export default function MarketingPage() {
  const strategies = [
    {
      title: "Growth Hacking",
      description: "Estratégias experimentais e data-driven para acelerar o crescimento exponencial do seu negócio.",
      features: [
        "Experimentos de crescimento",
        "Análise de dados avançada",
        "Otimização de funil de vendas",
        "Testes A/B e multivariados",
        "Métricas de crescimento"
      ],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 3 5-6" />
      )
    },
    {
      title: "Inbound Marketing",
      description: "Atraímos clientes qualificados através de conteúdo relevante e estratégias de atração.",
      features: [
        "Criação de conteúdo estratégico",
        "SEO e otimização orgânica",
        "Email marketing automatizado",
        "Landing pages otimizadas",
        "Nurturing de leads"
      ],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.293.707l-2 2A1 1 0 0111 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
      )
    },
    {
      title: "Marketing Automation",
      description: "Automatizamos processos de marketing para escalar resultados e otimizar recursos.",
      features: [
        "Automação de email marketing",
        "Sequências de nurturing",
        "Segmentação inteligente",
        "Scoring de leads",
        "Integração de sistemas"
      ],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      )
    }
  ];

  const tools = [
    { name: "HubSpot", category: "CRM & Marketing" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Facebook Ads", category: "Paid Media" },
    { name: "Google Ads", category: "Paid Media" },
    { name: "Mailchimp", category: "Email Marketing" },
    { name: "Zapier", category: "Automation" },
    { name: "Hotjar", category: "User Experience" },
    { name: "SEMrush", category: "SEO Tools" },
    { name: "Canva", category: "Design" },
    { name: "Slack", category: "Communication" }
  ];

  const metrics = [
    {
      metric: "Aumento de Leads",
      description: "Geração qualificada de prospects interessados em seus produtos ou serviços"
    },
    {
      metric: "Taxa de Conversão",
      description: "Otimização do funil de vendas para maximizar conversões em cada etapa"
    },
    {
      metric: "CAC Reduzido",
      description: "Diminuição do custo de aquisição de clientes através de estratégias eficientes"
    },
    {
      metric: "ROI Positivo",
      description: "Retorno sobre investimento comprovado em todas as campanhas executadas"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Marketing & Growth"
        title={<>Marketing digital que <span className="text-gradient-accent">vende</span></>}
        description="Ajudamos empresas a crescerem online com estratégias data-driven, do topo do funil à conversão."
      >
        <a href={getWhatsAppUrl('marketing')} {...WHATSAPP_LINK_PROPS} className="btn-primary">Começar agora</a>
        <a href="/servicos" className="btn-secondary">Ver outros serviços</a>
      </PageHero>

      {/* Strategies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <Reveal key={index} delay={index * 90}>
                <div className="card-elegant h-full p-8 group">
                  <div className="icon-badge w-14 h-14 mb-6 group-hover:bg-gray-900 group-hover:text-white">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {strategy.icon}
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{strategy.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">{strategy.description}</p>
                  <ul className="space-y-2.5">
                    {strategy.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
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

      {/* Tools Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ferramentas que Utilizamos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Tecnologias líderes de mercado para maximizar seus resultados
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

      {/* Metrics Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Resultados que Entregamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Métricas concretas que demonstram o impacto do nosso trabalho
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{metric.metric}</h3>
                <p className="text-gray-600 leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Vamos Acelerar seu Crescimento?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Estratégias personalizadas para transformar visitantes em clientes fiéis
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={getWhatsAppUrl('marketing')} 
              {...WHATSAPP_LINK_PROPS}
              className="btn-primary group"
            >
              Começar Agora
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
