import Image from "next/image";
import resource from "public/assets/congreso-buenos-aires-argentina.jpg";
import style from "styles/home.module.css";
import { Icon } from "@iconify/react";

const icons = [
  {
    id: 1,
    link: "https://wa.me/573122779915",
    iconName: "cib:whatsapp",
    iconHeight: 35,
    title: "WhatsApp",
    desc: "Opción 1",
    color: "#ffff"
  },
  {
    id: 2,
    link: "https://wa.me/573005731373",
    iconName: "cib:whatsapp",
    iconHeight: 35,
    title: "WhatsApp",
    desc: "Opción 2",
    color: "#ffff"
  },
  {
    id: 3,
    link: "https://wa.me/5491127678532",
    iconName: "cib:whatsapp",
    iconHeight: 35,
    title: "WhatsApp",
    desc: "Opción 3",
    color: "#ffff"
  },
  {
    id: 4,
    link: "mailto:info@estuarg.com",
    iconName: "cib:mail-ru",
    iconHeight: 35,
    title: "Email",
    desc: "info@estuarg.com",
    color: "#ffff"
  },
  {
    id: 5,
    link: "https://goo.gl/maps/hBYogRumQ6HfQDYHA",
    iconName: "akar-icons:location",
    iconHeight: 35,
    title: "Ubicación",
    desc: "Uriburu 1661 piso 2, Recoleta",
    color: "#ffff"
  }
];

const IndexFooter = () => {
  return (
    <div id="contacto" className="container">
      <div className="imgCtn">
        <Image
          src={resource}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom center"
          placeholder="blur"
        />
      </div>
      <span>
        <h1 className={style.quote1}>Contáctanos</h1>
        <h1 className={style.quote2}>Y haz realidad tus sueños!</h1>
      </span>
      <div className="socials">
        {icons.map((icon) => (
          <a
            className="social_link"
            key={icon.id}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon={icon.iconName}
              height={icon.iconHeight}
              color={icon.color}
            />
            <div>
              <h6>{icon.title}</h6>
              <p>{icon.desc}</p>
            </div>
          </a>
        ))}
      </div>
      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 65vh;
        }
        .imgCtn {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .imgCtn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(24, 22, 22, 1) 0%,
            rgba(0, 0, 0, 0) 80%
          );
        }
        h1 {
          letter-spacing: 0;
          font-size: var(--font-semibig);
          margin: 0;
        }
        span {
          color: var(--color-primary);
          display: inline-block;
          position: absolute;
          top: var(--margin-one);
          left: 0;
          background-color: var(--black80);
          clip-path: polygon(0% 0%, 82% 0%, 100% 50%, 82% 100%, 0% 100%);
          padding: var(--margin-one) calc(var(--margin-one) + var(--margin-two))
            var(--margin-one) var(--margin-one);
        }
        .socials {
          margin-top: var(--margin-two);
          width: max-content;
          display: grid;
          row-gap: var(--margin-one);
          column-gap: var(--margin-two);
          grid-template-areas:
            "a b"
            "c d"
            "e f";
          align-items: center;
          justify-content: start;
        }
        .social_link {
          display: flex;
          align-items: center;
          color: #ffffff;
          gap: var(--padding-one);
        }
        .social_link:first-of-type {
          grid-area: a;
        }
        .social_link:nth-of-type(2) {
          grid-area: c;
        }
        .social_link:nth-of-type(3) {
          grid-area: e;
        }
        .social_link:nth-of-type(4) {
          grid-area: b;
        }
        .social_link:nth-of-type(5) {
          grid-area: d;
        }
        h6 {
          font-weight: 600;
        }
        p {
          font-weight: 200;
        }

        @media screen and (max-width: 600px) {
          h1 {
            font-size: calc(var(--font-semibig) - 15px);
          }
          .socials {
            row-gap: calc(var(--padding-one) + 10px);
            grid-template-areas:
              "a"
              "c"
              "e"
              "b"
              "d";
          }
          @media screen and (max-width: 420px) {
            h1 {
              font-size: var(--h1);
              line-height: var(--h1);
            }
            span {
              padding-left: var(--padding-one);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default IndexFooter;
