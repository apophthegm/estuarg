import { FC, SVGProps } from "react"
import { Instagram, Location } from '@components/icons'

interface INavLinks {
  id: string
  title: string
  path: string
}

interface ISocialLinks extends INavLinks {
  icon?: FC<SVGProps<SVGSVGElement>>
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

export const contactLinks: INavLinks[] = [
  {
    id: '0',
    title: '(+57) 320 490 1742',
    path: 'wa.me/573204901742'
  },
  {
    id: '1',
    title: '(+54) 9 11 2767-8532',
    path: 'wa.me/5491127678532'
  },
  {
    id: '2',
    title: 'info@estuarg.com',
    path: 'mailto:info@estuarg.com'
  }
]

export const socialMediaLinks: ISocialLinks[] = [
  {
    id: '0',
    title: '/estuarglatam',
    path: 'https://instagram.com/estuarglatam',
    icon: Instagram
  },
  {
    id: '1',
    title: 'Uriburú 1661 piso 2, Recoleta. Buenos Aires - Argentina.',
    path: 'https://goo.gl/maps/hBYogRumQ6HfQDYHA',
    icon: Location
  }
]
