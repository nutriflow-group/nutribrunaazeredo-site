import { motion } from "framer-motion";
import { Heart, Leaf, Star, TrendingUp, UserRound } from "lucide-react";

const pains = [
  {
    icon: UserRound,
    title: "Atendimento personalizado",
    description: "Cada plano é único, como você.",
  },
  {
    icon: Leaf,
    title: "Abordagem integrativa",
    description: "Corpo, mente e emoções em equilíbrio.",
  },
  {
    icon: TrendingUp,
    title: "Método exclusivo",
    description: "Mais que dietas, um estilo de vida.",
  },
  {
    icon: Heart,
    title: "Acompanhamento contínuo",
    description: "Você nunca estará sozinha.",
  },
  {
    icon: Star,
    title: "Resultados que transformam",
    description: "Saúde, autoestima e liberdade alimentar.",
  },
];

export default function PainSection() {
  return (
    <section className="relative z-20 -mt-32 pb-10 text-primary-foreground">
      <div className="container">
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-primary shadow-sm md:grid-cols-5">
          {pains.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border-white/10 p-4 text-center md:border-r md:last:border-r-0"
            >
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full text-[#D9C9AE]">
                <pain.icon size={27} strokeWidth={1.6} />
              </div>
              <h3 className="mb-2 font-body text-[13px] font-bold uppercase leading-5 tracking-wide">{pain.title}</h3>
              <p className="text-xs leading-5 text-white/78">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
