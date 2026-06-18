import { ArrowLeft, Home, SearchX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';

export function NotFoundPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-24 sm:py-28">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100/80 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-emerald-700 shadow-xl ring-1 ring-slate-100">
            <SearchX size={38} />
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
            Error 404
          </p>

          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            No encontramos la página que estás buscando.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            Es posible que el enlace haya cambiado, que la dirección esté escrita
            incorrectamente o que el contenido ya no esté disponible.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
            >
              <Home size={18} />
              Volver al inicio
            </Link>

            <Link
              to="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50"
            >
              <ArrowLeft size={18} />
              Ver servicios
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}