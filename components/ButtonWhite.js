import Link from "next/link";

const ButtonWhite = ({ msg, path }) => {
  return (
    <>
      <Link href={path}>
        <a>
          <h6>{msg}</h6>
        </a>
      </Link>
      <style jsx>{`
        a{
            display: inline-block;
            min-width: 150px;
            padding: 5px 0;
            background-color: #ffffff;
            margin: auto auto 0;
            color: #000000;
            border-radius: 15px;
        }
        h6{
            display: inline;
            font-weight: 700;
        }
        `}</style>
    </>
  );
};

export default ButtonWhite;