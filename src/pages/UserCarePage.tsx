import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  HandHeart,
  Lock,
  Mail,
  MessageCircle,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { contactInfo, whatsappLink } from '../data/contact';
import { userCareHighlights, userCareSections } from '../data/userCare';

type UserCareIcon = {
  id: string;
  icon: LucideIcon;
};

const sectionIcons: UserCareIcon[] = [
  {
    id: 'derechos-deberes',
    icon: Scale,
  },
  {
    id: 'pqrs',
    icon: ClipboardList,
  },
  {
    id: 'alianza-usuarios',
    icon: HandHeart,
  },
  {
    id: 'privacidad',
    icon: Lock,
  },
  {
    id: 'tratamiento-datos',
    icon: FileText,
  },
  {
    id: 'seguridad-paciente',
    icon: ShieldCheck,
  },
  {
    id: 'indicadores',
    icon: BarChart3,
  },
];

function getSectionIcon(sectionId: string) {
  return sectionIcons.find((item) => item.id === sectionId)?.icon ?? FileText;
}

export function UserCarePage() {
  const pqrsSection = userCareSections.find((section) => section.id === 'pqrs');

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 sm:py-24">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100/80 blur-3xl" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                Atención al usuario
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Información clara, accesible y organizada para nuestros usuarios.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
                En esta sección encontrarás derechos y deberes, canal PQRS, alianza de
                usuarios, políticas institucionales, tratamiento de datos, seguridad del
                paciente e indicadores.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pqrs"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
                >
                  Ir al canal PQRS
                  <ArrowRight size={18} />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <MessageCircle size={18} />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white bg-white p-6 shadow-2xl">
              <div className="grid gap-4">
                {userCareHighlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6"
                  >
                    <p className="text-4xl font-black text-[#063767]">
                      {highlight.value}
                    </p>
                    <h2 className="mt-3 text-lg font-bold text-slate-950">
                      {highlight.label}
                    </h2>
                    <p className="mt-2 leading-7 text-slate-600">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Consulta rápida"
            title="Temas de atención al usuario"
            description="Cada bloque está preparado para mostrar información resumida y enlazar documentos oficiales cuando estén disponibles."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {userCareSections.map((section) => {
              const Icon = getSectionIcon(section.id);

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h2 className="text-lg font-bold text-slate-950">{section.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {section.subtitle}
                  </p>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {pqrsSection ? (
        <section id="pqrs" className="scroll-mt-28 bg-[#063767] py-20 text-white sm:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                  Canal destacado
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Canal PQRS
                </h2>

                <p className="mt-5 leading-8 text-blue-50/85">
                  Este espacio quedará preparado para orientar al usuario sobre cómo
                  presentar peticiones, quejas, reclamos, sugerencias o solicitudes ante
                  la Fundación ASOMDE.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:bg-orange-400"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>

                  <a
                    href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
                      'Solicitud PQRS - Fundación ASOMDE',
                    )}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#063767] shadow-lg shadow-blue-950/20 transition hover:bg-blue-50"
                  >
                    <Mail size={18} />
                    Enviar correo
                  </a>
                </div>
              </div>

              <div className="rounded-[2.2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-8">
                <h3 className="text-2xl font-bold">¿Qué puedes radicar?</h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {pqrsSection.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-200">
                        <CheckCircle2 size={21} />
                      </div>
                      <p className="text-sm leading-7 text-blue-50/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Información normativa"
            title="Bloques institucionales"
            description="Esta estructura evita páginas demasiado cargadas y permite que el usuario encuentre rápidamente cada tema."
          />

          <div className="mt-12 grid gap-8">
            {userCareSections
              .filter((section) => section.id !== 'pqrs')
              .map((section, index) => {
                const Icon = getSectionIcon(section.id);
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm"
                  >
                    <div
                      className={`grid gap-0 lg:grid-cols-2 ${
                        isEven ? '' : 'lg:[&>div:first-child]:order-2'
                      }`}
                    >
                      <div className="p-7 sm:p-9 lg:p-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                          <Icon size={28} />
                        </div>

                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                          {section.subtitle}
                        </p>

                        <h2 className="text-3xl font-bold text-slate-950">
                          {section.title}
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                          {section.description}
                        </p>

                        {section.document ? (
                          <div className="mt-7">
                            {section.document.status === 'available' &&
                            section.document.documentUrl ? (
                              <a
                                href={section.document.documentUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
                              >
                                <Download size={17} />
                                Descargar PDF
                              </a>
                            ) : (
                              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-bold text-slate-500">
                                <FileText size={17} />
                                PDF pendiente
                              </span>
                            )}
                          </div>
                        ) : null}
                      </div>

                      <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-7 sm:p-9 lg:p-10">
                        <h3 className="text-xl font-bold text-slate-950">
                          Información incluida
                        </h3>

                        <div className="mt-6 grid gap-3">
                          {section.items.map((item) => (
                            <div
                              key={item}
                              className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm"
                            >
                              <CheckCircle2
                                className="mt-1 shrink-0 text-emerald-700"
                                size={20}
                              />
                              <p className="leading-7 text-slate-600">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </Container>
      </section>

      <section id="indicadores" className="scroll-mt-28 py-20 sm:py-24">
        <Container>
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#063767] to-emerald-800 p-8 text-white shadow-2xl sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                  Indicadores institucionales
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Espacio preparado para información pública.
                </h2>

                <p className="mt-5 leading-8 text-blue-50/85">
                  Cuando ASOMDE defina los indicadores oficiales, esta sección podrá
                  mostrar cifras, documentos o reportes descargables sin necesidad de
                  modificar la estructura visual de la página.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    value: '01',
                    label: 'Atención',
                  },
                  {
                    value: '02',
                    label: 'Seguimiento',
                  },
                  {
                    value: '03',
                    label: 'Reportes',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md"
                  >
                    <p className="text-4xl font-black text-orange-300">{item.value}</p>
                    <p className="mt-3 font-bold">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-blue-50/80">
                      Pendiente de información oficial.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}