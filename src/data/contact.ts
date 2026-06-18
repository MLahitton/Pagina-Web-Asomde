export type AsomdeLocation = {
  name: string;
  city: string;
  address: string;
  mapEmbedUrl: string;
};

export const contactInfo = {
  foundationName: 'Fundación ASOMDE',
  email: 'centromedicoasomde@gmail.com',
  whatsappDisplay: '318 377 6514',
  whatsappNumber: '573183776514',
  whatsappMessage:
    'Hola, quiero recibir información sobre los servicios de la Fundación ASOMDE.',
  phones: ['(607) 670 2914', '(607) 657 0795'],
  schedule: 'Lunes a viernes de 8:00 a.m. a 5:00 p.m.',
  locations: [
    {
      name: 'Sede Bucaramanga',
      city: 'Bucaramanga',
      address: 'Calle 48 # 23 - 55, Nuevo Sotomayor, Bucaramanga, Colombia',
      mapEmbedUrl:
        'https://www.google.com/maps?q=Calle%2048%20%23%2023%20-%2055%2C%20Nuevo%20Sotomayor%2C%20Bucaramanga%2C%20Colombia&output=embed',
    },
    {
      name: 'Sede Barrancabermeja',
      city: 'Barrancabermeja',
      address: 'Carrera 28 # 47 - 62, Barrancabermeja, Colombia',
      mapEmbedUrl:
        'https://www.google.com/maps?q=Carrera%2028%20%23%2047%20-%2062%2C%20Barrancabermeja%2C%20Colombia&output=embed',
    },
  ] satisfies AsomdeLocation[],
};

export const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
  contactInfo.whatsappMessage,
)}`;