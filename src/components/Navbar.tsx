import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/links";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Metodo" },
  { href: "#planos", label: "Planos" },
  { href: "#servicos", label: "Servicos" },
  { href: "#faq", label: "Conteudo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/88 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-foreground">
          <span className="font-display text-4xl font-medium leading-none text-primary">BA</span>
          <span className="flex flex-col leading-tight">
            <strong className="text-[13px] font-bold uppercase tracking-[0.34em]">Bruna Azeredo</strong>
            <small className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Nutricionista</small>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="primary-button min-h-11 px-5 text-xs">
            Agendar consulta
          </a>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-primary/15 text-primary lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-primary/10 bg-background lg:hidden"
          >
            <div className="container flex flex-col gap-4 py-4">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="primary-button w-full">
                Agendar consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
