"use client";

import { useState } from "react";

import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const serviceOptions = [
  "Dashboards & Dados (Python)",
  "Desenvolvimento de Software",
  "Site ou E-commerce",
  "Aplicativo Mobile",
  "Marketing Digital / Growth",
  "Tráfego Pago",
  "SEO",
  "Social Media",
  "Outro",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    service: serviceOptions[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Olá, Velora! Meu nome é ${form.name || "—"}.`,
      form.company ? `Empresa: ${form.company}.` : "",
      `Tenho interesse em: ${form.service}.`,
      form.message ? `\nDetalhes: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const field =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Seu nome"
            className={field}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Nome da empresa (opcional)"
            className={field}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Interesse</label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={field}
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Conte um pouco sobre seu projeto..."
          className={`${field} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-900"
      >
        Enviar pelo WhatsApp
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.515 5.26l-.999 3.648 3.973-1.755zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      </button>
      <p className="text-xs text-gray-400 text-center">
        Resposta em até 1 dia útil. Seus dados não são compartilhados.
      </p>
    </form>
  );
}
