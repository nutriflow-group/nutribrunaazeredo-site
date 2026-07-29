import { motion } from "framer-motion";
import { CalendarDays, Globe2, Heart, Play, UsersRound } from "lucide-react";
import aboutBackground from "@/assets/Bcckground_2.png";
import brunaAbout from "@/assets/bruna_4.png";

const stats = [
  { icon: CalendarDays, value: "Autonomia", label: "para escolhas no dia a dia" },
  { icon: UsersRound, value: "Qualidade de vida", label: "com melhora real na rotina" },
  { icon: Heart, value: "Leveza", label: "na relação com a comida" },
  { icon: Globe2, value: "Presença online", label: "todos os dias" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative min-h-[640px] scroll-mt-[72px] overflow-hidden py-12 lg:py-14">
      <img
        src={aboutBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="container relative z-10">
        <div className="grid min-h-[540px] items-center gap-8 lg:grid-cols-[0.82fr_0.9fr_0.78fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[27rem]"
          >
            <span className="eyebrow mb-4 block">Sobre mim</span>
            <h2 className="editorial-title mb-5 text-[2.7rem] md:text-[3.45rem] lg:text-[3.55rem]">
              Nutrição vai muito <span className="italic text-primary">além</span> de números e calorias.
            </h2>
            <div className="mb-6 flex items-center gap-3 text-accent">
              <span className="h-px w-20 bg-current" />
              <span className="text-xl">⌁</span>
              <span className="h-px w-20 bg-current" />
            </div>
            <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
              <p>Acredito em uma nutrição que transforma de dentro para fora, sem radicalismos, sem culpabilizações e sem dietas restritivas.</p>
              <p>Meu propósito é te mostrar que é possível ter resultados sustentáveis com leveza, equilíbrio e prazer.</p>
            </div>
            <a href="#como-funciona" className="secondary-button mt-7 rounded-md border-accent/70 px-8 text-primary">
              Conhecer minha história
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="relative mx-auto flex min-h-[540px] w-full max-w-[25rem] items-end justify-center"
          >
            <img
              src={brunaAbout}
              alt="Bruna Azeredo"
              className="relative z-10 h-[31rem] w-full object-contain object-bottom md:h-[35.5rem] lg:h-[36rem]"
              loading="lazy"
            />
            <a href="#como-funciona" className="absolute bottom-8 left-1/2 z-20 flex w-[82%] -translate-x-1/2 items-center gap-4 rounded-xl bg-primary/82 px-5 py-4 text-primary-foreground backdrop-blur">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/35">
                <Play size={17} fill="currentColor" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wide">
                Conheça meu método
                <small className="block text-xs font-normal tracking-normal text-white/78">Assistir agora</small>
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="grid gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.value} className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent/35 bg-background/55 text-primary shadow-sm">
                  <stat.icon size={22} />
                </span>
                <span className="h-10 w-px bg-accent/35" />
                <span>
                  <strong className="block font-display text-[1.55rem] font-medium leading-tight text-foreground">{stat.value}</strong>
                  <small className="text-[0.95rem] text-muted-foreground">{stat.label}</small>
                </span>
              </div>
            ))}
            <p className="mt-3 max-w-sm font-display text-[1.35rem] italic leading-tight text-accent">
              Cuidado que acolhe, nutrição que transforma. ♡
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
