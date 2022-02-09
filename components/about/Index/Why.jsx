import Image from "next/image";
import styles from "styles/home.module.css";
import ButtonBlue from "components/ButtonBlue";
import { useEffect, useState } from "react";

const images = ["/obelisco-buenos-aires-argentina.jpg", "/mate-argentino.jpg", "/ciudad-de-buenos-aires.jpg"];

const Why = () => {
  const [index, setIndex] = useState(0);
  const [resource, setResource] = useState(images[index]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (index >= 0 && index < images.length - 1) {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setIndex(prev => prev + 1);
          setResource(images[index + 1]);
        }, 300);
      }, 5000);
      return () => clearInterval(interval);
    }
    if (index === images.length - 1) {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setIndex(0);
          setResource(images[0]);
        }, 300);
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  return <section className={styles.why}>
    <div className={styles.divImg}>
      <Image src={require(`../../../public/assets/images${resource}`)} className={visible ? `${styles.img} ${styles.show}` : styles.img} alt="obelisco buenos aires argentina" onLoad={() => setVisible(true)} />
    </div>
    <article className={styles.article}>
      <h2>¿Por qué elegir Argentina?</h2>
      <p>Argentina cuenta con la mejor universidad de toda américa latina. La educación superior es <b>gratis</b> y su cultura es asombrosa.</p>
      <p>Cuenta con muchas universidadades públicas y privadas, todas estas <b>no hacen examen de ingreso,</b> por lo que puedes escoger la carrera que siempre has deseado estudiar y solo debes preocuparte por eso, estudiar.</p>
      <p>Argentina es el país con el <b>mejor índice de educación</b> en toda américa latina. ¡Puedes googlearlo!</p>
      <p>Además de todo esto, hay universidades como lo son la UBA o la UNLP que cuentan con un <b>muy buen prestigio internacional,</b> por lo que, si deccides ingresar a estas universidades, tu título será muy bien visto en el exterior.</p>
      <p>Sobra mencionar el hecho de poder experimentar una nueva cultura, nuevos amigos, nuevas travesías, experiencias y, sobretodo, un nuevo futuro para ti.</p>
      <p>¿Qué esperas? ¡Contáctanos y realicemos juntons tu sueño!</p>
      <ButtonBlue msg={"CONTACTAR"} path="#contacto" />
    </article>
  </section>;
};

export default Why;
