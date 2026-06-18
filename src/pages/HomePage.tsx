import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  HeartHandshake,
  HeartPulse,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { contactInfo, whatsappLink } from '../data/contact';
import { services } from '../data/services';

type QuickAccessItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
};

const quickAccess: QuickAccessItem[] = [
  {
    title: 'Derechos y deberes',
    description: 'Información clara sobre derechos, responsabilidades y orientación al usuario.',
    icon: Scale,
    path: '/atencion-usuario#derechos-deberes',
  },
  {
    title: 'Canal PQRS',
    description: 'Peticiones, quejas, reclamos, sugerencias y solicitudes institucionales.',
    icon: FileText,
    path: '/atencion-usuario#pqrs',
  },
  {
    title: 'Alianza de usuarios',
    description: 'Participación y acompañamiento para fortalecer la comunicación institucional.',
    icon: Users,
    path: '/atencion-usuario#alianza-usuarios',
  },
];

const institutionalHighlights = [
  {
    value: '30+',
    label: 'años de trayectoria',
    description: 'Acompañamiento integral desde una visión humana y complementaria.',
  },
  {
    value: '2',
    label: 'sedes de atención',
    description: 'Presencia institucional en Bucaramanga y Barrancabermeja.',
  },
  {
    value: '100%',
    label: 'sitio informativo',
    description: 'Página frontend sin backend, preparada para información pública.',
  },
];

const trustItems = [
  'Medicina bioenergética y terapias complementarias.',
  'Información normativa centralizada.',
  'Canales de atención visibles y accesibles.',
  'Documentos institucionales preparados para consulta.',
];

export function HomePage() {
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100/80 blur-3xl" />

        <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              <HeartPulse size={17} />
              Fundación ASOMDE · Bienestar integral
            </div>

            <h1 className="max-w-4xl text-[2.45rem] font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Medicina bioenergética y terapias complementarias con enfoque humano.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
              En la Fundación ASOMDE acompañamos procesos de bienestar integral mediante
              servicios complementarios, atención cercana e información institucional
              clara para nuestros usuarios.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
              >
                Conocer servicios
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/nosotros"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50"
              >
                Sobre ASOMDE
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-700" size={20} />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 hidden rounded-3xl bg-orange-500 px-5 py-4 text-sm font-bold text-white shadow-xl lg:block">
              Más de 30 años
            </div>

            <div className="overflow-hidden rounded-[2.5rem] border border-white bg-white p-5 shadow-2xl">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 to-emerald-50">
                <img
                  src="/images/brand/asomde-logo.webp"
                  alt="Logo Fundación ASOMDE"
                  className="h-full w-full object-contain p-12"
                  loading="eager"
                />

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063767] text-white">
                      <HeartHandshake size={24} />
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">Atención humanizada</p>
                      <p className="text-sm text-slate-600">
                        Bienestar, confianza y orientación
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-6 hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">Servicios ASOMDE</p>
                  <p className="text-sm text-slate-500">Terapias complementarias</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {institutionalHighlights.map((item) => (
              <article
                key={item.label}
                className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-4xl font-black text-[#063767]">{item.value}</p>
                <h2 className="mt-3 text-xl font-bold text-slate-950">{item.label}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Nuestra esencia"
                title="Una fundación orientada al bienestar integral"
                description="ASOMDE combina trayectoria, atención humanizada y servicios complementarios en un entorno institucional moderno, confiable y cercano."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/nosotros"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#063767] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-950"
                >
                  Conocer historia
                  <ArrowRight size={17} />
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-emerald-50"
                >
                  <MessageCircle size={17} />
                  Contactar
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Trayectoria',
                  text: 'Más de tres décadas acompañando procesos de bienestar desde Bucaramanga.',
                  icon: Sparkles,
                },
                {
                  title: 'Atención humana',
                  text: 'Un enfoque cercano, respetuoso y orientado a las necesidades de cada usuario.',
                  icon: HeartHandshake,
                },
                {
                  title: 'Enfoque integral',
                  text: 'Servicios complementarios pensados para apoyar el equilibrio y el bienestar.',
                  icon: HeartPulse,
                },
                {
                  title: 'Información clara',
                  text: 'Canales, documentos y rutas institucionales preparados para consulta pública.',
                  icon: ShieldCheck,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="inicio-servicios" className="scroll-mt-28 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Servicios destacados"
              title="Acompañamiento complementario para tu bienestar"
              description="Estos servicios son provisionales y serán validados con ASOMDE antes de la publicación final."
            />

            <Link
              to="/servicios"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
            >
              Ver todos
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredServices.map((service) => (
              <article
                key={service.id}
                className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-contain p-10 transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-950">{service.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.shortDescription}
                  </p>

                  <Link
                    to="/servicios"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:text-emerald-900"
                  >
                    Ver detalle
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-[#063767] to-emerald-800 py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                Atención al usuario
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Información normativa y canales institucionales en un solo lugar.
              </h2>

              <p className="mt-5 leading-8 text-blue-50/85">
                La página centraliza derechos y deberes, PQRS, alianza de usuarios,
                política de privacidad, tratamiento de datos, seguridad del paciente e
                indicadores.
              </p>

              <Link
                to="/atencion-usuario"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:bg-orange-400"
              >
                Ir a Atención al Usuario
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {quickAccess.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="group rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-orange-300 transition group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-blue-50/85">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#063767]">
                <FileText size={28} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Información Legal
              </p>

              <h2 className="text-3xl font-bold text-slate-950">
                Documentos institucionales por año
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Espacio preparado para estados financieros y documentos institucionales
                adicionales, organizados por categoría y vigencia.
              </p>

              <Link
                to="/informacion-legal"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#063767] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-950"
              >
                Ver documentos
                <ArrowRight size={17} />
              </Link>
            </article>

            <article className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-8 shadow-sm sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <ShieldCheck size={28} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Vigilancia
              </p>

              <h2 className="text-3xl font-bold text-slate-950">
                Vigilado por la Supersalud
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                El sitio mantiene visible el enlace hacia la Superintendencia Nacional de
                Salud en el footer institucional, como parte de los requerimientos
                normativos.
              </p>

              <a
                href="https://www.supersalud.gov.co"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
              >
                Ir a Supersalud
                <ArrowRight size={17} />
              </a>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                  Sedes
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Presencia institucional para acompañar a nuestros usuarios.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  ASOMDE cuenta con sedes registradas en Bucaramanga y Barrancabermeja.
                  Estos datos deben ser validados antes de la publicación final.
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.locations.map((location) => (
                  <article
                    key={location.name}
                    className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                        {location.city === 'Bucaramanga' ? (
                          <MapPin size={24} />
                        ) : (
                          <Building2 size={24} />
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-950">
                          {location.name}
                        </h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}