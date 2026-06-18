export type RouteMetadata = {
  title: string;
  description: string;
  robots?: 'index, follow' | 'noindex, follow';
};

export const siteConfig = {
  name: 'Fundación ASOMDE',
  siteUrl: 'https://fundacionasomde.org',
  defaultTitle: 'Fundación ASOMDE | Medicina bioenergética y bienestar integral',
  defaultDescription:
    'Página institucional de la Fundación ASOMDE en Bucaramanga. Servicios de medicina bioenergética, terapias complementarias, atención al usuario e información legal.',
  logo: '/images/brand/asomde-logo.webp',
  locale: 'es_CO',
};

export const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    title: 'Fundación ASOMDE | Medicina bioenergética y bienestar integral',
    description:
      'Conoce la Fundación ASOMDE, sus servicios de medicina bioenergética, terapias complementarias, sedes, atención al usuario e información institucional.',
  },
  '/nosotros': {
    title: 'Nosotros | Fundación ASOMDE',
    description:
      'Conoce la historia, misión, visión, valores y trayectoria de la Fundación ASOMDE, institución orientada al bienestar integral.',
  },
  '/servicios': {
    title: 'Servicios | Fundación ASOMDE',
    description:
      'Consulta los servicios ofrecidos por la Fundación ASOMDE en medicina bioenergética y terapias complementarias.',
  },
  '/atencion-usuario': {
    title: 'Atención al Usuario | Fundación ASOMDE',
    description:
      'Encuentra derechos y deberes, canal PQRS, alianza de usuarios, política de privacidad, tratamiento de datos, seguridad del paciente e indicadores.',
  },
  '/informacion-legal': {
    title: 'Información Legal | Fundación ASOMDE',
    description:
      'Consulta estados financieros y documentos institucionales de la Fundación ASOMDE organizados por categoría y año.',
  },
  '/404': {
    title: 'Página no encontrada | Fundación ASOMDE',
    description:
      'La página solicitada no existe o no se encuentra disponible. Vuelve al inicio de la Fundación ASOMDE.',
    robots: 'noindex, follow',
  },
};