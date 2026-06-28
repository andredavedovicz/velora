import { Metadata } from 'next'
import HyperspeedWrapper from '../components/HyperspeedWrapper'
import Reveal from '../components/Reveal'
import { getWhatsAppUrl, WHATSAPP_LINK_PROPS } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Velora — Construa, escale e acelere seu negócio digital',
  description:
    'Empresa híbrida de tecnologia e marketing digital em Balneário Camboriú. Desenvolvimento de software, dashboards em Python com integração de dados, sites, aplicativos, tráfego pago, SEO e social media.',
  alternates: { canonical: '/' },
}

const stats = [
  { value: '+50', label: 'Projetos entregues' },
  { value: '4:1', label: 'ROAS médio em tráfego' },
  { value: '99,9%', label: 'Uptime das aplicações' },
  { value: '24/7', label: 'Dados em tempo real' },
]

const technologies = [
  'Python', 'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL',
  'Pandas', 'Plotly', 'Power BI', 'AWS', 'Docker', 'Streamlit',
]

const differentials = [
  {
    title: 'Tecnologia de verdade',
    description:
      'Não montamos templates. Escrevemos código sob medida, com arquitetura escalável e performance de produto.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    title: 'Decisões guiadas por dados',
    description:
      'Dashboards e integrações que transformam planilhas e APIs dispersas em uma visão única e acionável.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 3 5-6" />
    ),
  },
  {
    title: 'Marketing que vende',
    description:
      'Crescimento orientado a métricas: tráfego, SEO e social media conectados ao seu funil de receita.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
]

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <HyperspeedWrapper />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" aria-hidden />

        <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto pt-28">
          <Reveal>
            <span className="badge mb-7">
              <span className="dot-accent" />
              Tecnologia · Dados · Marketing
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="display text-4xl md:text-6xl lg:text-7xl mb-7 max-w-4xl mx-auto">
              Construa, escale e{' '}
              <span className="text-gradient-accent">acelere</span> seu negócio digital
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Uma empresa híbrida que une desenvolvimento de software, dashboards
              inteligentes e marketing digital para impulsionar o crescimento do seu negócio.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={getWhatsAppUrl('iniciar-projeto')} {...WHATSAPP_LINK_PROPS} className="btn-primary group">
                Iniciar projeto
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#areas" className="btn-secondary">
                Ver o que fazemos
              </a>
            </div>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 animate-float">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="bg-black relative z-10 border-t border-white/10">
        <div className="container-wide py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">{s.value}</div>
                <div className="text-sm text-gray-400 mt-2">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ÁREAS (BENTO) ===================== */}
      <section id="areas" className="section-padding bg-white relative z-10">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <Reveal>
              <span className="eyebrow mb-4"><span className="w-6 h-px bg-gray-400" /> Nossas áreas</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl md:text-5xl text-black mb-5">
                Tudo o que seu negócio precisa, em um só lugar
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Da primeira linha de código à última campanha. Combinamos engenharia,
                dados e marketing para entregar resultado de ponta a ponta.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5">
            {/* Destaques — Software e Dashboards */}
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  href: '/servicos/software',
                  title: 'Desenvolvimento de Software',
                  desc: 'Sites, e-commerce, sistemas web e aplicativos mobile sob medida.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
                  items: ['Sites & e-commerce', 'Sistemas web & ERPs', 'Apps mobile', 'APIs & automações'],
                },
                {
                  href: '/servicos/dashboards',
                  title: 'Dashboards & Dados',
                  desc: 'Dashboards em Python com integração de dados e BI em tempo real.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 3 5-6" />,
                  items: ['Dashboards em Python', 'Integração de dados', 'BI em tempo real', 'Relatórios automáticos'],
                },
              ].map((feat, i) => (
                <Reveal key={feat.href} delay={i * 90}>
                  <a href={feat.href} className="card-elegant group block h-full p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="icon-badge w-14 h-14 group-hover:bg-gray-900 group-hover:text-white">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {feat.icon}
                        </svg>
                      </div>
                      <span className="badge-light">Carro-chefe</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">{feat.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{feat.desc}</p>
                    <div className="grid grid-cols-2 gap-3 mb-7">
                      {feat.items.map((t) => (
                        <div key={t} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {t}
                        </div>
                      ))}
                    </div>
                    <span className="link-arrow">
                      Saiba mais
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Demais áreas — 4 cards iguais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  href: '/servicos/marketing',
                  title: 'Marketing Digital',
                  desc: 'Estratégias data-driven para crescer com previsibilidade.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                },
                {
                  href: '/servicos/trafego-pago',
                  title: 'Tráfego Pago',
                  desc: 'Campanhas em Google e redes sociais focadas em conversão.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />,
                },
                {
                  href: '/servicos/seo',
                  title: 'SEO / Orgânico',
                  desc: 'Visibilidade e autoridade sustentáveis nas buscas.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
                },
                {
                  href: '/servicos/social-media',
                  title: 'Social Media',
                  desc: 'Gestão de redes, conteúdo e community management.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 9h6m-6 4h6m-6 4h6" />,
                },
              ].map((area, i) => (
                <Reveal key={area.href} delay={i * 80}>
                  <a href={area.href} className="card-elegant group block h-full p-8">
                    <div className="icon-badge w-12 h-12 mb-6 group-hover:bg-gray-900 group-hover:text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {area.icon}
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-2">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{area.desc}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DESTAQUE DADOS ===================== */}
      <section className="section-padding bg-[#fafafa] relative z-10 border-y border-gray-100">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Reveal>
                <span className="eyebrow mb-4"><span className="w-6 h-px bg-gray-400" /> Em alta</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display text-3xl md:text-4xl text-black mb-5">
                  Seus dados, finalmente em um só painel
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Desenvolvemos dashboards em Python que integram suas planilhas, APIs e
                  bancos de dados em visualizações claras e atualizadas em tempo real —
                  para decisões mais rápidas e seguras.
                </p>
              </Reveal>
              <div className="space-y-4">
                {[
                  'Integração com múltiplas fontes (APIs, ERPs, planilhas, bancos)',
                  'Visualizações interativas e relatórios automáticos',
                  'Atualização em tempo real e alertas inteligentes',
                ].map((item, i) => (
                  <Reveal key={item} delay={180 + i * 70}>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={420}>
                <a href="/servicos/dashboards" className="btn-dark group mt-9">
                  Quero um dashboard
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </Reveal>
            </div>

            {/* Mock visual de dashboard */}
            <Reveal delay={150}>
              <DashboardMock />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== DIFERENCIAIS ===================== */}
      <section className="section-padding bg-white relative z-10">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="display text-4xl md:text-5xl text-black mb-5">Por que a Velora</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-gray-600">
                Um parceiro único para tecnologia e crescimento — sem repassar você de fornecedor em fornecedor.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentials.map((d, i) => (
              <Reveal key={d.title} delay={i * 100}>
                <div className="card-elegant h-full p-8 group">
                  <div className="icon-badge w-12 h-12 mb-6 group-hover:bg-gray-900 group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {d.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{d.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{d.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TECNOLOGIAS (MARQUEE) ===================== */}
      <section className="bg-black relative z-10 py-16 border-t border-white/10">
        <Reveal className="text-center mb-10">
          <span className="eyebrow text-gray-500">
            Stack moderna · do back-end ao dado
          </span>
        </Reveal>
        <div className="marquee-track fade-x overflow-hidden">
          <div className="marquee">
            {[...technologies, ...technologies].map((tech, i) => (
              <span
                key={i}
                className="mx-4 text-2xl md:text-3xl font-semibold text-white/30 hover:text-white/70 transition-colors duration-300 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative z-10 bg-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full glow-accent opacity-30"
          aria-hidden
        />
        <div className="container-custom relative z-10 text-center py-28">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-6">
              Pronto para acelerar seu negócio?
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Conte sua ideia. Em poucos dias retornamos com um plano claro de tecnologia,
              dados e crescimento.
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

/* Mock visual de um dashboard (puro CSS/SVG) */
function DashboardMock() {
  const bars = [42, 68, 55, 80, 62, 95, 73]
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent3/20 blur-2xl" aria-hidden />
      <div className="relative rounded-3xl border border-gray-200 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="dot-accent" />
            <span className="text-sm font-semibold text-gray-900">Painel de Vendas</span>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { k: 'Receita', v: 'R$ 128k', d: '+12%' },
            { k: 'Pedidos', v: '1.842', d: '+8%' },
            { k: 'Ticket', v: 'R$ 69', d: '+4%' },
          ].map((c) => (
            <div key={c.k} className="rounded-xl border border-gray-100 bg-gray-50 p-3">
              <div className="text-[11px] text-gray-500">{c.k}</div>
              <div className="text-lg font-bold text-gray-900 leading-tight">{c.v}</div>
              <div className="text-[11px] font-medium text-emerald-600">{c.d}</div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-100 p-4">
          <div className="flex items-end justify-between gap-2 h-32">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex items-end">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-gray-900 to-gray-600"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[10px] text-gray-400">
            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
