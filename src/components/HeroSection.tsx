import { motion } from "framer-motion";
import { Calendar, CirclePlay } from "lucide-react";
import heroBackground from "@/assets/backgroud_bruna.png";
import brunaImg from "@/assets/bruna-3.png";
import avatarOne from "@/assets/Bruna.jpg";
import avatarTwo from "@/assets/bruna-hero.jpg";
import avatarThree from "@/assets/DSC_1018.jpg";
import avatarFour from "@/assets/instagram-post-2.jpg";
import avatarFive from "@/assets/instagram-post-5.jpg";
import { WHATSAPP_URL } from "@/lib/links";

const heroAvatars = [avatarOne, avatarTwo, avatarThree, avatarFour, avatarFive];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-[690px] overflow-hidden pt-[72px]">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="container relative z-10">
        <div className="grid min-h-[590px] min-w-0 items-center gap-10 pb-28 pt-4 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 min-w-0 w-full max-w-[41rem]"
          >
            <span className="mb-7 inline-flex rounded-full bg-surface px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Nutrição que transforma
            </span>
            <h1 className="editorial-title mb-5 max-w-full break-words text-[3.1rem] md:text-[3.65rem] lg:text-[3.8rem]">
              Você não precisa de <span className="block italic text-primary">mais uma dieta.</span>
            </h1>
            <p className="mb-7 max-w-[29rem] text-base font-medium leading-8 text-foreground/76">
              Você precisa de um método que respeita sua individualidade e te ensina a ter uma relação leve e saudável com a comida.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="primary-button w-full sm:w-auto">
                <Calendar size={18} />
                Quero começar minha transformação
              </a>
              <a href="#sobre" className="inline-flex min-h-[52px] items-center gap-3 text-sm font-bold uppercase tracking-wide text-foreground">
                <CirclePlay size={34} className="text-primary" />
                Assistir vídeo
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3 text-sm font-medium text-foreground/74">
              <div className="flex -space-x-2">
                {heroAvatars.map((avatar, index) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt=""
                    aria-hidden="true"
                    className="h-9 w-9 rounded-full border-2 border-background bg-sage object-cover"
                    style={{ objectPosition: index < 3 ? "center top" : "center" }}
                  />
                ))}
              </div>
              <p>
                <strong className="text-foreground">Pacientes aprendendo a comer com leveza</strong>
                <br />
                com acompanhamento individualizado
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[37rem]">
              <img
                src={brunaImg}
                alt="Bruna - Nutricionista"
                className="relative z-10 ml-auto h-[31rem] w-full object-contain object-bottom md:h-[32.5rem] lg:h-[34.5rem]"
                loading="eager"
              />
              <div className="absolute bottom-16 right-4 z-20 rounded-2xl bg-primary/72 px-4 py-3 text-xs font-semibold leading-5 text-primary-foreground backdrop-blur">
                Bruna Azeredo<br />Nutricionista Clínica<br />CRN 13101113
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
