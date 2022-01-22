import style from "styles/home.module.css";
import Link from "next/link";

const Navbar = () => {
  // let scroll = 0;

  const menuClicked = () => {
    const menu = document.getElementById("menu");
    const menuCtn = document.getElementById("menuCtn");
    // const body = document.body;

    menu.classList.toggle(`${style.menu}`);
    menuCtn.classList.toggle(`${style.reveal}`);

    // if (body.style.position === "fixed") {
    //   body.style = "";
    //   window.scroll(0, scroll);
    // } else {
    //   scroll = window.scrollY;
    //   body.style.top = `-${scroll}px`;
    //   body.style.height = `calc(100% + ${scroll}px)`;
    //   body.style.position = "fixed";
    // }
  };

  return (
    <header className={style.header}>
      <Link href="/">
        <a>
          <h1 className={style.logo}>EstuArg</h1>
        </a>
      </Link>
      <div className={style.rotateContainer} onClick={menuClicked}>
        <svg
            id="menu"
            className={style.rotate}
            viewBox="0 0 33 33"
            width="32"
            height="32"
          >
            <g
              stroke="var(--color-primary)"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M3 10 L29 10" />
              <path d="M3 22 L29 22" />
            </g>
          </svg>
      </div>
      <section id="menuCtn" className={style.navbarCtn}>
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
      </section>
    </header>
  );
};

export default Navbar;
