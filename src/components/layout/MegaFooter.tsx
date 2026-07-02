import type { ReactNode } from 'react';
import {
  Building2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo, whatsappLink } from '../../data/contact';
import { navigationItems } from '../../data/navigation';
import { Container } from '../ui/Container';

const normativeLinks = [
  {
    label: 'Derechos y deberes',
    path: '/atencion-usuario#derechos-deberes',
  },
  {
    label: 'Canal PQRS',
    path: '/atencion-usuario#pqrs',
  },
  {
    label: 'Alianza de usuarios',
    path: '/atencion-usuario#alianza-usuarios',
  },
  {
    label: 'Política de privacidad',
    path: '/atencion-usuario#privacidad',
  },
  {
    label: 'Tratamiento de datos',
    path: '/atencion-usuario#tratamiento-datos',
  },
  {
    label: 'Información Legal',
    path: '/informacion-legal',
  },
];

export function MegaFooter() {
  const mainLocation = contactInfo.locations[0];

  return (
    <footer className="relative overflow-hidden bg-[#063767] text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-400 blur-3xl" />
      </div>

      <Container className="relative py-16 sm:py-20">
        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                Estamos para orientarte
              </p>

              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                ¿Tienes preguntas? Nuestro equipo está listo para orientarte.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50/90">
                Comunícate con la Fundación ASOMDE para recibir información sobre
                servicios, atención al usuario, sedes y documentos institucionales.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-400"
              >
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#063767] shadow-lg shadow-blue-950/20 transition hover:bg-blue-50"
              >
                <Mail size={18} />
                Enviar correo
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-[360px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md lg:h-full">
            <iframe
              title="Mapa de ubicación de Fundación ASOMDE"
              src={mainLocation.mapEmbedUrl}
              className="h-[360px] w-full border-0 lg:h-full lg:min-h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="grid gap-4">
            <InfoCard
              icon={<MapPin size={20} />}
              title="Dirección principal"
              text={mainLocation.address}
            />

            <InfoCard
              icon={<Phone size={20} />}
              title="Teléfonos"
              text={contactInfo.phones.join(' · ')}
            />

            <InfoCard
              icon={<MessageCircle size={20} />}
              title="WhatsApp"
              text={contactInfo.whatsappDisplay}
            />

            <InfoCard icon={<Mail size={20} />} title="Correo" text={contactInfo.email} />

            <InfoCard icon={<Clock size={20} />} title="Horario" text={contactInfo.schedule} />
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white">
                <img
                  src="/images/brand/asomde-logo.webp"
                  alt="Logo Fundación ASOMDE"
                  className="h-full w-full object-contain p-1.5"
                  loading="lazy"
                />
              </div>

              <div>
                <p className="font-bold">Fundación ASOMDE</p>
                <p className="text-sm text-blue-100">Salud y bienestar integral</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-blue-50/85">
              Institución orientada al cuidado y bienestar integral mediante servicios de
              medicina general, acupuntura, terapias bioenergéticas y terapias
              alternativas especiales.
            </p>
          </div>

          <FooterColumn title="Menú">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-blue-50/85 transition hover:text-orange-300"
              >
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Normativo">
            {normativeLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-blue-50/85 transition hover:text-orange-300"
              >
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
              Sedes
            </h3>

            <div className="grid gap-3">
              {contactInfo.locations.map((location) => (
                <div key={location.name} className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Building2 size={17} />
                    {location.name}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-blue-50/80">
                    {location.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
          <a
            href="https://www.supersalud.gov.co"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            <ShieldCheck size={20} className="text-emerald-300" />
            Vigilado Supersalud
            <ExternalLink size={16} />
          </a>

          <p className="text-sm text-blue-50/75">
            © {new Date().getFullYear()} Fundación ASOMDE. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function InfoCard({ icon, title, text }: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
      <div className="mb-3 flex items-center gap-3 text-orange-300">
        {icon}
        <h3 className="text-sm font-bold uppercase tracking-[0.18em]">{title}</h3>
      </div>

      <p className="text-sm leading-7 text-blue-50/90">{text}</p>
    </div>
  );
}

type FooterColumnProps = {
  title: string;
  children: ReactNode;
};

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
        {title}
      </h3>

      <div className="grid gap-3">{children}</div>
    </div>
  );
}