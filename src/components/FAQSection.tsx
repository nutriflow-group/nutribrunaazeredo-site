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
    <section id="faq" className="section-pad bg-background">
      <div className="container grid gap-10 lg:grid-cols-[0.78fr_1.12fr] lg:items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow mb-5 block">Tire suas dúvidas</span>
          <h2 className="editorial-title max-w-md text-4xl md:text-6xl">Perguntas frequentes</h2>
          <p className="mt-6 max-w-sm text-base leading-8 text-muted-foreground">
            Antes da primeira consulta, é normal querer entender como funciona o cuidado, os retornos e o plano alimentar.
          </p>
          <div className="mt-8 max-w-sm rounded-lg bg-warm p-6">
            <p className="font-display text-2xl leading-tight text-primary">Ainda ficou alguma dúvida?</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Fale com a Bruna pelo WhatsApp e receba uma orientação inicial.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`} className="rounded-lg border border-accent/20 bg-card px-6 shadow-sm">
                <AccordionTrigger className="py-5 text-left text-base font-bold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
