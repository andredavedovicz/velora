import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato - Velora',
  description: 'Entre em contato com a Velora para desenvolvimento de software e marketing digital em Balneário Camboriú.',
}

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pronto para acelerar seu negócio? Vamos conversar sobre como podemos ajudar.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Vamos trabalhar juntos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato conosco através do WhatsApp ou email para discutirmos seu projeto.
            </p>
            <div className="space-y-4">
              <a 
                href="https://wa.me/5547999999999" 
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-lg hover:bg-green-600 transition-colors duration-300"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:contato@velora.com.br" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-black transition-colors duration-300 ml-4"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}