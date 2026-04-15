import { motion } from "framer-motion";
import { Heart, Users, Sparkles } from "lucide-react";
import aboutImg from "@/assets/DSC_1018.jpg";

const highlights = [
  { icon: Heart, text: "Atendimento humanizado e acolhedor" },
  { icon: Users, text: "Mais de 500 pacientes atendidos" },
  { icon: Sparkles, text: "Planos 100% personalizados" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[26rem]">
              <div className="absolute -inset-3 bg-accent rounded-[1.75rem] -rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutImg}
                  alt="Bruna em consulta"
                  className="w-full h-[32rem] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary mb-3 block">Conheça a Bruna</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nutrição com ciência, empatia e resultado
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sou a Bruna, nutricionista clínica apaixonada por ajudar pessoas a
              construírem uma relação saudável com a comida. Acredito que comer bem
              não precisa ser complicado, precisa fazer sentido pra sua vida.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Meu método é baseado em escuta, personalização e estratégias práticas.
              Nada de listas proibidas, culpa ou sofrimento. Aqui, você é acolhida
              do jeito que é.
            </p>

            <div className="space-y-4">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <h.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{h.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
