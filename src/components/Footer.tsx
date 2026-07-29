import { Instagram, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/logo_1.jpg";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-card py-12 text-foreground">
      <div className="container grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-center">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Logo Bruna Nutricionista" className="h-10 w-10 rounded-full object-contain mix-blend-multiply" />
          <div className="flex flex-col leading-tight">
            <strong className="font-display text-xl font-medium">Bruna Azeredo</strong>
            <small className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Nutricionista clinica</small>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary/70 transition-colors hover:text-primary" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="mailto:nutribrunaazeredo@gmail.com" className="text-primary/70 transition-colors hover:text-primary" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary/70 transition-colors hover:text-primary" aria-label="WhatsApp">
            <Phone size={20} />
          </a>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground md:text-right">
          <a href="tel:+5521988730072" className="block transition-colors hover:text-primary">
            021 98873-0072
          </a>
          <p>© {new Date().getFullYear()} Bruna Nutricionista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
