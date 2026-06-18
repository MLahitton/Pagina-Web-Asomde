import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { RouteMetadata } from './components/seo/RouteMetadata';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { LegalInfoPage } from './pages/LegalInfoPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServicesPage } from './pages/ServicesPage';
import { UserCarePage } from './pages/UserCarePage';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        const elementId = decodeURIComponent(location.hash.replace('#', ''));
        const element = document.getElementById(elementId);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteMetadata />
      <ScrollManager />

      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="atencion-usuario" element={<UserCarePage />} />
          <Route path="informacion-legal" element={<LegalInfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}