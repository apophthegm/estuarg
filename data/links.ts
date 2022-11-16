interface INavLinks {
  id: string
  title: string
  path: string
}

interface IPlanLinks extends INavLinks {
  description: string
  price: string
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

export const plansLinks: IPlanLinks[] = [
  {
    id: '0',
    title: 'Plan Básico',
    path: '/',
    description: 'Cuenta con los servicios básicos para entrar al país de forma legal.',
    price: '600 usd'
  },
  {
    id: '1',
    title: 'Plan Premium',
    path: '/',
    description: 'Llegarás al país con todo lo que necesitas, para vivir y estudiar.',
    price: '900 usd'
  },
  {
    id: '1',
    title: 'Plan Custom',
    path: '/',
    description: 'Tú eliges todos los servicios que necesitas y nosotros nos adaptamos a ti.',
    price: 'A convenir'
  }
]
