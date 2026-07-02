import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Eye,
  HeartHandshake,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Target,
  UsersRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { aboutStats, aboutValues, institutionalPillars, timelineItems } from '../data/about';
import { whatsappLink } from '../data/contact';

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 sm:py-24">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100/80 blur-3xl" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                Nosotros
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Una fundación con trayectoria, servicio y enfoque integral.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
                ASOMDE acompaña a la comunidad mediante servicios de medicina general,
                acupuntura, terapias bioenergéticas y terapias alternativas especiales,
                promoviendo una atención humana, cercana y orientada al bienestar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#historia"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
                >
                  Conocer historia
                  <ArrowRight size={18} />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <MessageCircle size={18} />
                  Contactar ASOMDE
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white bg-white p-5 shadow-2xl">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-50 to-blue-50">
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
                      <p className="font-bold text-slate-950">Más de 30 años</p>
                      <p className="text-sm text-slate-600">
                        Servicio, confianza y bienestar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {aboutStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-4xl font-black text-[#063767]">{stat.value}</p>
                <h2 className="mt-3 text-xl font-bold text-slate-950">{stat.label}</h2>
                <p className="mt-3 leading-7 text-slate-600">{stat.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="historia" className="scroll-mt-28 bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Quiénes somos"
              title="Fundación ASOMDE"
              description="Somos una institución orientada al cuidado y bienestar integral, con una trayectoria construida desde la atención, el servicio y la confianza."
            />

            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="space-y-5 leading-8 text-slate-600">
                <p>
                  La Fundación ASOMDE ha desarrollado su labor desde una visión integral
                  del bienestar, ofreciendo servicios de medicina general, acupuntura,
                  terapias bioenergéticas y terapias alternativas especiales.
                </p>

                <p>
                  Su trayectoria de más de 30 años refleja un compromiso con la atención
                  humana, la orientación al usuario y la consolidación de espacios de
                  acompañamiento para la comunidad.
                </p>

                <p>
                  Esta nueva página web busca presentar su información institucional de
                  forma moderna, clara y accesible, manteniendo visible la información
                  normativa, los canales de atención y los servicios ofrecidos.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {institutionalPillars.map((pillar) => (
              <article
                key={pillar.id}
                className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  {pillar.id === 'historia' ? <Clock size={28} /> : null}
                  {pillar.id === 'atencion' ? <UsersRound size={28} /> : null}
                  {pillar.id === 'bienestar' ? <Leaf size={28} /> : null}
                </div>

                <h3 className="text-xl font-bold text-slate-950">{pillar.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Target size={28} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Misión
              </p>

              <h2 className="text-3xl font-bold text-slate-950">
                Acompañar el cuidado y bienestar integral
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Brindar servicios orientados al cuidado y bienestar integral de los
                usuarios, mediante atención en medicina general, acupuntura, terapias
                bioenergéticas y terapias alternativas especiales, con un enfoque humano,
                respetuoso y comprometido.
              </p>
            </article>

            <article className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#063767]">
                <Eye size={28} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Visión
              </p>

              <h2 className="text-3xl font-bold text-slate-950">
                Ser referente en atención integral
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Ser reconocidos como una fundación referente en servicios de cuidado,
                bienestar integral y terapias alternativas, fortaleciendo la confianza de
                nuestros usuarios y la comunidad.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-[#063767] to-emerald-800 py-20 text-white sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Trayectoria"
            title="Más de tres décadas de servicio"
            description="Esta línea de tiempo resume la evolución institucional de ASOMDE y quedará lista para ajustarse con fechas exactas cuando la fundación las confirme."
            align="center"
            className="[&_*]:text-white [&_p:first-child]:text-orange-300 [&_p:last-child]:text-blue-50/85"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {timelineItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-orange-300">
                  <Building2 size={24} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                  {item.year}
                </p>

                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-blue-50/85">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Valores"
            title="Principios que guían nuestra atención"
            description="Estos valores pueden ajustarse cuando ASOMDE confirme su información institucional oficial."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value) => (
              <article
                key={value.id}
                className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <CheckCircle2 size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-950">{value.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                  Información institucional
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Una página preparada para crecer con ASOMDE.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Cuando la fundación entregue fotografías, fechas exactas, reseña
                  histórica oficial o documentos institucionales, esta sección podrá
                  actualizarse sin cambiar la estructura principal de la página.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
                >
                  Ver servicios
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/atencion-usuario"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
                >
                  Atención al usuario
                  <ShieldCheck size={17} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}