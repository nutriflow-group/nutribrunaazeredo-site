import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";

const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma consulta.";
const WHATSAPP_URL = `https://wa.me/5521988730072?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronta para começar sua transformação?
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Dê o primeiro passo rumo a uma vida mais leve, saudável e em paz com
            a comida. Agende sua consulta agora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground text-primary px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Calendar size={18} />
              Agendar consulta
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
