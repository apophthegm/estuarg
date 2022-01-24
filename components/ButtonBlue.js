import Link from "next/link";

const ButtonBlue = ({ msg, path }) => {
  return (
    <>
      <Link href={path}>
        <a>
          <h4>{msg}</h4>
        </a>
      </Link>
      <style jsx>{`
        a{
          display: inline;
          padding: var(--padding-one) var(--margin-one);
          background-color: var(--color-secondary);
          margin: auto auto 0;
          color: #ffffff;
          border-radius: 15px;
        }
        h4{
          font-weight: 500;
        }
        `}</style>
    </>
  );
};

export default ButtonBlue;
