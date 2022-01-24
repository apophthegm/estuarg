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
            transition: background-color 300ms ease;
        }
        a:hover{
          background-color: #cfcfcf;
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
