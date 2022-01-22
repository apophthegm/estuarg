import Image from "next/image";
import Navbar from "./navbar";
import style from "styles/home.module.css";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className={style.headerCtn}>
      <Navbar />
      <div className={style.bgImg}>
        <video
          style={{
            width: 100 + "%",
            height: 100 + "%",
            position: "absolute",
            objectFit: "cover",
            objectPosition: "center center",
            filter: "brightness(0.6)",
          }}
          loop
          autoPlay
          muted
          poster="/assets/argentina-video-thumbnail.jpg"
        >
          <source src="/assets/obelisco-monument.mp4" type="video/mp4" />
        </video>
      </div>
      <section className={style.content}>
        <div className={style.contentBig}>
          <h1 className={style.quote1}>ESTUDIA</h1>
          <h1 className={style.quote2}>en Argentina</h1>
          <h5>Y haz realidad tus sueños.</h5>
        </div>
        <ul className={style.contentList}>
          <li>
            <Icon
              icon="entypo:check"
              color="var(--color-secondary)"
              height="28"
              style={{ flex: "none" }}
            ></Icon>
            <p>Conviértete en el profesional que deseas ser.</p>
          </li>
          <li>
            <Icon
              icon="entypo:check"
              color="var(--color-secondary)"
              height="28"
              style={{ flex: "none" }}
            ></Icon>
            <p>Estudia en las mejores universidades de toda Latinoamérica.</p>
          </li>
          <li>
            <Icon
              icon="entypo:check"
              color="var(--color-secondary)"
              height="28"
              style={{ flex: "none" }}
            ></Icon>
            <p>Conoce una nueva cultura.</p>
          </li>
          <li>
            <Icon
              icon="entypo:check"
              color="var(--color-secondary)"
              height="28"
              style={{ flex: "none" }}
            ></Icon>
            <p>Haz amigos y comparte nuevas experiencias.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
