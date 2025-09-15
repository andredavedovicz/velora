import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Digital & Growth | Velora - Estratégias de Crescimento Online',
  description: 'Ajudamos empresas a crescerem online com estratégias de marketing eficazes. Growth hacking, inbound marketing e otimização de conversões.',
  keywords: 'marketing digital, growth hacking, inbound marketing, estratégias de crescimento, conversão, lead generation, marketing automation',
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
      icon: "🚀"
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
      icon: "📈"
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
      icon: "⚡"
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
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Marketing Digital & Growth
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ajudamos empresas a crescerem online com estratégias de marketing eficazes e data-driven
          </p>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {strategies.map((strategy, index) => (
              <div key={index} className="card-elegant p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-6">{strategy.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{strategy.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{strategy.description}</p>
                <ul className="text-left space-y-2">
                  {strategy.features.map((feature, featureIndex) => (
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
              href="/contato" 
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
