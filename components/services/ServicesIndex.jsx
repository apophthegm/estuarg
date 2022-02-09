import Icons from "./Icons";

export const iconsInfo = [
  {
    name: "healthicons:i-documents-accepted",
    height: "50",
    color: "#ffffff",
    desc: "Te ayudamos a legalizar todos los papeles que necesitas al momento de realizar tu viaje.",
    title: "Legalización de documentos"
  },
  {
    name: "bx:bxs-building-house",
    height: "50",
    color: "#ffffff",
    desc: "Te brindamos ayuda para conseguir hospedaje cerca a la universidad que elijas.",
    title: "Hospedaje"
  },
  {
    name: "ion:school-sharp",
    height: "50",
    color: "#ffffff",
    desc: "Asesoría al momento de elegir la universidad, para que entiendas el sistema estudiantil argentino.",
    title: "Ingreso a la universidad"
  }
];

const ServicesIndex = () => {
  return (
    <section>
      <h2>Nuestros servicios</h2>
      <div>
        {iconsInfo.map((icon, index) => {
          const { name, height, color, desc, title } = icon;
          return <Icons key={index} iconName={name} iconHeight={height} iconColor={color} desc={desc} title={title} />;
        })}
      </div>
      <span>Entre muchos otros más...</span>
      <style jsx>{`
        section{
          background-color: var(--color-secondary);
          text-align: center;
          padding: calc(var(--margin-one) + var(--margin-one)) 0;
          margin: var(--margin-two) 0 0;
        }
        h2{
          margin-bottom: var(--margin-two);
        }
        div{
          display: flex;
          width: 70%;
          margin: 0 auto;
          justify-content: space-around;
          margin-bottom: var(--margin-two);
        }
        span{
          font-family: 'Yellowtail', sans-serif;
          font-size: var(--h4);
          color: var(--black);
        }

        @media screen and (max-width: 820px) {
          div{
            width: 100%;
            flex-wrap: wrap;
            gap: var(--margin-one);
          }
        }
        `}</style>
    </section>);
};

export default ServicesIndex;
