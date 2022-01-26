import Image from "next/image";
import { Icon } from "@iconify/react";

const TestimonyCard = ({ name, picture, from, testimony, visible = false }) => {
  return (
    <div className={ visible }>
      <span>
        <Image src={require(`../../public/profiles${picture}`)} placeholder="blur" />
      </span>
      <blockquote>
        <Icon style={{ position: "absolute", zIndex: "-1", left: 0 }} icon="entypo:quote" color="var(--color-primary)" height="127" rotate={2} />
        <p>{testimony}</p>
        <Icon style={{ position: "absolute", zIndex: "-1", right: 0 }} className="svg2" icon="entypo:quote" color="var(--color-primary)" height="127" />
      </blockquote>
      <section>
        <h6>{name}</h6>
        <p>{from}</p>
      </section>
    <style jsx> {`
      div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-bottom: var(--margin-one);
      }
      span{
        display: flex;
        border-radius: 50%;
        overflow: hidden;
        width: 120px;
        height: 120px;
        margin-bottom: 20px;
      }
      blockquote{
        display: grid;
        place-items: center;
        position: relative;
        margin: 0;
        margin-bottom: var(--margin-one);
      }
      `} </style>
  </div>
  );
};

export default TestimonyCard;
