import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import brunaImg from "@/assets/bruna-hero.jpg";

const WHATSAPP_URL = "https://wa.me/5521988730072?text=OlÃ¡! Gostaria de agendar uma consulta.";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-medium text-primary bg-accent px-4 py-1.5 rounded-full mb-6">
              Nutricionista ClÃ­nica
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Transforme sua relaÃ§Ã£o com a{" "}
              <span className="text-primary italic">comida</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Chega de dietas restritivas que nÃ£o funcionam. Descubra um caminho
              leve, personalizado e sustentÃ¡vel para alcanÃ§ar seus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Calendar size={18} />
                Agendar consulta
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary px-6 py-3.5 text-sm font-semibold hover:bg-accent transition-colors"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 md:w-80 lg:w-96">
              <div className="absolute -inset-4 bg-accent rounded-[2rem] -rotate-3" />
              <img
                src={brunaImg}
                alt="Bruna - Nutricionista"
                className="relative rounded-[1.5rem] w-full object-cover shadow-lg"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
