import Image from "next/image";
import IndexTestimonies from "components/testimonies/IndexTestimonies";
import estuarg from "public/logos/rounded_logo.jpg";

const images = [
  {
    id: 1,
    name: "Leidy Hidalgo",
    src: "/asesor_1.jpg",
    des: "Asesor"
  },
  {
    id: 2,
    name: "Diego Díaz",
    src: "/asesor_2.jpg",
    des: "Asesor"
  },
  {
    id: 3,
    name: "Yelenka Arzuaga",
    src: "/asesor_3.jpg",
    des: "Asesor"
  }
];

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
      <p>
        Por nuestro lado no queda más que invitarte a formar parte de esta gran familia que quiere acompañarte en tu proceso. Anímate y pregunta por todos nuestros planes.
      </p>
    </main>
    <section>
      <h2>Conócenos</h2>
      <div className="ctn">
        {images.map((source) => <div key={source.id} className="imgCtn">
          <div>
            <Image quality={100} src={require(`../../public/assets/asesores${source.src}`)} alt="asesores de estuarg" placeholder="blur" />
          </div>
          <div className="content">
            <h6>{source.name}</h6>
            <p>{source.des}</p>
          </div>
        </div>)}
      </div>
    </section>
    <div className="estuarg">
      <a className="imgEstuarg" href="https://instagram.com/estuarglatam">
        <Image src={estuarg} placeholder="blur" alt="estuarg logo" />
      </a>
    </div>
    <IndexTestimonies />
    <style jsx>{`
      main, section{
        width: min(1200px, 100%);
        margin: var(--margin-two) auto;
        text-align: justify;
        padding: 0 var(--margin-one);
      }
      h2{
        text-align: center;
        margin-bottom: var(--margin-one);
      }
      p{
        margin-bottom: var(--margin-one);
      }
      .ctn{
        display: grid;
        column-gap: var(--margin-one);
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
      .imgCtn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .content{
        text-align: center;
      }
      .estuarg{
        display: flex;
        position: relative;
        place-content: center;
        margin: var(--margin-two) auto;
      }
      .estuarg::after, .estuarg::before{
        content: '';
        position: absolute;
        height: 1px;
        width: 50%;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--black);
      }
      .estuarg::before{
        left: 0;
      }
      .estuarg::after{
        right: 0;
      }
      .imgEstuarg{
        display: flex;
        width: min(calc(160px + 20px), calc(30% + 20px));
        z-index: 1;
        border: 10px solid #fff;
      }
    `}</style>
  </>;
};

export default Index;
