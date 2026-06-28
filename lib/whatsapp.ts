export const WHATSAPP_NUMBER = "5547997249820";

export type WhatsAppContext =
  | "geral"
  | "fale-conosco"
  | "iniciar-projeto"
  | "orcamento"
  | "dashboard"
  | "software"
  | "marketing"
  | "trafego-pago"
  | "seo"
  | "social-media";

const MESSAGES: Record<WhatsAppContext, string> = {
  geral:
    "Olá! Vim pelo site da Velora e gostaria de conversar com vocês.",
  "fale-conosco":
    "Olá! Vim pelo site da Velora e gostaria de falar com a equipe.",
  "iniciar-projeto":
    "Olá! Vim pelo site da Velora e quero iniciar um projeto. Podemos conversar?",
  orcamento:
    "Olá! Vim pelo site da Velora e gostaria de solicitar um orçamento.",
  dashboard:
    "Olá! Vim pelo site da Velora e tenho interesse em dashboards e análise de dados.",
  software:
    "Olá! Vim pelo site da Velora e quero saber mais sobre desenvolvimento de software.",
  marketing:
    "Olá! Vim pelo site da Velora e quero saber mais sobre marketing digital.",
  "trafego-pago":
    "Olá! Vim pelo site da Velora e gostaria de conversar sobre tráfego pago.",
  seo:
    "Olá! Vim pelo site da Velora e gostaria de solicitar uma auditoria de SEO.",
  "social-media":
    "Olá! Vim pelo site da Velora e tenho interesse na gestão de redes sociais.",
};

export function getWhatsAppUrl(context: WhatsAppContext = "geral"): string {
  const text = encodeURIComponent(MESSAGES[context]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const WHATSAPP_LINK_PROPS = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};
