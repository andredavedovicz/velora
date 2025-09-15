import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre - Velora',
  description: 'Conheça a Velora, empresa híbrida de tecnologia e marketing digital em Balneário Camboriú.',
}

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Sobre a Velora
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Somos uma empresa híbrida que combina desenvolvimento de software e marketing digital.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A Velora nasceu da necessidade de oferecer soluções completas para empresas que querem crescer digitalmente. 
              Combinamos desenvolvimento de software com marketing digital para criar estratégias integradas que realmente funcionam.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Localizados em Balneário Camboriú, atendemos empresas de todo o Brasil com soluções personalizadas e resultados mensuráveis.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}