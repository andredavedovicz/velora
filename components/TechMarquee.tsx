import Reveal from "./Reveal";

type Tech = { name: string; color: string };

// Cores aproximadas das marcas, ajustadas para boa leitura em fundo escuro
const techs: Tech[] = [
  // Front-end
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#5B9BFF" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Tailwind", color: "#38BDF8" },
  // Back-end
  { name: "Node.js", color: "#6CC24A" },
  { name: "Python", color: "#FFD43B" },
  { name: "FastAPI", color: "#05C3B6" },
  { name: "Django", color: "#2BA977" },
  { name: "GraphQL", color: "#F056A8" },
  // Banco de dados
  { name: "PostgreSQL", color: "#5BA7E0" },
  { name: "MySQL", color: "#6BA4C7" },
  { name: "MongoDB", color: "#4DB33D" },
  { name: "Redis", color: "#FF5A4D" },
  // Cloud / DevOps
  { name: "AWS", color: "#FF9900" },
  { name: "EC2", color: "#FF9900" },
  { name: "S3", color: "#4CA72C" },
  { name: "Docker", color: "#2EA0F0" },
  { name: "Kubernetes", color: "#5B8DEF" },
  { name: "Vercel", color: "#FFFFFF" },
];

interface TechMarqueeProps {
  /** Inclinação da faixa em graus (negativo sobe para a direita) */
  angle?: number;
}

export default function TechMarquee({ angle = -6 }: TechMarqueeProps) {
  const loop = [...techs, ...techs];

  return (
    <section className="relative bg-black overflow-hidden py-20 border-t border-white/10">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />

      <Reveal className="relative z-10 text-center mb-12">
        <span className="eyebrow text-gray-500">
          Front-end · Back-end · Banco de dados · Cloud
        </span>
      </Reveal>

      {/* Faixa diagonal */}
      <div
        className="relative"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <div className="w-[120%] -ml-[10%] border-y border-white/10 bg-white/[0.03] py-5">
          <div className="marquee-track fade-x overflow-hidden">
            <div className="marquee">
              {loop.map((t, i) => (
                <span
                  key={i}
                  className="mx-6 text-2xl md:text-4xl font-bold whitespace-nowrap drop-shadow-[0_0_18px_rgba(0,0,0,0.4)]"
                  style={{ color: t.color }}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
