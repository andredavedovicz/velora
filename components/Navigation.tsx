"use client";

import { useState, useRef, useEffect } from "react";
import { getWhatsAppUrl, WHATSAPP_LINK_PROPS } from "@/lib/whatsapp";

const services = [
  {
    name: "Desenvolvimento de Software",
    href: "/servicos/software",
    description: "Sites, e-commerce, sistemas e apps",
  },
  {
    name: "Dashboards & Dados",
    href: "/servicos/dashboards",
    description: "Python, BI e integração de dados",
  },
  {
    name: "Marketing Digital",
    href: "/servicos/marketing",
    description: "Estratégias de crescimento",
  },
  {
    name: "Tráfego Pago",
    href: "/servicos/trafego-pago",
    description: "Google Ads e redes sociais",
  },
  {
    name: "SEO",
    href: "/servicos/seo",
    description: "Tráfego orgânico",
  },
  {
    name: "Social Media",
    href: "/servicos/social-media",
    description: "Gestão de redes sociais",
  },
];

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Bloqueia scroll quando menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <nav className="container-wide py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="group flex items-baseline gap-2.5">
          <span className="text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-br from-emerald-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent pr-[0.04em]">V</span>
            <span className="text-white tracking-tight">elora</span>
          </span>
          <span className="hidden lg:inline border-l border-white/15 pl-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
            Software · Dados · Marketing
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <a href="/" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            Home
          </a>

          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a
              href="/servicos"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center gap-1"
            >
              Serviços
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {isServicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[22rem] rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/20 p-2 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {services.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="block rounded-xl px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="text-gray-900 font-medium text-sm">{service.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{service.description}</div>
                  </a>
                ))}
                <a
                  href="/servicos"
                  className="block rounded-xl px-4 py-3 mt-1 text-sm font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  Ver todos os serviços →
                </a>
              </div>
            )}
          </div>

          <a href="/sobre" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            Sobre
          </a>

          <a
            href={getWhatsAppUrl("fale-conosco")}
            {...WHATSAPP_LINK_PROPS}
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-100 transition-colors duration-300"
          >
            Fale conosco
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsMobileOpen((v) => !v)}
          className="md:hidden text-white p-2 -mr-2"
          aria-label="Abrir menu"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-black/95 backdrop-blur p-4 max-h-[80vh] overflow-y-auto">
          <a
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="block px-3 py-3 text-gray-200 font-medium border-b border-white/5"
          >
            Home
          </a>
          <div className="py-2 border-b border-white/5">
            <span className="px-3 text-xs uppercase tracking-[0.2em] text-gray-500">Serviços</span>
            <div className="mt-2 space-y-1">
              {services.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-xl px-3 py-2.5 hover:bg-white/5 transition-colors"
                >
                  <div className="text-gray-200 text-sm font-medium">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.description}</div>
                </a>
              ))}
            </div>
          </div>
          <a
            href="/sobre"
            onClick={() => setIsMobileOpen(false)}
            className="block px-3 py-3 text-gray-200 font-medium border-b border-white/5"
          >
            Sobre
          </a>
          <a
            href={getWhatsAppUrl("fale-conosco")}
            {...WHATSAPP_LINK_PROPS}
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 block text-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
          >
            Fale conosco
          </a>
        </div>
      )}
    </nav>
  );
}
