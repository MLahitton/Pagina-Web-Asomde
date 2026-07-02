export type AboutValue = {
  id: string;
  title: string;
  description: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type InstitutionalPillar = {
  id: string;
  title: string;
  description: string;
};

export const aboutStats = [
  {
    value: '30+',
    label: 'años de trayectoria',
    description: 'Acompañando procesos de cuidado y bienestar integral.',
  },
  {
    value: '2',
    label: 'sedes de atención',
    description: 'Presencia en Bucaramanga y Barrancabermeja.',
  },
  {
    value: '100%',
    label: 'enfoque humano',
    description: 'Atención cercana, respetuosa e institucional.',
  },
];

export const institutionalPillars: InstitutionalPillar[] = [
  {
    id: 'historia',
    title: 'Historia',
    description:
      'ASOMDE ha construido una trayectoria institucional enfocada en el cuidado, el bienestar y el acompañamiento humano.',
  },
  {
    id: 'atencion',
    title: 'Atención humanizada',
    description:
      'Cada proceso busca generar confianza, claridad y orientación para los usuarios y sus familias.',
  },
  {
    id: 'bienestar',
    title: 'Bienestar integral',
    description:
      'La fundación promueve una mirada integral que considera la atención médica, el acompañamiento y las terapias alternativas.',
  },
];

export const aboutValues: AboutValue[] = [
  {
    id: 'humanizacion',
    title: 'Humanización',
    description: 'Promovemos una atención cercana, respetuosa y centrada en el usuario.',
  },
  {
    id: 'compromiso',
    title: 'Compromiso',
    description: 'Trabajamos con responsabilidad frente a nuestros usuarios y comunidad.',
  },
  {
    id: 'respeto',
    title: 'Respeto',
    description: 'Valoramos la dignidad, las necesidades y la experiencia de cada persona.',
  },
  {
    id: 'transparencia',
    title: 'Transparencia',
    description: 'Comunicamos la información institucional de manera clara y accesible.',
  },
  {
    id: 'servicio',
    title: 'Servicio',
    description: 'Orientamos nuestros procesos hacia una experiencia amable y confiable.',
  },
  {
    id: 'mejora',
    title: 'Mejora continua',
    description: 'Buscamos fortalecer nuestros procesos institucionales con el tiempo.',
  },
];

export const timelineItems: TimelineItem[] = [
  {
    year: 'Inicio',
    title: 'Nacimiento de ASOMDE',
    description:
      'La fundación surge con el propósito de brindar acompañamiento institucional desde servicios de salud, bienestar y terapias alternativas.',
  },
  {
    year: 'Trayectoria',
    title: 'Consolidación institucional',
    description:
      'Durante más de tres décadas, ASOMDE ha fortalecido su experiencia en atención integral y orientación al usuario.',
  },
  {
    year: 'Actualidad',
    title: 'Presencia en la comunidad',
    description:
      'La fundación mantiene sedes de atención y canales institucionales para acompañar a sus usuarios.',
  },
  {
    year: 'Futuro',
    title: 'Transformación digital',
    description:
      'La nueva página web permitirá presentar información clara, normativa y actualizada para la comunidad.',
  },
];