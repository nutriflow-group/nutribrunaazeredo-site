import { MessageCircle } from "lucide-react";

const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma consulta.";
const WHATSAPP_URL = `https://wa.me/5521988730072?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform animate-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
