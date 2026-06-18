import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../data/contact';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a Fundación ASOMDE por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white shadow-2xl shadow-emerald-950/30 transition hover:-translate-y-1 hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle size={24} className="sm:h-7 sm:w-7" />
    </a>
  );
}