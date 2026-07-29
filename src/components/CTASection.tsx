import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/links";

export default function CTASection() {
  return (
    <section className="section-pad">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 rounded-[2rem] bg-primary p-8 text-primary-foreground md:grid-cols-[1.1fr_0.9fr] md:items-end md:p-14"
        >
          <div>
            <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">Próximo passo</span>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
              Pronta para começar sua transformação?
            </h2>
          </div>
          <div>
            <p className="mb-7 text-base leading-8 text-white/76">
              Dê o primeiro passo rumo a uma vida mais leve, saudável e em paz com a comida. Agende sua consulta agora.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="primary-button bg-primary-foreground text-primary hover:bg-white">
                <Calendar size={18} />
                Agendar consulta
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="secondary-button border-white/30 text-primary-foreground hover:bg-white/10">
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
