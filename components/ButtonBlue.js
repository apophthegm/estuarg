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
          min-width: 250px;
          text-align: center;
          padding: var(--padding-one) var(--margin-one);
          background-color: var(--color-secondary);
          margin: auto auto 0;
          color: #ffffff;
          border-radius: 15px;
        }
        h4{
          font-weight: 600;
          font-size: var(--h5)
        }
        `}</style>
    </>
  );
};

export default ButtonBlue;
