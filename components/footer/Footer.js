import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <h6>Enlaces rápidos</h6>
          <li>
            <Link href="/">
              <a>
                <p>Inicio</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/nosotros">
              <a>
                <p>Nosotros</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/testimonios">
              <a>
                <p>Testimonios</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              <a>
                <p>Contacto</p>
              </a>
            </Link>
          </li>
        </ul>
        <ul>
          <h6>Contacto</h6>
          <li>
            <a
              href="https://goo.gl/maps/hBYogRumQ6HfQDYHA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Uriburu 1661 piso 2, Recoleta.</p>
              <p>Buenos Aires - Argentina.</p>
            </a>
          </li>
          <li>
            <a
              href="tel:+5491127678532"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Teléfono:</p>
              <p>+54 9 11 2767 8532</p>
            </a>
          </li>
          <li>
            <a
              href="mailto:estuargasesorias@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Email:</p>
              <p>estuargasesorias@gmail.com</p>
            </a>
          </li>
        </ul>
      </div>
      <span>Estuarg Asesorias © - Todos los derechos reservados.</span>
      <style jsx>{`
        footer {
          display: flex;
          padding: var(--margin-two) var(--margin-one) var(--padding-one);
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          gap: var(--margin-one);
          background-color: var(--black);
          color: #ffffff;
        }
        div {
          display: flex;
          width: min(800px, 100%);
          justify-content: space-between;
        }
        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        li {
          margin-bottom: var(--padding-one);
        }
        h6 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: var(--margin-one);
        }
        p {
          font-size: 16px;
          font-weight: 200;
        }
        span {
          font-size: 14px;
          color: var(--grey-footer);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
