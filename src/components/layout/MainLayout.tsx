import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { Header } from './Header';
import { MegaFooter } from './MegaFooter';
import { SkipLink } from './SkipLink';

export function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <SkipLink />
      <Header />

      <main id="main-content" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <MegaFooter />
      <FloatingWhatsApp />
    </div>
  );
}