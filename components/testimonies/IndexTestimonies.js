import testimonies from "db/testimonies";
import { useState } from "react";
import TestimonyCard from "./TestimonyCard";

const localTestimonies = testimonies.slice(0, 5);

const IndexTestimonies = () => {
  const [testimony, setTestimony] = useState(localTestimonies[0]);
  const [active, setActive] = useState(0);

  const setTest = (event) => {
    setActive(event.target.getAttribute("data-testimony"));
    setTestimony(localTestimonies[event.target.getAttribute("data-testimony")]);
  };

  return <div className="container">
    <h2>Nuestros clientes lo confirman</h2>
    <div className="cards">
      <TestimonyCard name={testimony.name} from={testimony.from} picture={testimony.picture} testimony={testimony.testimony} />

      <div className="btns">
        {Object.keys(localTestimonies).map(index => <span key={index} data-testimony={index} onClick={setTest} ></span>)}
      </div>
    </div>

    <style jsx> {`
      /* ----------------globals --------------- */
      .cards, .btns, span{
        display: flex;
        align-items: center;
      }
      .btns, span{
        justify-content: center;
      }

      /* ---------------- Normals ------------ */
      .container{
        margin: var(--margin-two) 0;
        padding: 0 var(--margin-one);
        text-align: center;
      }
      h2{
        margin-bottom: var(--margin-two);
      }
      .cards{
        flex-direction: column;
        justify-content: space-between;
        width: min(1200px, 100%);
        min-height: 320px;
        margin: 0 auto;
      }
      .btns{
        cursor: pointer;
        gap: 15px;
      }
      span{
        width: 15px;
        height: 15px;
      }
      span:before{
        content: "";
        width: 10px;
        height: 10px;
        background-color: var(--black20);
        border-radius: 50%;
      }
      span[data-testimony="${active}"]::before{
        background-color: var(--black)
      }
      `} </style>

  </div>;
};

export default IndexTestimonies;
