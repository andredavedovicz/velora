import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { getWhatsAppUrl, WHATSAPP_LINK_PROPS } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Sobre — Velora',
  description:
    'Conheça a Velora, empresa híbrida de tecnologia, dados e marketing digital em Balneário Camboriú.',
  alternates: { canonical: '/sobre' },
}

const stats = [
  { value: '+50', label: 'Projetos entregues' },
  { value: '100%', label: 'Foco em resultado' },
  { value: '2', label: 'Frentes integradas' },
  { value: 'BR', label: 'Atendimento nacional' },
]

const values = [
  {
    title: 'Excelência técnica',
    description: 'Código limpo, arquitetura escalável e atenção aos detalhes em cada entrega.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />,
  },
  {
    title: 'Transparência',
    description: 'Comunicação clara, prazos honestos e métricas reais — sem caixa-preta.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />,
  },
  {
    title: 'Orientação a dados',
    description: 'Decisões guiadas por números, não por achismo. Medimos, aprendemos e melhoramos.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 3 5-6" />,
  },
  {
    title: 'Parceria de longo prazo',
    description: 'Mais que fornecedores: somos parceiros do crescimento do seu negócio.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
  },
]

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Velora"
        title={<>Tecnologia e marketing, <span className="text-gradient-accent">sob o mesmo teto</span></>}
        description="Somos uma empresa híbrida que combina desenvolvimento de software, dados e marketing digital para acelerar negócios."
      />

      {/* Missão */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <span className="eyebrow mb-4"><span className="w-6 h-px bg-gray-400" /> Nossa missão</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-3xl md:text-4xl text-gray-900 mb-6">
                Soluções completas para quem quer crescer digitalmente
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A Velora nasceu da necessidade de oferecer soluções completas para empresas que
                querem crescer no digital. Unimos desenvolvimento de software e dados com
                marketing digital para criar estratégias integradas que realmente funcionam.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Localizados em Balneário Camboriú, atendemos empresas de todo o Brasil com
                soluções personalizadas e resultados mensuráveis — do código à conversão.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black border-y border-white/10">
        <div className="container-wide py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">{s.value}</div>
                <div className="text-sm text-gray-400 mt-2">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-[#fafafa]">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="display text-4xl md:text-5xl text-gray-900 mb-5">Nossos valores</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-gray-600">O que guia cada decisão e cada entrega.</p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="card-elegant h-full p-8 group">
                  <div className="icon-badge w-12 h-12 mb-6 group-hover:bg-gray-900 group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {v.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="container-custom relative z-10 text-center py-28">
          <Reveal>
            <h2 className="display text-4xl md:text-5xl text-white mb-6">Vamos construir algo juntos?</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Conte sua ideia e descubra como podemos ajudar seu negócio a crescer.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <a href={getWhatsAppUrl('fale-conosco')} {...WHATSAPP_LINK_PROPS} className="btn-primary group">
              Fale conosco
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
