import { motion } from "framer-motion";
import { Check, MessageCircle, Star } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/links";

const plans = [
  {
    name: "Consulta Avulsa",
    label: "Direcionamento pontual",
    description: "Ideal para quem já tem autonomia e precisa de uma orientação objetiva para seguir com segurança.",
    price: "R$ 180,00",
    message: "Olá, Bruna! Tenho interesse na Consulta Avulsa.",
    features: [
      "1 sessão detalhada por videoconferência",
      "Análise dos exames laboratoriais atuais",
      "Plano alimentar personalizado para a rotina",
      "Não inclui suporte para dúvidas após a entrega do plano",
    ],
  },
  {
    name: "Plano de Acompanhamento",
    label: "Mais procurado",
    description: "Para quem precisa de foco, acompanhamento de perto e apoio para não desanimar ao longo do processo.",
    price: "R$ 280,00",
    message: "Olá, Bruna! Tenho interesse no Plano de Acompanhamento de 30 dias.",
    highlighted: true,
    features: [
      "2 consultas completas em vídeo em 30 dias",
      "Retorno estratégico após 15 dias",
      "Análise de exames e suplementação personalizada",
      "Suporte via WhatsApp de segunda a sexta",
    ],
  },
  {
    name: "Plano de Transformação",
    label: "90 dias",
    description: "Recomendado para quem busca mudança consistente, evolução de hábitos e acompanhamento por mais tempo.",
    price: "3x de R$ 220,00 ou R$ 660 à vista",
    message: "Olá, Bruna! Tenho interesse no Plano de Transformação de 90 dias.",
    features: [
      "6 consultas completas em vídeo",
      "Atendimentos quinzenais durante 3 meses",
      "Novas estratégias alimentares a cada consulta",
      "Suporte prioritário via WhatsApp durante o período",
    ],
  },
];

export default function ConsultationPlansSection() {
  return (
    <section id="planos" className="section-pad bg-card/45">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="eyebrow mb-4 block">Atendimento online</span>
            <h2 className="editorial-title text-4xl md:text-6xl">Escolha o formato que combina com seu momento</h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Em todos os formatos, a Bruna analisa seus exames laboratoriais recentes para ajustar nutrientes e, quando
            necessário, orientar a suplementação adequada.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`flex min-h-full flex-col rounded-xl border p-6 ${
                plan.highlighted ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"
              }`}
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
                    plan.highlighted ? "bg-white/14 text-white" : "bg-secondary text-primary"
                  }`}
                >
                  {plan.label}
                </span>
                {plan.highlighted ? <Star size={18} fill="currentColor" /> : null}
              </div>

              <h3 className="font-display text-3xl leading-tight">{plan.name}</h3>
              <p className={`mt-4 min-h-[96px] leading-7 ${plan.highlighted ? "text-white/75" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="my-6 border-t border-current/15 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] opacity-60">Investimento</p>
                <p className="mt-2 text-2xl font-bold">{plan.price}</p>
              </div>

              <ul className="grid gap-3 text-sm leading-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check size={17} className="mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsAppUrl(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex min-h-[50px] items-center justify-center gap-2 rounded-md px-5 py-6 text-sm font-bold ${
                  plan.highlighted
                    ? "text-primary-foreground underline underline-offset-4"
                    : "text-primary underline underline-offset-4"
                }`}
              >
                <MessageCircle size={18} />
                Falar sobre este plano
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
