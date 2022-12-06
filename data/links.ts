import { FC, SVGProps } from 'react'
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
  benefits: string[]
  color: string
}

export const navLinks: INavLinks[] = [
  {
    id: '0',
    title: 'Inicio',
    path: 'home'
  },
  {
    id: '1',
    title: 'Nosotros',
    path: 'about'
  },
  {
    id: '2',
    title: 'Motivación',
    path: 'motivate'
  },
  {
    id: '3',
    title: 'Precios',
    path: 'pricing'
  },
  {
    id: '4',
    title: 'Contacto',
    path: 'contact'
  }
]

export const plansLinks: IPlanLinks[] = [
  {
    id: '0',
    title: 'Basic',
    path: '/',
    description: 'Cuenta con los servicios básicos para entrar al país de forma legal.',
    benefits: [
      'Gestión de trámites para la visa',
      'Atención personalizada y seguimiento de tu caso',
      'Expedición del DNI y pasaporte',
      'Asesoría legal'
    ],
    color: 'var(--black)',
    price: '$600 usd'
  },
  {
    id: '1',
    title: 'Premium',
    path: '/',
    description: 'Llegarás al país con todo lo que necesitas, para vivir y estudiar.',
    benefits: [
      'Inscripción en la universidad',
      'Asesoramiento en el curso CBC y UBA XXI (solo aplica para la UBA)',
      'Gestión y guía en alquiler de vivienda',
      'Kit estudiantil por todo el año'
    ],
    color: 'var(--blue)',
    price: '$900 usd'
  },
  {
    id: '2',
    title: 'Customizable',
    path: '/',
    description: 'Tú eliges todos los servicios que necesitas y nosotros nos adaptamos a ti.',
    benefits: [
      'Asesoría personalizada y seguimiento de tu caso',
      'Expedición del DNI y pasaporte',
      'Precio a convenir según tus necesidades',
      'Total flexibilidad en los servicios'
    ],
    color: 'var(--purple)',
    price: 'Consultar'
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
