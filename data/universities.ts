interface IUniverty {
  source: string
  id: string
  description: string
}

export const universities: IUniverty[] = [
  {
    id: '0',
    source: '/uba.svg',
    description: 'Universidad de Buenos Aires'
  },
  {
    id: '1',
    source: '/barcelo.svg',
    description: 'Fundación Barceló'
  },
  {
    id: '2',
    source: '/unlp.svg',
    description: 'Universidad de La PLata'
  },
  {
    id: '3',
    source: '/usal.svg',
    description: 'Universidad del Salvador'
  },
  {
    id: '4',
    source: '/palermo.svg',
    description: 'Universidad de Palermo'
  },
  {
    id: '5',
    source: '/uca.svg',
    description: 'Universidad Católica Argentina'
  },
  {
    id: '6',
    source: '/belgrano.svg',
    description: 'Universidad de Belgrano'
  },
  {
    id: '7',
    source: '/uade.svg',
    description: 'Universidad Argentina de la Empresa'
  },
  {
    id: '9',
    source: '/utn.svg',
    description: 'Universidad Tecnológica Nacional'
  }
]
