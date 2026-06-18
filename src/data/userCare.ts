export type UserCareDocument = {
  id: string;
  title: string;
  description: string;
  documentUrl: string | null;
  status: 'available' | 'pending';
};

export type UserCareSection = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  document?: UserCareDocument;
};

export const userCareSections: UserCareSection[] = [
  {
    id: 'derechos-deberes',
    title: 'Derechos y deberes',
    subtitle: 'Información esencial para nuestros usuarios',
    description:
      'Los usuarios de la Fundación ASOMDE tienen derecho a recibir información clara, atención respetuosa y orientación sobre los servicios ofrecidos. También tienen deberes relacionados con el buen uso de los canales institucionales y el respeto por el proceso de atención.',
    items: [
      'Recibir atención humanizada, respetuosa y oportuna.',
      'Conocer información clara sobre los servicios ofrecidos.',
      'Presentar peticiones, quejas, reclamos o sugerencias.',
      'Suministrar información veraz para facilitar la orientación.',
      'Tratar con respeto al personal y demás usuarios.',
      'Cumplir las indicaciones y procesos definidos por la institución.',
    ],
    document: {
      id: 'derechos-deberes-pdf',
      title: 'Documento de derechos y deberes',
      description: 'PDF oficial pendiente de carga.',
      documentUrl: null,
      status: 'pending',
    },
  },
  {
    id: 'pqrs',
    title: 'Canal PQRS',
    subtitle: 'Peticiones, quejas, reclamos y sugerencias',
    description:
      'ASOMDE dispondrá de un canal institucional para que los usuarios puedan registrar sus solicitudes, inquietudes o inconformidades relacionadas con la atención recibida.',
    items: [
      'Peticiones sobre información institucional o servicios.',
      'Quejas relacionadas con la experiencia de atención.',
      'Reclamos sobre situaciones específicas del servicio.',
      'Sugerencias para mejorar los procesos institucionales.',
      'Solicitudes de orientación o información adicional.',
    ],
    document: {
      id: 'pqrs-pdf',
      title: 'Formato o procedimiento PQRS',
      description: 'Documento pendiente de validación.',
      documentUrl: null,
      status: 'pending',
    },
  },
  {
    id: 'alianza-usuarios',
    title: 'Alianza de usuarios',
    subtitle: 'Participación y acompañamiento institucional',
    description:
      'La alianza de usuarios es un espacio de participación que permite fortalecer la comunicación entre la institución y las personas que hacen uso de sus servicios.',
    items: [
      'Promover la participación activa de los usuarios.',
      'Apoyar la comunicación entre usuarios e institución.',
      'Acompañar procesos de mejora continua.',
      'Canalizar inquietudes de la comunidad usuaria.',
    ],
    document: {
      id: 'alianza-usuarios-pdf',
      title: 'Documento de alianza de usuarios',
      description: 'PDF pendiente de carga.',
      documentUrl: null,
      status: 'pending',
    },
  },
  {
    id: 'privacidad',
    title: 'Política de privacidad',
    subtitle: 'Confidencialidad y protección de la información',
    description:
      'La política de privacidad establece los lineamientos sobre el manejo responsable de la información institucional y de los datos entregados por los usuarios.',
    items: [
      'Manejo responsable de la información.',
      'Protección de datos personales.',
      'Uso adecuado de canales de contacto.',
      'Confidencialidad en la atención.',
    ],
    document: {
      id: 'politica-privacidad-pdf',
      title: 'Política de privacidad',
      description: 'Documento pendiente de publicación.',
      documentUrl: null,
      status: 'pending',
    },
  },
  {
    id: 'tratamiento-datos',
    title: 'Tratamiento de datos',
    subtitle: 'Autorización y uso de datos personales',
    description:
      'Esta sección presentará la información relacionada con la autorización, tratamiento, almacenamiento y protección de datos personales conforme a la normativa aplicable.',
    items: [
      'Autorización para el uso de datos personales.',
      'Finalidades del tratamiento de la información.',
      'Canales para consultas relacionadas con datos.',
      'Derechos del titular de la información.',
    ],
    document: {
      id: 'tratamiento-datos-pdf',
      title: 'Política de tratamiento de datos',
      description: 'PDF pendiente de carga.',
      documentUrl: null,
      status: 'pending',
    },
  },
  {
    id: 'seguridad-paciente',
    title: 'Seguridad del paciente',
    subtitle: 'Buenas prácticas durante la atención',
    description:
      'La política de seguridad del paciente busca promover prácticas institucionales orientadas a una atención segura, responsable y centrada en el bienestar del usuario.',
    items: [
      'Promoción de prácticas seguras.',
      'Orientación clara durante la atención.',
      'Prevención de riesgos en el proceso asistencial.',
      'Mejora continua de la experiencia del usuario.',
    ],
    document: {
      id: 'seguridad-paciente-pdf',
      title: 'Política de seguridad del paciente',
      description: 'Documento pendiente de validación.',
      documentUrl: null,
      status: 'pending',
    },
  },
  {
    id: 'indicadores',
    title: 'Indicadores',
    subtitle: 'Información institucional para consulta pública',
    description:
      'ASOMDE contará con un espacio para publicar indicadores institucionales relevantes, de manera clara, accesible y organizada.',
    items: [
      'Indicadores de atención.',
      'Información de seguimiento institucional.',
      'Datos públicos para usuarios y entes de control.',
      'Actualizaciones periódicas cuando aplique.',
    ],
    document: {
      id: 'indicadores-pdf',
      title: 'Indicadores institucionales',
      description: 'Documento pendiente de publicación.',
      documentUrl: null,
      status: 'pending',
    },
  },
];

export const userCareHighlights = [
  {
    value: 'PQRS',
    label: 'Canal institucional',
    description: 'Preparado para orientar solicitudes de los usuarios.',
  },
  {
    value: '7',
    label: 'Bloques normativos',
    description: 'Información organizada para consulta pública.',
  },
  {
    value: 'PDF',
    label: 'Documentos listos',
    description: 'Estructura preparada para archivos oficiales.',
  },
];