import { motion } from "framer-motion";
import { ClipboardCheck, Utensils, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Avaliação completa",
    description: "Conversa detalhada sobre sua rotina, hábitos, histórico e objetivos para entender suas necessidades.",
  },
  {
    icon: Utensils,
    step: "02",
    title: "Plano personalizado",
    description: "Montamos juntas um plano alimentar prático, flexível e adaptado à sua realidade — sem radicalismo.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Acompanhamento contínuo",
    description: "Consultas de retorno e suporte para ajustar, motivar e garantir resultados duradouros.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-sage">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary mb-3 block">Simples e eficiente</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Como funciona?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon size={28} className="text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                Etapa {s.step}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
