export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
};

const placeholderImage = '/images/brand/asomde-logo.webp';

export const services: Service[] = [
  {
    id: 'medicina-general',
    name: 'Medicina general',
    shortDescription: 'Atención médica inicial, orientación y valoración general.',
    description:
      'Servicio orientado a la valoración inicial del estado de salud, orientación médica general y acompañamiento básico según las necesidades del usuario.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para medicina general',
    highlights: ['Valoración general', 'Orientación médica', 'Atención humanizada'],
  },
  {
    id: 'acupuntura',
    name: 'Acupuntura',
    shortDescription: 'Técnica terapéutica alternativa para el bienestar integral.',
    description:
      'Servicio de terapia alternativa que busca apoyar el bienestar del usuario mediante técnicas especializadas de acupuntura, dentro del enfoque institucional de ASOMDE.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para acupuntura',
    highlights: ['Terapia alternativa', 'Acompañamiento integral', 'Bienestar'],
  },
  {
    id: 'terapias-bioenergeticas',
    name: 'Terapias bioenergéticas',
    shortDescription: 'Acompañamiento enfocado en equilibrio y bienestar energético.',
    description:
      'Servicio orientado al acompañamiento integral desde un enfoque bioenergético, buscando apoyar procesos de bienestar, equilibrio y armonía personal.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para terapias bioenergéticas',
    highlights: ['Enfoque bioenergético', 'Equilibrio integral', 'Acompañamiento'],
  },
  {
    id: 'terapias-alternativas-especiales',
    name: 'Terapias alternativas especiales',
    shortDescription: 'Servicios alternativos complementarios según valoración y necesidad.',
    description:
      'Servicio que reúne terapias alternativas especiales ofrecidas por ASOMDE, orientadas al bienestar integral y al acompañamiento complementario de los usuarios.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para terapias alternativas especiales',
    highlights: ['Terapias especiales', 'Bienestar integral', 'Atención complementaria'],
  },
];