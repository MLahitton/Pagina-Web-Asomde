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
    id: 'medicina-bioenergetica',
    name: 'Medicina bioenergética',
    shortDescription: 'Atención integral desde el equilibrio energético.',
    description:
      'Servicio orientado al acompañamiento integral de la persona, considerando su bienestar físico, emocional y energético desde una mirada complementaria.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para medicina bioenergética',
    highlights: ['Acompañamiento integral', 'Enfoque complementario', 'Bienestar personal'],
  },
  {
    id: 'radiestesia',
    name: 'Radiestesia',
    shortDescription: 'Evaluación energética complementaria.',
    description:
      'Práctica complementaria utilizada como apoyo en procesos de valoración energética, siempre dentro del enfoque institucional de ASOMDE.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para radiestesia',
    highlights: ['Valoración energética', 'Apoyo terapéutico', 'Atención humanizada'],
  },
  {
    id: 'reflexologia',
    name: 'Reflexología',
    shortDescription: 'Estimulación de puntos reflejos para el bienestar.',
    description:
      'Terapia complementaria enfocada en la estimulación de zonas reflejas, buscando favorecer la relajación, el equilibrio y el bienestar general.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para reflexología',
    highlights: ['Relajación', 'Equilibrio corporal', 'Bienestar general'],
  },
  {
    id: 'auriculoterapia',
    name: 'Auriculoterapia',
    shortDescription: 'Técnica complementaria aplicada en puntos auriculares.',
    description:
      'Terapia complementaria basada en la estimulación de puntos específicos del pabellón auricular como apoyo al bienestar integral.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para auriculoterapia',
    highlights: ['Puntos auriculares', 'Apoyo terapéutico', 'Técnica no invasiva'],
  },
  {
    id: 'cromoterapia',
    name: 'Cromoterapia',
    shortDescription: 'Uso terapéutico del color como apoyo al equilibrio.',
    description:
      'Práctica complementaria que utiliza el color como recurso de apoyo para promover armonía, bienestar y equilibrio energético.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para cromoterapia',
    highlights: ['Armonía', 'Equilibrio energético', 'Bienestar emocional'],
  },
  {
    id: 'gemoterapia',
    name: 'Gemoterapia',
    shortDescription: 'Uso complementario de gemas y minerales.',
    description:
      'Terapia complementaria que emplea gemas y minerales como parte de un enfoque de acompañamiento energético y bienestar integral.',
    image: placeholderImage,
    alt: 'Imagen institucional de ASOMDE para gemoterapia',
    highlights: ['Acompañamiento energético', 'Bienestar integral', 'Terapia complementaria'],
  },
];