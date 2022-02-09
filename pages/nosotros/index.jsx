const Index = () => {
  return <>
    <main>
      <h2>Nosotros</h2>
      <p>
        EstuArg es una empresa dedicada a las consultorías académicas, va dirigida a todas aquellas personas que deseen realizar sus estudios de pregrado y/o postgrado en universidades públicas y privadas en Argentina.
      </p>
      <p>
        Inicialmente solo éramos un grupo de amigos que brindábamos ayuda sin interés a quien necesitara información sobre toda la documentación requerida para ingresar a la universidad, incluso alojamiento en caso de necesitarlo. Pero pasado un tiempo lo fuimos tomando como un proyecto que nos permitiera generar una fuente de ingresos y a su vez ayudar a todas las personas a conseguir su sueño de estudiar en Argentina de la mano de una asesoría estudiantil que comprende las necesidades de todos sus clientes. Es así como surge EstuArg, una alternativa a todas las demás empresas del mercado dado que somos jóvenes que pasamos por el mismo proceso de dudas e inquietudes acerca de este gran paso. A su vez, sabemos por experiencia propia que no todos estamos dispuestos a pagar por servicios que consideramos innecesarios, por esto, en EstuArg, tú eliges los servicios que deseas.
      </p>
      <section>
        GALERÍA
      </section>
      <p>
        Por nuestro lado no queda más que invitarte a formar parte de esta gran familia que quiere acompañarte en tu proceso. Anímate y pregunta por todos nuestros planes.
      </p>
    </main>
    <style jsx>{`
      main{
        width: min(1200px, 100%);
        min-height: calc(100vh - 2 * var(--margin-two));
        margin: var(--margin-two) auto;
        text-align: justify;
      }
      h2{
        text-align: center;
        margin-bottom: var(--margin-one);
      }
      p{
        margin-bottom: var(--margin-one);
      }
    `}</style>
  </>;
};

export default Index;
