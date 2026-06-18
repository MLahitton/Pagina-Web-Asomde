import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '../../data/contact';
import { navigationItems } from '../../data/navigation';
import { Container } from '../ui/Container';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-5">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Ir al inicio"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <img
                src="/images/brand/asomde-logo.webp"
                alt="Logo Fundación ASOMDE"
                className="h-full w-full object-contain p-1.5"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-base font-bold leading-tight text-slate-950">
                Fundación ASOMDE
              </p>
              <p className="truncate text-xs font-medium text-emerald-700">
                Bienestar integral
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Menú principal">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#063767] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-950"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 lg:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="fixed inset-x-0 top-20 z-50 border-t border-slate-100 bg-white/95 shadow-2xl backdrop-blur-xl lg:hidden">
          <Container>
            <nav
              id="mobile-navigation"
              className="max-h-[calc(100vh-5rem)] overflow-y-auto py-5"
              aria-label="Menú móvil"
            >
              <div className="grid gap-2">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-4 text-base font-bold transition ${
                        isActive
                          ? 'bg-emerald-700 text-white shadow-sm'
                          : 'bg-slate-50 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-5 rounded-[2rem] bg-gradient-to-br from-[#063767] to-emerald-800 p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Orientación
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  ¿Tienes preguntas sobre ASOMDE?
                </h2>

                <p className="mt-3 text-sm leading-7 text-blue-50/85">
                  Comunícate con nuestro equipo para recibir información sobre servicios,
                  sedes o atención al usuario.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:bg-orange-400"
                >
                  <MessageCircle size={18} />
                  Escribir por WhatsApp
                </a>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}