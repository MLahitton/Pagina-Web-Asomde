export type NavigationItem = {
  label: string;
  path: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: 'Inicio',
    path: '/',
  },
  {
    label: 'Nosotros',
    path: '/nosotros',
  },
  {
    label: 'Servicios',
    path: '/servicios',
  },
  {
    label: 'Atención al Usuario',
    path: '/atencion-usuario',
  },
  {
    label: 'Información Legal',
    path: '/informacion-legal',
  },
];