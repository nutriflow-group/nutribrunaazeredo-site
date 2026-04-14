import { motion } from "framer-motion";
import { Scale, Apple, Dumbbell, Brain, HeartPulse } from "lucide-react";

const services = [
  { icon: Scale, title: "Emagrecimento saudável", description: "Perda de peso gradual e sustentável, respeitando seu corpo e sua rotina." },
  { icon: Apple, title: "Reeducação alimentar", description: "Aprenda a comer bem sem regras rígidas. Autonomia e equilíbrio no prato." },
  { icon: Dumbbell, title: "Ganho de massa", description: "Nutrição estratégica para quem treina e quer resultados visíveis." },
  { icon: Brain, title: "Ansiedade alimentar", description: "Ferramentas práticas para lidar com a compulsão e o comer emocional." },
  { icon: HeartPulse, title: "Saúde e bem-estar", description: "Melhore seus exames, disposição e qualidade de vida com alimentação inteligente." },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary mb-3 block">O que posso te ajudar</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Serviços</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-7 hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
