import {
  ArrowRight,
  CalendarDays,
  Download,
  ExternalLink,
  FileClock,
  FileText,
  FolderOpen,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { legalDocumentGroups, legalInfoHighlights } from '../data/legalDocuments';

export function LegalInfoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 sm:py-24">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100/80 blur-3xl" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                Información Legal
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Documentos institucionales organizados para consulta pública.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
                Consulta estados financieros y documentos institucionales de ASOMDE,
                organizados por categoría y año. Los archivos PDF se integrarán cuando
                sean entregados oficialmente.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#documentos-legales"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
                >
                  Ver documentos
                  <ArrowRight size={18} />
                </a>

                <a
                  href="https://www.supersalud.gov.co"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <ShieldCheck size={18} />
                  Supersalud
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white bg-white p-6 shadow-2xl">
              <div className="grid gap-4">
                {legalInfoHighlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6"
                  >
                    <p className="text-3xl font-black text-[#063767]">
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

      <section id="documentos-legales" className="scroll-mt-28 py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Biblioteca documental"
            title="Consulta por categoría y vigencia"
            description="Cada bloque está preparado para mostrar PDFs por año sin cargar documentos pesados al iniciar la página."
            align="center"
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {legalDocumentGroups.map((group) => (
              <article
                key={group.id}
                id={group.id}
                className="scroll-mt-28 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="bg-gradient-to-br from-[#063767] to-emerald-800 p-7 text-white sm:p-8">
                  <div className="mb-8 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-orange-300 backdrop-blur-md">
                      <FolderOpen size={28} />
                    </div>

                    <div>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                        {group.subtitle}
                      </p>
                      <h2 className="text-3xl font-bold">{group.title}</h2>
                      <p className="mt-4 leading-8 text-blue-50/85">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                    <div className="flex items-start gap-3">
                      <Info className="mt-1 shrink-0 text-orange-300" size={20} />
                      <p className="text-sm leading-7 text-blue-50/90">{group.note}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">
                        Documentos por año
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Ruta base: {group.folderPath}
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 sm:flex">
                      <CalendarDays size={24} />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {group.documents.map((document) => {
                      const documentUrl =
                        document.status === 'available' ? document.url : null;

                      if (documentUrl) {
                        return (
                          <a
                            key={document.year}
                            href={documentUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 transition hover:border-emerald-200 hover:bg-emerald-50"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                                <FileText size={22} />
                              </div>

                              <div>
                                <p className="font-bold text-slate-950">
                                  {document.year}
                                </p>
                                <p className="text-sm text-slate-500">
                                  {document.label}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-bold text-white">
                              <Download size={16} />
                              Ver PDF
                            </div>
                          </a>
                        );
                      }

                      return (
                        <div
                          key={document.year}
                          className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
                              <FileClock size={22} />
                            </div>

                            <div>
                              <p className="font-bold text-slate-950">{document.year}</p>
                              <p className="text-sm text-slate-500">{document.label}</p>
                            </div>
                          </div>

                          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-500 ring-1 ring-slate-200">
                            Pendiente
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                  Cómo se actualizará
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Preparado para cargar PDFs oficiales.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Cuando ASOMDE entregue los documentos, solo será necesario ubicarlos en
                  la carpeta correspondiente y actualizar la URL en el archivo de datos.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    step: '01',
                    title: 'Guardar el PDF',
                    description:
                      'Ubicar el documento en public/documents/estados-financieros o public/documents/por-definir.',
                  },
                  {
                    step: '02',
                    title: 'Actualizar la URL',
                    description:
                      'Cambiar el valor url en src/data/legalDocuments.ts y marcar el estado como available.',
                  },
                  {
                    step: '03',
                    title: 'Publicar',
                    description:
                      'La página mostrará automáticamente el botón Ver PDF para el año correspondiente.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#063767] text-sm font-black text-white">
                        {item.step}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#063767] to-emerald-800 p-8 text-white shadow-2xl sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                  Vigilancia y transparencia
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Información institucional disponible para usuarios y entes de control.
                </h2>

                <p className="mt-5 leading-8 text-blue-50/85">
                  El sitio mantendrá visible el enlace de “Vigilado Supersalud” en el pie
                  de página, con acceso directo al sitio oficial de la Superintendencia
                  Nacional de Salud.
                </p>
              </div>

              <a
                href="https://www.supersalud.gov.co"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-[2rem] border border-white/15 bg-white/10 p-6 text-left font-bold text-white transition hover:bg-white/15"
              >
                <ShieldCheck className="shrink-0 text-orange-300" size={34} />
                <span>
                  Vigilado Supersalud
                  <span className="mt-1 flex items-center gap-2 text-sm font-semibold text-blue-50/80">
                    Ir al sitio oficial <ExternalLink size={15} />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}