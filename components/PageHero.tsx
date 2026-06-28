import Reveal from "./Reveal";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full glow-accent opacity-40"
        aria-hidden
      />
      <div className="container-custom relative z-10 text-center">
        {eyebrow && (
          <Reveal>
            <span className="badge mb-6">
              <span className="dot-accent" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="display text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
