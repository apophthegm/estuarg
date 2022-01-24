import Image from "next/image";
import styles from "styles/home.module.css";
import resource from "public/assets/obelisco-buenos-aires-argentina.jpg";
import ButtonBlue from "components/ButtonBlue";

const Why = () => {
  return <section className={styles.why}>
    <div className={styles.divImg}>
        <Image src={resource} placeholder="blur" className={styles.img} alt="obelisco buenos aires argentina" />
    </div>
    <article className={styles.article}>
        <h2>¿Por qué elegir Argentina?</h2>
        <p>Argentina cuenta con la mejor universidad de toda américa latina. La educación superior es <b>gratis</b> y su cultura es asombrosa.</p>
        <p>Cuenta con muchas universidadades públicas y privadas, todas estas <b>no hacen examen de ingreso,</b> por lo que puedes escoger la carrera que siempre has deseado estudiar y solo debes preocuparte por eso, estudiar.</p>
        <p>Argentina es el país con el <b>mejor índice de educación</b> en toda américa latina. ¡Puedes googlearlo!</p>
        <p>Además de todo esto, hay universidades como lo son la UBA o la UNLP que cuentan con un <b>muy buen prestigio internacional,</b> por lo que, si deccides ingresar a estas universidades, tu título será muy bien visto en el exterior.</p>
        <p>Sobra mencionar el hecho de poder experimentar una nueva cultura, nuevos amigos, nuevas travesías, experiencias y, sobretodo, un nuevo futuro para ti.</p>
        <p>¿Qué esperas? ¡Contáctanos y realicemos juntons tu sueño!</p>
        <ButtonBlue msg={"CONTACTAR"} path="/contacto" />
    </article>
  </section>;
};

export default Why;
