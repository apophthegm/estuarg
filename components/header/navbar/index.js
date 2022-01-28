import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    const hamburguer = document.getElementById("menu");
    const btn = document.getElementById("menuBtn");
    const nav = document.getElementById("mobileNav");

    hamburguer.classList.toggle("menu");
    btn.classList.toggle("rotateBtn");
    nav.classList.toggle("show");
  };

  useEffect(() => {
    window.onscroll = () => {
      const btn = document.getElementById("menuBtn");
      if (window.scrollY > 600) {
        btn.classList.add("visible");
      }
      if (window.scrollY < 600) {
        btn.classList.remove("visible");
      }
    };
  }, [visible]);

  return (
    <div>
      <Link href="#inicio">
        <a className="logo">
          <h1>EstuArg</h1>
        </a>
      </Link>
      <button
        onLoad={() => setVisible(true)}
        id="menuBtn"
        onClick={handleClick}
      >
        <svg
          id="menu"
          className="svg"
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
      </button>
      <nav id="mobileNav">
        <ul>
          <li>
            <Link href="#inicio">
              <a onClick={() => document.getElementById("menuBtn").click()}>
                <h4>Inicio</h4>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#nosotros">
              <a onClick={() => document.getElementById("menuBtn").click()}>
                <h4>Nosotros</h4>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#testimonios">
              <a onClick={() => document.getElementById("menuBtn").click()}>
                <h4>Testimonios</h4>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contacto">
              <a onClick={() => document.getElementById("menuBtn").click()}>
                <h4>Contacto</h4>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        div {
          padding: var(--margin-one) 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: var(--color-primary);
          position: relative;
        }
        .logo > h1 {
          font-weight: 800;
        }
        button {
          background-color: transparent;
          border: none;
          display: none;
          border-radius: 50%;
        }
        ul {
          display: flex;
          list-style: none;
          justify-content: center;
          align-items: center;
          gap: var(--margin-one);
        }
        h4 {
          font-weight: 600;
        }
        @media screen and (max-width: 700px) {
          div {
            justify-content: start;
            padding-left: var(--margin-one);
          }
          .visible{
            background-color: var(--black80);
          }
          button {
            display: flex;
            position: fixed;
            z-index: 2;
            right: var(--padding-one);
            top: calc(var(--margin-one) - 5px);
            padding: var(--padding-one);
          }
          .menu > g > path:nth-child(1) {
            d: path("M16 3 L16 29");
          }
          .menu > g > path:nth-child(2) {
            d: path("M3 16 L29 16");
          }
          nav {
            position: fixed;
            z-index: 1;
            inset: 0 0 0 40%;
            background-color: var(--black80);
            overflow: hidden;
            transform: translateX(100%);
            transition: transform 300ms ease-in;
          }
          ul {
            flex-direction: column;
            margin: calc(89px + var(--margin-one)) var(--margin-one) 0 auto;
            width: fit-content;
          }
          li {
            width: 100%;
            text-align: end;
          }
          .rotateBtn {
            background-color: transparent;
            transform: rotate(45deg);
          }
          button,
          .svg > g > path {
            transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
              d 300ms ease-in-out, opacity 300ms ease-out,
              background-color 300ms ease 200ms;
          }
          .show {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
