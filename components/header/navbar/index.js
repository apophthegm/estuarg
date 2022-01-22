import style from "styles/home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <a>
          <h1 className={style.logo}>EstuArg</h1>
        </a>
      </Link>
      <ul className={style.navbar}>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/nosotros">
            <a>Nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="/testimonios">
            <a>Testimonios</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
