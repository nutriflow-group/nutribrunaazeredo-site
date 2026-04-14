import { Instagram, Mail, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521988730072?text=Ola!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold text-foreground">
          Bruna <span className="text-primary">Nutrição</span>
        </p>
        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="mailto:contato@brunanutri.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
            <Phone size={20} />
          </a>
        </div>
        <a href="tel:+5521988730072" className="text-sm text-muted-foreground hover:text-primary transition-colors" aria-label="Telefone de atendimento da Bruna">
          021 98873-0072
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bruna Nutrição. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
