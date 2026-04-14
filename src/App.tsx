import {
  Activity,
  Brain,
  Eye,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'

export default function EloMindLandingPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--background)', color: 'var(--foreground)' }}
    >
      <header
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{
          background: 'rgba(2, 6, 23, 0.8)',
          borderBottom: '1px solid var(--card-border)',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="EloMind"
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-semibold tracking-wide">EloMind</p>
              <p className="text-xs" style={{ color: 'var(--muted-strong)' }}>
                Extensão inteligente do terapeuta
              </p>
            </div>
          </div>

          <nav
            className="hidden items-center gap-8 text-sm md:flex"
            style={{ color: 'var(--muted)' }}
          >
            <a href="#problema" className="transition hover:text-white">
              Problema
            </a>
            <a href="#solucao" className="transition hover:text-white">
              Solução
            </a>
            <a href="#beneficios" className="transition hover:text-white">
              Benefícios
            </a>
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </nav>

          <a
            href="#contato"
            style={{ backgroundImage: 'var(--brand-gradient)' }}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]"
          >
            Quero conhecer
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: 'var(--hero-glow)' }}
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'var(--grid-overlay)',
              backgroundSize: '36px 36px',
            }}
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm backdrop-blur-sm"
                style={{
                  border: '1px solid var(--card-border)',
                  background: 'var(--card)',
                  color: 'var(--muted)',
                }}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: 'var(--brand-emerald)' }}
                />
                Plataforma para terapeutas
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Uma{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--brand-gradient)' }}
                >
                  extensão do seu atendimento
                </span>
                , além da sessão.
              </h1>

              <p
                className="mt-6 max-w-2xl text-lg leading-8 md:text-xl"
                style={{ color: 'var(--muted)' }}
              >
                O EloMind ajuda terapeutas a acompanhar seus pacientes entre
                sessões, organizar reflexões e manter continuidade terapêutica
                com apoio de inteligência artificial.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  style={{ backgroundImage: 'var(--brand-gradient)' }}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(56,189,248,0.25)] transition hover:-translate-y-0.5"
                >
                  Quero conhecer o EloMind
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#solucao"
                  className="rounded-full px-6 py-3 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/10"
                  style={{
                    border: '1px solid var(--card-border)',
                    background: 'var(--card)',
                    color: '#e2e8f0',
                  }}
                >
                  Ver como funciona
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div
                  className="rounded-3xl p-5 backdrop-blur-sm"
                  style={{
                    border: '1px solid var(--card-border)',
                    background: 'var(--card)',
                  }}
                >
                  <p className="text-sm" style={{ color: 'var(--muted-strong)' }}>
                    Foco
                  </p>
                  <p className="mt-2 font-semibold">Terapeutas</p>
                </div>

                <div
                  className="rounded-3xl p-5 backdrop-blur-sm"
                  style={{
                    border: '1px solid var(--card-border)',
                    background: 'var(--card)',
                  }}
                >
                  <p className="text-sm" style={{ color: 'var(--muted-strong)' }}>
                    Propósito
                  </p>
                  <p className="mt-2 font-semibold">Continuidade clínica</p>
                </div>

                <div
                  className="rounded-3xl p-5 backdrop-blur-sm"
                  style={{
                    border: '1px solid var(--card-border)',
                    background: 'var(--card)',
                  }}
                >
                  <p className="text-sm" style={{ color: 'var(--muted-strong)' }}>
                    Diferencial
                  </p>
                  <p className="mt-2 font-semibold">
                    IA com contexto terapêutico
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                className="absolute -inset-4 rounded-[40px] blur-3xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(45,212,191,0.2), rgba(56,189,248,0.2), rgba(139,92,246,0.2))',
                }}
              />
              <div
                className="relative w-full max-w-[560px] rounded-[36px] p-6 shadow-[0_20px_80px_rgba(2,6,23,0.55)] backdrop-blur-xl md:p-8"
                style={{
                  border: '1px solid var(--card-border)',
                  background: 'var(--card-strong)',
                }}
              >
                <div
                  className="rounded-[28px] p-6 md:p-8"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
                  }}
                >
                  <img
                    src="/EloMind.png"
                    alt="Logo EloMind"
                    className="mx-auto w-full max-w-[440px] object-contain drop-shadow-[0_20px_40px_rgba(56,189,248,0.18)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problema" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ color: '#7dd3fc' }}
            >
              O problema
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              O acompanhamento não termina na sessão. Mas hoje muita coisa se
              perde.
            </h2>

            <p
              className="mt-6 text-lg leading-8"
              style={{ color: 'var(--muted)' }}
            >
              Entre uma sessão e outra, o terapeuta perde visibilidade do que
              aconteceu com o paciente. Reflexões importantes se dispersam,
              emoções mudam e sinais relevantes deixam de ser registrados.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div
              className="rounded-[28px] p-7 backdrop-blur-sm transition hover:bg-white/[0.07]"
              style={{
                border: '1px solid var(--card-border)',
                background: 'var(--card)',
              }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background: 'rgba(14,165,233,0.15)',
                  color: '#38bdf8',
                }}
              >
                <Activity size={22} />
              </div>

              <h3 className="text-xl font-semibold">Perda de contexto</h3>
              <p className="mt-3 leading-7" style={{ color: 'var(--muted)' }}>
                O paciente vive experiências importantes entre sessões, mas isso
                nem sempre chega com clareza ao consultório.
              </p>
            </div>

            <div
              className="rounded-[28px] p-7 backdrop-blur-sm transition hover:bg-white/[0.07]"
              style={{
                border: '1px solid var(--card-border)',
                background: 'var(--card)',
              }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background: 'rgba(45,212,191,0.15)',
                  color: '#2dd4bf',
                }}
              >
                <Brain size={22} />
              </div>

              <h3 className="text-xl font-semibold">Esquecimento terapêutico</h3>
              <p className="mt-3 leading-7" style={{ color: 'var(--muted)' }}>
                O que foi trabalhado na sessão pode perder força ao longo da
                semana sem um espaço de continuidade estruturada.
              </p>
            </div>

            <div
              className="rounded-[28px] p-7 backdrop-blur-sm transition hover:bg-white/[0.07]"
              style={{
                border: '1px solid var(--card-border)',
                background: 'var(--card)',
              }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background: 'rgba(139,92,246,0.15)',
                  color: '#8b5cf6',
                }}
              >
                <Eye size={22} />
              </div>

              <h3 className="text-xl font-semibold">Acompanhamento limitado</h3>
              <p className="mt-3 leading-7" style={{ color: 'var(--muted)' }}>
                O terapeuta precisa de mais visão entre sessões, sem aumentar
                carga operacional nem transformar o cuidado em excesso de
                mensagens.
              </p>
            </div>
          </div>
        </section>

        <section
          id="solucao"
          className="border-y"
          style={{
            borderColor: 'var(--card-border)',
            background: 'var(--card-soft)',
          }}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: '#5eead4' }}
              >
                A solução
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                O EloMind continua o seu trabalho fora da sessão.
              </h2>

              <p
                className="mt-6 text-lg leading-8"
                style={{ color: 'var(--muted)' }}
              >
                A plataforma cria um espaço inteligente para o paciente registrar
                reflexões e para o terapeuta acompanhar evolução com mais
                clareza, sem perder o contexto clínico.
              </p>

              <div className="mt-8 space-y-5">
                <div
                  className="rounded-3xl p-5"
                  style={{
                    border: '1px solid var(--card-border)',
                    background: 'rgba(2,6,23,0.6)',
                  }}
                >
                  <p className="text-lg font-semibold">1. Reflexões guiadas</p>
                  <p className="mt-2 leading-7" style={{ color: 'var(--muted)' }}>
                    O paciente registra o que sentiu, percebeu e aprendeu após a
                    sessão, com estrutura pensada para o processo terapêutico.
                  </p>
                </div>

                <div
                  className="rounded-3xl p-5"
                  style={{
                    border: '1px solid var(--card-border)',
                    background: 'rgba(2,6,23,0.6)',
                  }}
                >
                  <p className="text-lg font-semibold">2. Organização com IA</p>
                  <p className="mt-2 leading-7" style={{ color: 'var(--muted)' }}>
                    A inteligência artificial ajuda a transformar informações
                    dispersas em sinais mais claros, sem substituir o olhar
                    clínico do terapeuta.
                  </p>
                </div>

                <div
                  className="rounded-3xl p-5"
                  style={{
                    border: '1px solid var(--card-border)',
                    background: 'rgba(2,6,23,0.6)',
                  }}
                >
                  <p className="text-lg font-semibold">
                    3. Continuidade terapêutica
                  </p>
                  <p className="mt-2 leading-7" style={{ color: 'var(--muted)' }}>
                    Você acompanha o progresso entre sessões e chega ao próximo
                    encontro com mais contexto para conduzir melhor o
                    atendimento.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-[32px] p-8 shadow-2xl"
              style={{
                border: '1px solid var(--card-border)',
                background: 'rgba(2,6,23,0.7)',
              }}
            >
              <div
                className="rounded-[28px] p-6"
                style={{
                  border: '1px solid var(--card-border)',
                  background: 'var(--card)',
                }}
              >
                <p
                  className="text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ color: 'var(--muted-strong)' }}
                >
                  Visão do EloMind
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Mais contexto. Menos perda de informação.
                </h3>

                <div className="mt-8 space-y-4">
                  <div
                    className="flex items-start gap-3 rounded-2xl p-4"
                    style={{
                      background: 'rgba(14,165,233,0.10)',
                      color: '#f8fafc',
                    }}
                  >
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 shrink-0"
                      style={{ color: '#7dd3fc' }}
                    />
                    <span>
                      Pacientes registram vivências importantes entre sessões
                    </span>
                  </div>

                  <div
                    className="flex items-start gap-3 rounded-2xl p-4"
                    style={{
                      background: 'rgba(45,212,191,0.10)',
                      color: '#f8fafc',
                    }}
                  >
                    <Sparkles
                      size={20}
                      className="mt-0.5 shrink-0"
                      style={{ color: '#5eead4' }}
                    />
                    <span>
                      A IA ajuda a organizar reflexões com mais clareza
                    </span>
                  </div>

                  <div
                    className="flex items-start gap-3 rounded-2xl p-4"
                    style={{
                      background: 'rgba(139,92,246,0.10)',
                      color: '#f8fafc',
                    }}
                  >
                    <Eye
                      size={20}
                      className="mt-0.5 shrink-0"
                      style={{ color: '#c4b5fd' }}
                    />
                    <span>
                      O terapeuta acompanha o que importa, com mais visão clínica
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ color: '#c4b5fd' }}
            >
              Benefícios
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Não é agenda. Não é chat. É continuidade terapêutica com
              inteligência.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div
              className="rounded-[30px] p-8"
              style={{
                border: '1px solid var(--card-border)',
                background: 'var(--card)',
              }}
            >
              <h3 className="text-2xl font-semibold">Para o terapeuta</h3>
              <ul className="mt-6 space-y-4" style={{ color: 'var(--muted)' }}>
                <li>• Mais visibilidade do paciente entre sessões</li>
                <li>• Melhor preparo para o próximo atendimento</li>
                <li>• Menos perda de informação relevante</li>
                <li>• Extensão do cuidado sem depender de mensagens soltas</li>
              </ul>
            </div>

            <div
              className="rounded-[30px] p-8"
              style={{
                border: '1px solid var(--card-border)',
                background: 'var(--card)',
              }}
            >
              <h3 className="text-2xl font-semibold">Valor percebido</h3>
              <ul className="mt-6 space-y-4" style={{ color: 'var(--muted)' }}>
                <li>• Diferencial profissional para o atendimento clínico</li>
                <li>• Processo terapêutico mais contínuo e estruturado</li>
                <li>• Uso da IA como apoio, não como substituição</li>
                <li>• Plataforma alinhada à rotina do terapeuta moderno</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contato" className="pb-20">
          <div className="mx-auto max-w-5xl px-6">
            <div
              className="overflow-hidden rounded-[36px] p-10 shadow-2xl backdrop-blur-xl md:p-14"
              style={{
                border: '1px solid var(--card-border)',
                background:
                  'linear-gradient(135deg, rgba(45,212,191,0.10), rgba(56,189,248,0.10), rgba(139,92,246,0.10))',
              }}
            >
              <div className="max-w-3xl">
                <p
                  className="text-sm font-semibold uppercase tracking-[0.22em]"
                  style={{ color: 'var(--muted)' }}
                >
                  Acesso antecipado
                </p>

                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Seja um dos primeiros terapeutas a conhecer o EloMind.
                </h2>

                <p
                  className="mt-6 text-lg leading-8"
                  style={{ color: '#e2e8f0' }}
                >
                  Estamos construindo uma nova forma de acompanhar pacientes
                  entre sessões. Entre em contato e acompanhe os próximos passos
                  do produto.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@elomind.tech&su=Quero%20conhecer%20o%20EloMind&body=Olá,%20sou%20terapeuta%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20plataforma."
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                    style={{ background: '#ffffff' }}
                  >
                    Fale conosco
                  </a>

                  <a
                    href="#solucao"
                    className="rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                    style={{
                      border: '1px solid var(--card-border-strong)',
                      background: 'var(--card)',
                      color: '#ffffff',
                    }}
                  >
                    Ver como funciona
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}