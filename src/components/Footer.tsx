import { Instagram, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/logo_1.jpg";

const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma consulta.";
const WHATSAPP_URL = `https://wa.me/5521988730072?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
          <img
            src={logoImg}
            alt="Logo Bruna Nutricionista"
            className="h-7 w-7 object-contain mix-blend-multiply"
          />
          <span>
            Bruna <span className="text-primary">Nutricionista</span>
          </span>
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/nutribrunaazeredo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:nutribrunaazeredo@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
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
          © {new Date().getFullYear()} Bruna Nutricionista. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
