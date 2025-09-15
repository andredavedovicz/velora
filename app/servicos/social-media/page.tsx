import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media | Velora - Gestão de Redes Sociais e Engajamento',
  description: 'Gestão de redes sociais, criação de conteúdo e engajamento com seu público. Estratégias para Instagram, Facebook, LinkedIn e mais.',
  keywords: 'social media, redes sociais, instagram, facebook, linkedin, gestão de redes, criação de conteúdo, engajamento, community management',
};

export default function SocialMediaPage() {
  const platforms = [
    {
      title: "Instagram",
      description: "Estratégias visuais e engajamento para construir uma comunidade fiel no Instagram.",
      features: [
        "Feed visual estratégico",
        "Stories e Reels",
        "IGTV e Lives",
        "Hashtags otimizadas",
        "Engajamento autêntico"
      ],
      icon: "📸"
    },
    {
      title: "Facebook",
      description: "Gestão profissional de páginas e campanhas para maximizar alcance e engajamento.",
      features: [
        "Gestão de páginas",
        "Posts estratégicos",
        "Facebook Ads",
        "Eventos e grupos",
        "Analytics detalhados"
      ],
      icon: "👥"
    },
    {
      title: "LinkedIn",
      description: "Presença profissional e networking estratégico para empresas B2B.",
      features: [
        "Company pages otimizadas",
        "Conteúdo profissional",
        "LinkedIn Ads",
        "Networking estratégico",
        "Thought leadership"
      ],
      icon: "💼"
    }
  ];

  const services = [
    { name: "Community Management", description: "Gestão diária e engajamento com sua audiência" },
    { name: "Criação de Conteúdo", description: "Conteúdo visual e textual estratégico" },
    { name: "Social Media Strategy", description: "Planejamento estratégico para redes sociais" },
    { name: "Influencer Marketing", description: "Parcerias estratégicas com influenciadores" },
    { name: "Social Listening", description: "Monitoramento de menções e sentimentos" },
    { name: "Crisis Management", description: "Gestão de crises e reputação online" },
    { name: "Analytics & Reports", description: "Relatórios detalhados de performance" },
    { name: "Social Commerce", description: "Vendas diretas através das redes sociais" },
    { name: "User Generated Content", description: "Estratégias para conteúdo gerado por usuários" },
    { name: "Social Media Training", description: "Treinamento para equipes internas" }
  ];

  const results = [
    {
      metric: "Engajamento +150%",
      description: "Aumento significativo na interação com seu conteúdo"
    },
    {
      metric: "Alcance Orgânico",
      description: "Crescimento sustentável do alcance sem investimento em anúncios"
    },
    {
      metric: "Seguidores Qualificados",
      description: "Crescimento de audiência relevante e engajada"
    },
    {
      metric: "Brand Awareness",
      description: "Aumento do reconhecimento e lembrança da marca"
    }
  ];

  const contentTypes = [
    {
      type: "Conteúdo Visual",
      description: "Posts, stories e vídeos que contam a história da sua marca"
    },
    {
      type: "Conteúdo Educativo",
      description: "Materiais que agregam valor e posicionam sua autoridade"
    },
    {
      type: "Conteúdo Entretenimento",
      description: "Conteúdo leve e divertido para engajar a audiência"
    },
    {
      type: "Conteúdo Promocional",
      description: "Anúncios estratégicos de produtos e serviços"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Social Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Gestão de redes sociais, criação de conteúdo e engajamento com seu público
          </p>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {platforms.map((platform, index) => (
              <div key={index} className="card-elegant p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-6">{platform.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{platform.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{platform.description}</p>
                <ul className="text-left space-y-2">
                  {platform.features.map((feature, featureIndex) => (
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

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Soluções completas para sua presença nas redes sociais
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Tipos de Conteúdo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Diversidade de conteúdo para engajar diferentes tipos de audiência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {contentTypes.map((content, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V2a1 1 0 011-1h8v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.type}</h3>
                <p className="text-gray-600 leading-relaxed">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Resultados Esperados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Métricas que demonstram o sucesso da nossa gestão
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{result.metric}</h3>
                <p className="text-gray-600 leading-relaxed">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Pronto para Engajar sua Audiência?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Gestão profissional que transforma seguidores em clientes fiéis
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contato" 
              className="btn-primary group"
            >
              Começar Gestão
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
