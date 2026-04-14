import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O plano alimentar é restritivo?",
    a: "Não! Trabalho com flexibilidade e equilíbrio. Nada de listas de alimentos proibidos. Você vai aprender a comer de tudo com consciência.",
  },
  {
    q: "Você atende online?",
    a: "Sim! Atendo tanto presencialmente quanto por videochamada, com a mesma qualidade e cuidado.",
  },
  {
    q: "Como funciona o acompanhamento?",
    a: "Após a primeira consulta, fazemos retornos periódicos para ajustar o plano, tirar dúvidas e acompanhar sua evolução. Você também tem suporte entre as consultas.",
  },
  {
    q: "Preciso fazer exames antes?",
    a: "Não é obrigatório, mas se você tiver exames recentes, pode trazê-los. Caso necessário, posso solicitar novos exames.",
  },
  {
    q: "Em quanto tempo vou ver resultado?",
    a: "Depende de cada pessoa e dos seus objetivos. Mas mudanças na disposição e bem-estar costumam ser sentidas já nas primeiras semanas.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-sage">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary mb-3 block">Tire suas dúvidas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
