interface INavLinks {
  id: string,
  title: string,
  path: string
}

export const navLinks: INavLinks[] = [
  {
    id: '0',
    title: 'Inicio',
    path: '/'
  },
  {
    id: '1',
    title: 'Nosotros',
    path: '/nosotros'
  },
  {
    id: '2',
    title: 'Precios',
    path: '/precios'
  },
  {
    id: '3',
    title: 'Preguntas',
    path: '/preguntas'
  },
  {
    id: '4',
    title: 'Contactar',
    path: '/contacto'
  }
]