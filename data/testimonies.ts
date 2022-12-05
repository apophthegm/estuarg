interface ITestimony {
  id: number;
  name: string;
  testimony: string;
  picture: string;
  from: string;
}

const testimonies: ITestimony[] = [
  {
    id: 1,
    name: 'Darlivet Sanjuan Reyes',
    testimony: 'Mi nombre es Darlivet, de nacionalidad Colombiana. hoy quiero recomendarle está asesoría y a su equipo de asesores por hacer de esta experiencia algo mágico, maravilloso y único. Desde el primer momento estuvieron ahí para apoyarme en este gran reto que decidí tomar en la vida, se las recomiendo.',
    picture: '/darlivetsanjuanreyes.jpg',
    from: 'Colombia'
  },
  {
    id: 2,
    name: 'Liceth Paola Galindo',
    testimony: 'Soy Liceth Galindo y hoy doy testimonio de que esta asesoría es confiable y segura... Te brinda una mano amiga para los momentos difíciles en otro país y es de gran apoyo para cumplir nuestros sueños. Gracias a ellos hoy estoy culminando mi especialización en la ciudad de Buenos Aires.',
    picture: '/licethpaolagalindo.jpg',
    from: 'Colombia'
  },
  {
    id: 3,
    name: 'Eduar Camilo Lázaro',
    testimony: 'Estoy muy agradecido con el equipo de EstuArg, todo esto fue posible gracias a su acompañamiento en las distintas etapas de mi proceso de inscripción, ha sido una experiencia bastante gratificante.',
    picture: '/eduarcarrillolazaro.jpg',
    from: 'Colombia'
  },
  {
    id: 4,
    name: 'Jessica Pérez Orozco',
    testimony: 'Doy gracias a Dios por haberme dado la oportunidad de encontrarme con esta agencia que me brindó asesoría en mi proceso de viaje a estudiar a Argentina, la tranquilidad y calidez que generan todos en el equipo es única.',
    picture: '/jessicaperezorozco.jpg',
    from: 'Colombia'
  },
  {
    id: 5,
    name: 'Rosaangela Hernández',
    testimony: 'El ingreso a la universidad significó para mí un antes y un después en muchos aspectos de mi vida, tanto personal como familiar, el camino es largo pero sé que podré transitarlo. Gracias Yelenka y a tu equipo de trabajo por brindarnos está oportunidad a todos nosotros, de poder conocer y tener alguien en quien confiar!!',
    picture: '/rosaangelahernandez.jpg',
    from: 'República Dominicana'
  },
  {
    id: 6,
    name: 'Juan Camilo Velásquez',
    testimony: 'Doy gracias a todo el equipo de EstuArg  por su acompañamiento, fue indispensable en mi proceso de inscripción a la universidad de Barceló, hubo algunos contratiempos en el camino, pero se pudieron solucionar sin problemas.',
    picture: '/juancamilovelasquez.jpg',
    from: 'Colombia'
  },
  {
    id: 7,
    name: 'Paola Laverde',
    testimony: 'Mi nombre es Paola soy de nacionalidad Colombiana de la ciudad de Yopal-Casanare, quiero contarles un poco acerca de esta asesoría para estudiantes que quieren irse a estudiar a Argentina... mi experiencia con esta agencia fue maravillosa, se las recomiendo ciegamente te ayudan y te asesoran en cada paso a seguir.',
    picture: '/paolalaverde.jpg',
    from: 'Colombia'
  },
  {
    id: 8,
    name: 'Iván Donato',
    testimony: 'La posibilidad de realizar un sueño es lo que hace que la vida sea interesante, soy de Guinea ecuatorial y estoy agradecido con esta asesoría que hizo realidad mi ingreso a la universidad de Palermo en la ciudad de Buenos Aires gracias a todo este acompañamiento hoy estoy realizando mis sueños, gracias a yelenka que fue mi asesora y guía para lograrlo!',
    picture: '/ivandonato.jpg',
    from: 'Guinea Ecuatorial'
  }
]

export default testimonies
