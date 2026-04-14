import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    text: "Eu já tinha desistido de emagrecer. A Bruna me mostrou que era possível sem sofrimento. Perdi 12kg e me sinto outra pessoa!",
    result: "Perdeu 12kg em 5 meses",
  },
  {
    name: "Fernanda S.",
    text: "Pela primeira vez não sinto que estou fazendo dieta. Como de tudo, com equilíbrio, e os resultados aparecem naturalmente.",
    result: "Reeducação alimentar",
  },
  {
    name: "Juliana M.",
    text: "A Bruna me ajudou a entender minha ansiedade alimentar. Hoje tenho uma relação muito mais saudável com a comida.",
    result: "Controle da compulsão",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary mb-3 block">Histórias reais</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Resultados que transformam
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-primary font-medium">{t.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
