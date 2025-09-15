import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desenvolvimento de Software | Velora - Soluções Digitais Personalizadas',
  description: 'Criamos sites, sistemas e aplicativos personalizados para empresas que querem inovar digitalmente. Desenvolvimento web, mobile e soluções sob medida.',
  keywords: 'desenvolvimento de software, sites personalizados, aplicativos, sistemas web, desenvolvimento mobile, soluções digitais, tecnologia',
};

export default function SoftwarePage() {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Sites responsivos, sistemas web e aplicações modernas usando as melhores tecnologias do mercado.",
      features: [
        "Sites institucionais responsivos",
        "E-commerce e lojas virtuais",
        "Sistemas de gestão empresarial",
        "Dashboards e painéis administrativos",
        "APIs e integrações"
      ],
      icon: "🌐"
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android, proporcionando experiência única aos usuários.",
      features: [
        "Apps nativos iOS e Android",
        "Aplicações híbridas",
        "PWA (Progressive Web Apps)",
        "Integração com sistemas existentes",
        "Publicação nas stores"
      ],
      icon: "📱"
    },
    {
      title: "Soluções Personalizadas",
      description: "Desenvolvemos soluções sob medida para atender necessidades específicas do seu negócio.",
      features: [
        "Análise de requisitos",
        "Arquitetura customizada",
        "Desenvolvimento ágil",
        "Testes e qualidade",
        "Suporte e manutenção"
      ],
      icon: "⚙️"
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "React Native", category: "Mobile" }
  ];

  const process = [
    {
      step: "1",
      title: "Descoberta",
      description: "Entendemos seu negócio, objetivos e necessidades específicas para criar a melhor solução."
    },
    {
      step: "2", 
      title: "Planejamento",
      description: "Definimos arquitetura, tecnologias e cronograma detalhado do projeto."
    },
    {
      step: "3",
      title: "Desenvolvimento",
      description: "Implementamos a solução usando metodologias ágeis e melhores práticas."
    },
    {
      step: "4",
      title: "Entrega",
      description: "Testamos, otimizamos e entregamos a solução pronta para produção."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Desenvolvimento de Software
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Criamos sites, sistemas e aplicativos personalizados para empresas que querem inovar digitalmente
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

      {/* Technologies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Tecnologias que Utilizamos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Trabalhamos com as tecnologias mais modernas e confiáveis do mercado
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Metodologia comprovada para entregar soluções de qualidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Pronto para Transformar sua Ideia em Realidade?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Vamos conversar sobre seu projeto e criar a solução perfeita para seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contato" 
              className="btn-primary group"
            >
              Solicitar Orçamento
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
