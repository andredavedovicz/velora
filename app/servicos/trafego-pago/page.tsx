import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tráfego Pago | Velora - Campanhas Segmentadas e Conversões',
  description: 'Campanhas segmentadas em Google Ads e redes sociais para gerar vendas rápidas. Gestão profissional de anúncios pagos.',
  keywords: 'tráfego pago, google ads, facebook ads, campanhas pagas, anúncios segmentados, ppc, remarketing, conversões',
};

export default function TrafegoPagoPage() {
  const platforms = [
    {
      title: "Google Ads",
      description: "Campanhas estratégicas no maior mecanismo de busca do mundo para capturar intenção de compra.",
      features: [
        "Campanhas de busca segmentadas",
        "Display e remarketing",
        "YouTube advertising",
        "Shopping campaigns",
        "Otimização de qualidade"
      ],
      icon: "🔍"
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Anúncios criativos e segmentados nas principais redes sociais para engajar seu público.",
      features: [
        "Segmentação avançada",
        "Anúncios criativos",
        "Stories e Reels ads",
        "Campanhas de conversão",
        "Pixel de conversão"
      ],
      icon: "📱"
    },
    {
      title: "LinkedIn Ads",
      description: "Campanhas B2B profissionais para alcançar decisores e influenciadores no ambiente corporativo.",
      features: [
        "Segmentação por empresa",
        "Anúncios profissionais",
        "Lead generation",
        "Campanhas de marca",
        "Analytics detalhados"
      ],
      icon: "💼"
    }
  ];

  const strategies = [
    { name: "Search Campaigns", description: "Captura intenção de compra no momento da busca" },
    { name: "Display Remarketing", description: "Reconquista visitantes que não converteram" },
    { name: "Social Media Ads", description: "Engajamento e conversão nas redes sociais" },
    { name: "Video Advertising", description: "Anúncios em vídeo no YouTube e redes sociais" },
    { name: "Shopping Campaigns", description: "Produtos destacados no Google Shopping" },
    { name: "Lead Generation", description: "Captura de leads qualificados" },
    { name: "Brand Awareness", description: "Aumento de reconhecimento da marca" },
    { name: "App Install", description: "Instalações de aplicativos móveis" },
    { name: "Local Campaigns", description: "Tráfego para lojas físicas" },
    { name: "E-commerce", description: "Vendas diretas online" }
  ];

  const results = [
    {
      metric: "ROAS 4:1",
      description: "Retorno médio de R$ 4 para cada R$ 1 investido em anúncios"
    },
    {
      metric: "CPC Reduzido",
      description: "Diminuição de até 40% no custo por clique através de otimizações"
    },
    {
      metric: "CTR Elevado",
      description: "Taxa de cliques acima da média do mercado em todas as campanhas"
    },
    {
      metric: "Conversões +200%",
      description: "Aumento significativo nas conversões através de estratégias direcionadas"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Tráfego Pago
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Campanhas segmentadas em Google Ads e redes sociais para gerar vendas rápidas
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

      {/* Strategies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Estratégias de Campanha
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Diversas abordagens para maximizar seus resultados em cada plataforma
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{strategy.name}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Métricas reais de campanhas que executamos para nossos clientes
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

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Metodologia estruturada para campanhas de alta performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Análise</h3>
              <p className="text-gray-600 leading-relaxed">Estudamos seu mercado, concorrentes e público-alvo</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Estratégia</h3>
              <p className="text-gray-600 leading-relaxed">Definimos objetivos, orçamento e estratégias de campanha</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Execução</h3>
              <p className="text-gray-600 leading-relaxed">Criamos e lançamos campanhas otimizadas</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gray-700">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Otimização</h3>
              <p className="text-gray-600 leading-relaxed">Monitoramos e otimizamos continuamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Pronto para Gerar Mais Vendas?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Campanhas estratégicas que convertem visitantes em clientes pagantes
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contato" 
              className="btn-primary group"
            >
              Começar Campanha
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
