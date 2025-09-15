"use client";

import { useState, useRef, useEffect } from 'react';

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      name: 'Desenvolvimento de Software',
      href: '/servicos/software',
      description: 'Sites, sistemas e aplicativos'
    },
    {
      name: 'Marketing Digital',
      href: '/servicos/marketing',
      description: 'Estratégias de crescimento'
    },
    {
      name: 'Tráfego Pago',
      href: '/servicos/trafego-pago',
      description: 'Google Ads e redes sociais'
    },
    {
      name: 'SEO',
      href: '/servicos/seo',
      description: 'Tráfego orgânico'
    },
    {
      name: 'Social Media',
      href: '/servicos/social-media',
      description: 'Gestão de redes sociais'
    }
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // 150ms de delay para permitir movimento do mouse
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          <a href="/" className="hover:text-gray-200 transition-colors duration-300 flex items-center group">
            <div className="relative">
              <span className="relative z-10">Velora</span>
              {/* Elementos decorativos minimalistas */}
              <div className="absolute -top-2 -right-2 w-3 h-3 border border-white/30 rounded-full group-hover:border-white/50 transition-all duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-br from-white/20 to-transparent rounded-full group-hover:from-white/30 transition-all duration-300"></div>
              <div className="absolute top-1/2 -right-4 w-1 h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-white/30 transition-all duration-300"></div>
            </div>
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">Home</a>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="/servicos" 
              className="text-gray-200 hover:text-white transition-colors duration-300 font-medium flex items-center"
            >
              Serviços
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            
            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div 
                ref={dropdownRef}
                className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">Nossos Serviços</h3>
                </div>
                <div className="py-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="text-gray-900 font-medium">{service.name}</div>
                      <div className="text-sm text-gray-500">{service.description}</div>
                    </a>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <a 
                    href="/servicos" 
                    className="text-sm text-gray-600 hover:text-gray-900 font-medium"
                  >
                    Ver todos os serviços →
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <a href="/sobre" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">Sobre</a>
          <a href="/contato" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">Contato</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-200 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
