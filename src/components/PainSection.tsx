import { motion } from "framer-motion";
import { Ban, TrendingDown, Brain } from "lucide-react";

const pains = [
  {
    icon: Ban,
    title: "Dietas que não funcionam",
    description: "Você já tentou várias dietas, perdeu peso e recuperou tudo de novo? Esse ciclo é frustrante e prejudica seu corpo.",
  },
  {
    icon: TrendingDown,
    title: "Falta de constância",
    description: "Começa motivada na segunda, mas na quarta já desistiu? O problema não é você — é o método.",
  },
  {
    icon: Brain,
    title: "Comer emocional",
    description: "Desconta na comida quando está ansiosa, triste ou estressada? Isso tem solução, e ela começa com acolhimento.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PainSection() {
  return (
    <section className="py-20 bg-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Você se identifica?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Se você está cansada de lutar contra a balança, saiba que existe um
            caminho diferente.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pains.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="bg-card rounded-xl p-8 shadow-sm border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
