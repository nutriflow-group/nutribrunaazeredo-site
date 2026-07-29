import { motion } from "framer-motion";
import { CalendarDays, HeartHandshake, MessageSquare, Smartphone } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/links";

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="pb-10">
      <div className="container grid gap-5 lg:grid-cols-2">
        <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative min-h-[22rem] overflow-hidden rounded-2xl bg-card p-8">
          <span className="eyebrow mb-5 block">Primeira consulta</span>
          <h2 className="editorial-title mb-5 max-w-sm text-3xl md:text-4xl">Comece sua jornada com uma consulta acolhedora.</h2>
          <p className="mb-5 max-w-sm text-base leading-7 text-foreground/78">Converse com a Bruna, entenda suas necessidades e descubra o melhor caminho para cuidar da sua alimentação com leveza.</p>
          <div className="mb-6 hidden max-w-xl items-center gap-5 rounded-lg bg-background/75 px-5 py-4 shadow-sm md:flex">
            <p className="w-32 shrink-0 font-display text-xl leading-tight text-primary">Sua primeira consulta</p>
            <div className="grid flex-1 grid-cols-3 gap-3">
              {["Escuta da rotina", "Objetivos reais", "Plano sem radicalismos"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-semibold leading-tight text-muted-foreground">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="primary-button">
            <CalendarDays size={17} />
            Agendar consulta
          </a>
          <p className="mt-5 text-xs font-semibold text-muted-foreground">Escuta ativa · Plano individual · Sem radicalismos</p>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="relative min-h-[22rem] overflow-hidden rounded-2xl bg-card p-8">
          <span className="eyebrow mb-5 block">Acompanhamento nutricional</span>
          <h2 className="editorial-title mb-5 max-w-sm text-3xl md:text-4xl">Acompanhamento pensado para a sua rotina.</h2>
          <p className="mb-7 max-w-sm text-base leading-7 text-foreground/78">Um plano construído com escuta, estratégia e acesso ao app mobile NuDiet para acompanhar sua evolução.</p>
          <div className="mb-7 grid max-w-md grid-cols-4 gap-4 text-center text-xs text-muted-foreground">
            {[
              { icon: MessageSquare, label: "Consulta individual" },
              { icon: CalendarDays, label: "Plano personalizado" },
              { icon: HeartHandshake, label: "Acompanhamento contínuo" },
              { icon: Smartphone, label: "App mobile NuDiet" },
            ].map((item) => (
              <span key={item.label} className="grid gap-2 justify-items-center">
                <item.icon size={22} className="text-primary" />
                {item.label}
              </span>
            ))}
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="primary-button">Conhecer o acompanhamento</a>
        </motion.article>
      </div>
    </section>
  );
}
