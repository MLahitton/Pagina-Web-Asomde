import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  HeartPulse,
  MessageCircle,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { whatsappLink } from '../data/contact';
import { services } from '../data/services';

const rotationInterval = 6000;

export function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const activeServiceIndex = useMemo(() => {
    return services.findIndex((service) => service.id === activeServiceId);
  }, [activeServiceId]);

  const activeService =
    services.find((service) => service.id === activeServiceId) ?? services[0];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveServiceId((currentId) => {
        const currentIndex = services.findIndex((service) => service.id === currentId);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % services.length : 0;

        return services[nextIndex].id;
      });
    }, rotationInterval);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 sm:py-24">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                Servicios ASOMDE
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Atención en medicina general, acupuntura y terapias integrales.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
                En ASOMDE ofrecemos servicios orientados al cuidado, el bienestar y el
                acompañamiento integral de nuestros usuarios, integrando medicina general,
                acupuntura, terapias bioenergéticas y terapias alternativas especiales.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
                >
                  Explorar servicios
                  <ArrowRight size={18} />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <MessageCircle size={18} />
                  Solicitar orientación
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white bg-white p-5 shadow-2xl">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 to-emerald-50">
                <img
                  src="/images/brand/asomde-logo.webp"
                  alt="Logo Fundación ASOMDE"
                  className="h-full w-full object-contain p-12"
                  loading="eager"
                />

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                      <HeartPulse size={24} />
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">Atención integral</p>
                      <p className="text-sm text-slate-600">
                        Medicina, bienestar y terapias alternativas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="servicios" className="scroll-mt-28 py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Showcase interactivo"
            title="Explora nuestros servicios"
            description="Selecciona un servicio para conocer su descripción. Las imágenes actuales podrán reemplazarse cuando ASOMDE entregue fotografías oficiales."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="grid gap-3">
              {services.map((service, index) => {
                const isActive = service.id === activeService.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveServiceId(service.id)}
                    className={`group rounded-3xl border p-5 text-left transition ${
                      isActive
                        ? 'border-emerald-200 bg-emerald-50 shadow-lg shadow-emerald-900/5'
                        : 'border-slate-100 bg-white shadow-sm hover:border-emerald-100 hover:bg-emerald-50/40'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition ${
                          isActive
                            ? 'bg-emerald-700 text-white'
                            : 'bg-slate-50 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                        }`}
                      >
                        <span className="text-sm font-black">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-950">
                          {service.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <article className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.id}
                    src={activeService.image}
                    alt={activeService.alt}
                    className="h-full w-full object-contain p-12"
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.28 }}
                  />
                </AnimatePresence>

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#063767] shadow-sm backdrop-blur-md">
                  Servicio {activeServiceIndex + 1} de {services.length}
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                      Servicio seleccionado
                    </p>

                    <h2 className="text-3xl font-bold text-slate-950">
                      {activeService.name}
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                      {activeService.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {activeService.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                        >
                          <CheckCircle2
                            size={18}
                            className="shrink-0 text-emerald-700"
                          />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#063767] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-950"
                      >
                        Consultar este servicio
                        <ArrowRight size={17} />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Nuestro enfoque"
            title="Una atención cercana, ordenada y orientada al usuario"
            description="La página comunica los servicios de forma clara, visual y fácil de consultar, sin saturar al visitante."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: 'Orientación integral',
                description:
                  'Servicios presentados desde una mirada de cuidado, bienestar y acompañamiento.',
              },
              {
                icon: Sparkles,
                title: 'Experiencia clara',
                description:
                  'Información fácil de consultar, con una estructura visual limpia y ordenada.',
              },
              {
                icon: Clock,
                title: 'Contenido actualizable',
                description:
                  'Estructura lista para cambiar imágenes, textos y detalles cuando ASOMDE entregue información adicional.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>

                  <p className="mt-4 leading-8 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#063767] to-emerald-800 p-8 text-white shadow-2xl sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                  Servicios actuales
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  ASOMDE ofrece cuatro líneas principales de atención.
                </h2>

                <p className="mt-5 leading-8 text-blue-50/85">
                  Esta sección queda organizada con los servicios informados actualmente.
                  Más adelante podremos ajustar descripciones, imágenes o detalles de cada
                  servicio si ASOMDE entrega información complementaria.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <h3 className="text-xl font-bold">Servicios ASOMDE</h3>

                <div className="mt-5 grid gap-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
                    >
                      <CheckCircle2 className="shrink-0 text-orange-300" size={20} />
                      <span className="text-sm font-semibold text-blue-50">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}