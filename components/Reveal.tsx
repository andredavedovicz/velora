"use client";

import { useEffect, useRef, useState, ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em ms para efeito escalonado */
  delay?: number;
  /** Tag HTML a ser renderizada (div por padrão) */
  as?: ElementType;
  /** Só anima uma vez (padrão true) */
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
