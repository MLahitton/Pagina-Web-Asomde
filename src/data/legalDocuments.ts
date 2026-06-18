export type LegalDocumentStatus = 'available' | 'pending';

export type LegalDocumentYear = {
  year: string;
  label: string;
  description: string;
  url: string | null;
  status: LegalDocumentStatus;
};

export type LegalDocumentGroup = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  folderPath: string;
  note: string;
  documents: LegalDocumentYear[];
};

const years = ['2023', '2024', '2025', '2026'];

function createYearDocuments(
  labelPrefix: string,
  descriptionPrefix: string,
): LegalDocumentYear[] {
  return years.map((year) => ({
    year,
    label: `${labelPrefix} ${year}`,
    description: `${descriptionPrefix} correspondiente al año ${year}.`,
    url: null,
    status: 'pending',
  }));
}

export const legalDocumentGroups: LegalDocumentGroup[] = [
  {
    id: 'estados-financieros',
    title: 'Estados Financieros',
    subtitle: 'Información financiera institucional',
    description:
      'Espacio destinado a la publicación de estados financieros y documentos contables de consulta pública.',
    folderPath: '/documents/estados-financieros/',
    note: 'Los documentos serán publicados cuando ASOMDE entregue los archivos oficiales.',
    documents: createYearDocuments(
      'Estados financieros',
      'Documento de estados financieros institucionales',
    ),
  },
  {
    id: 'por-definir',
    title: 'Por definir',
    subtitle: 'Documentos institucionales adicionales',
    description:
      'Bloque reservado para documentos legales, administrativos o institucionales que ASOMDE defina más adelante.',
    folderPath: '/documents/por-definir/',
    note: 'Esta categoría queda preparada para futuros documentos oficiales.',
    documents: createYearDocuments(
      'Documento por definir',
      'Documento institucional pendiente de definición',
    ),
  },
];

export const legalInfoHighlights = [
  {
    value: '2',
    label: 'Categorías documentales',
    description: 'Estados financieros y documentos por definir.',
  },
  {
    value: '2023-2026',
    label: 'Años preparados',
    description: 'Estructura lista para publicar documentos por vigencia.',
  },
  {
    value: 'PDF',
    label: 'Consulta directa',
    description: 'Los archivos se abrirán solo cuando el usuario los solicite.',
  },
];