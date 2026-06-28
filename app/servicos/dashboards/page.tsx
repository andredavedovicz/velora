import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { getWhatsAppUrl, WHATSAPP_LINK_PROPS } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Dashboards & Dados em Python | Velora',
  description:
    'Dashboards em Python com integração de dados. Painéis de BI em tempo real que conectam APIs, ERPs, planilhas e bancos de dados para decisões orientadas por dados.',
  keywords:
    'dashboards python, integração de dados, business intelligence, plotly, dash, streamlit, pandas, etl, bi, painéis em tempo real, análise de dados',
}

const dataFeatures = [
  {
    title: 'Dashboards em Python',
    description:
      'Painéis interativos com Plotly, Dash e Streamlit para visualizar KPIs, vendas, operações e finanças em tempo real.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l3-3 3 3 5-6" />
    ),
  },
  {
    title: 'Integração de dados',
    description:
      'Conectamos APIs, ERPs, CRMs, planilhas e bancos de dados em um pipeline único e confiável (ETL/ELT).',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: 'Dados em tempo real',
    description:
      'Atualização automática, agendamentos e alertas inteligentes para você agir no momento certo.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Relatórios automáticos',
    description:
      'Relatórios recorrentes por e-mail e exportações sob demanda — adeus consolidação manual de planilhas.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
]

const dataStack = [
  'Python', 'Pandas', 'Plotly', 'Dash', 'Streamlit', 'FastAPI',
  'PostgreSQL', 'BigQuery', 'Power BI', 'Apache Airflow', 'Docker', 'AWS',
]

const dataSources = [
  'Google Sheets', 'Excel', 'APIs REST', 'PostgreSQL / MySQL',
  'MongoDB', 'Google Analytics', 'Meta / Google Ads', 'ERPs & CRMs',
]

const process = [
  { step: '01', title: 'Descoberta', desc: 'Mapeamos seus dados, fontes e objetivos de negócio.' },
  { step: '02', title: 'Arquitetura', desc: 'Definimos pipeline, tecnologias e modelo de dados.' },
  { step: '03', title: 'Construção', desc: 'Desenvolvemos o painel com entregas incrementais.' },
  { step: '04', title: 'Go-live & suporte', desc: 'Publicamos, monitoramos e evoluímos a solução.' },
]

export default function DashboardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dashboards & Dados"
        title={<>Dashboards em <span className="text-gradient-accent">Python</span> com integração de dados</>}
        description="Transformamos suas planilhas, APIs e bancos dispersos em painéis inteligentes, atualizados em tempo real — para decisões mais rápidas e seguras."
      >
        <a href={getWhatsAppUrl('dashboard')} {...WHATSAPP_LINK_PROPS} className="btn-primary group">
          Quero um dashboard
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#recursos" className="btn-secondary">Ver recursos</a>
      </PageHero>

      {/* Destaque + mock */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Reveal>
                <span className="eyebrow mb-4"><span className="w-6 h-px bg-gray-400" /> Sua operação em um só painel</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display text-3xl md:text-4xl text-gray-900 mb-5">
                  Seus dados, finalmente em um só lugar
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Conectamos suas fontes de dados e entregamos painéis interativos com os
                  números que realmente importam para o seu negócio — sem retrabalho manual.
                </p>
              </Reveal>
              <div className="space-y-4">
                {[
                  'Visão única: todos os dados consolidados em um lugar',
                  'Decisões mais rápidas, baseadas em métricas confiáveis',
                  'Menos planilha manual, mais automação e precisão',
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
            </div>

            <Reveal delay={150}>
              <DashboardMock />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="section-padding bg-[#fafafa] border-y border-gray-100 scroll-mt-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="display text-4xl md:text-5xl text-gray-900 mb-5">O que entregamos</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-gray-600">Recursos pensados para tirar o máximo dos seus dados.</p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dataFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <div className="card-elegant h-full p-7 group">
                  <div className="icon-badge w-12 h-12 mb-5 group-hover:bg-gray-900 group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {f.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Fontes integráveis */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:max-w-xs">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conectamos suas fontes</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Integramos com as ferramentas que você já usa — sem retrabalho.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 md:flex-1">
                  {dataSources.map((src) => (
                    <span key={src} className="rounded-full border border-gray-200 bg-[#fafafa] px-4 py-2 text-sm font-medium text-gray-700">
                      {src}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section className="section-padding bg-black">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="display text-4xl md:text-5xl text-white mb-5">Tecnologias de dados</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Do pipeline à visualização — stack robusta para dados confiáveis.
            </p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {dataStack.map((tech, i) => (
              <Reveal key={tech} delay={i * 40}>
                <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 hover:border-white/30 hover:text-white transition-all duration-300">
                  {tech}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="display text-4xl md:text-5xl text-gray-900 mb-5">Como construímos</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-gray-600">Do dado bruto ao painel pronto para decidir.</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="card-elegant h-full p-8">
                  <div className="text-5xl font-bold text-gray-200 mb-4">{p.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="pointer-events-none absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full glow-accent opacity-30" aria-hidden />
        <div className="container-custom relative z-10 text-center py-28">
          <Reveal>
            <h2 className="display text-4xl md:text-5xl text-white mb-6">
              Pronto para enxergar seus números com clareza?
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Vamos conversar sobre suas fontes de dados e desenhar o dashboard ideal.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getWhatsAppUrl('dashboard')} {...WHATSAPP_LINK_PROPS} className="btn-primary group">
                Quero um dashboard
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/servicos/software" className="btn-secondary">Ver desenvolvimento de software</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* Mock visual de dashboard */
function DashboardMock() {
  const line = [30, 45, 38, 60, 52, 75, 68, 88]
  const points = line
    .map((v, i) => `${(i / (line.length - 1)) * 100},${100 - v}`)
    .join(' ')

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent3/20 blur-2xl" aria-hidden />
      <div className="relative rounded-3xl border border-gray-200 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="dot-accent" />
            <span className="text-sm font-semibold text-gray-900">analytics.py — dashboard</span>
          </div>
          <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-mono text-gray-500">live</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { k: 'Faturamento', v: 'R$ 284k', d: '+18%' },
            { k: 'Conversão', v: '4,7%', d: '+0,6pp' },
            { k: 'Churn', v: '2,1%', d: '-0,4pp' },
          ].map((c) => (
            <div key={c.k} className="rounded-xl border border-gray-100 bg-gray-50 p-3">
              <div className="text-[11px] text-gray-500">{c.k}</div>
              <div className="text-base font-bold text-gray-900 leading-tight">{c.v}</div>
              <div className="text-[11px] font-medium text-emerald-600">{c.d}</div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-100 p-4">
          <div className="text-[11px] text-gray-500 mb-2">Receita acumulada (tempo real)</div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-28">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={`0,100 ${points} 100,100`} fill="url(#area)" />
            <polyline
              points={points}
              fill="none"
              stroke="#0d9488"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
