import Why from "./Why";
import styles from "styles/home.module.css";

const About = () => {
  return (
    <div id="nosotros">
      <article className={styles.about}>
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos una empresa vanguardista, liderada por jóvenes que brindan ayuda
          a todas esas personas que deseen estudiar en Argentina. Contamos con 5
          años de experiencia como agencia asesora.
        </p>
        <p>
          Contamos con un equipo altamente capacitado para guiarte en todo el
          proceso que lleva el emprender esta travesía como puede ser la
          legalización de papeles estudiantiles, convalidaciones de títulos,
          búsqueda de vuelos, hospedaje y universidad, entre muchas otras
          cosas... ¡Tú preocúpate de luchar por tus sueños y nosotros de
          ayudarte a conseguirlos!
        </p>
      </article>
      <div className={styles.whyCtn}>
        <Why />
      </div>
    </div>
  );
};

export default About;
