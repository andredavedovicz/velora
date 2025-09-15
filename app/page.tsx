import { Metadata } from 'next'
import HyperspeedWrapper from '../components/HyperspeedWrapper'

export const metadata: Metadata = {
  title: 'Velora - Construa, escale e acelere seu negócio digital',
  description: 'Empresa híbrida de tecnologia e marketing digital em Balneário Camboriú. Desenvolvimento de software, sites, aplicativos, marketing digital, tráfego pago, SEO e social media.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Hyperspeed Background */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <HyperspeedWrapper />
        
        <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto" style={{ marginTop: '0px', paddingTop: '96px' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-white max-w-4xl mx-auto leading-tight tracking-tight font-bold font-sans">
            Construa, escale e acelere seu negócio digital
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium font-sans">
            Somos uma empresa híbrida que combina desenvolvimento de software e marketing digital para acelerar o crescimento do seu negócio.
          </p>
          <a 
            href="#servicos" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-gray-200 group"
          >
            Saiba Mais
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="servicos" className="section-padding bg-white relative z-10">
        <div className="container-custom">
          <div className="text-center mb-20 pt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas em tecnologia e marketing digital para impulsionar seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Software Development */}
            <div className="card-elegant p-8 group">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Software / Desenvolvimento</h3>
              <p className="text-gray-600 leading-relaxed">
                Criamos sites, sistemas e aplicativos personalizados para empresas que querem inovar digitalmente.
              </p>
            </div>

            {/* Marketing Digital */}
            <div className="card-elegant p-8 group">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Marketing Digital / Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Ajudamos empresas a crescerem online com estratégias de marketing eficazes.
              </p>
            </div>

            {/* Tráfego Pago */}
            <div className="card-elegant p-8 group">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Tráfego Pago</h3>
              <p className="text-gray-600 leading-relaxed">
                Campanhas segmentadas em Google Ads e redes sociais para gerar vendas rápidas.
              </p>
            </div>

            {/* SEO */}
            <div className="card-elegant p-8 group">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Tráfego Orgânico / SEO</h3>
              <p className="text-gray-600 leading-relaxed">
                Otimização para motores de busca, aumento de visibilidade e autoridade digital.
              </p>
            </div>

            {/* Social Media */}
            <div className="card-elegant p-8 group">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 9h6m-6 4h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Social Media</h3>
              <p className="text-gray-600 leading-relaxed">
                Gestão de redes sociais, criação de conteúdo e engajamento com seu público.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/servicos" className="btn-primary group">
              Ver Todos os Serviços
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black relative z-10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pronto para acelerar seu negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer digitalmente.
          </p>
          <a href="/contato" className="btn-primary group">
            Fale Conosco
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
