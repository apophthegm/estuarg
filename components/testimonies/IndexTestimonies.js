import { Icon } from "@iconify/react";
import testimonies from "db/testimonies";
import { useEffect, useState } from "react";
import TestimonyCard from "./TestimonyCard";

const localTestimonies = testimonies.slice(0, 5);

const IndexTestimonies = () => {
  const [testimony, setTestimony] = useState(localTestimonies[0]);
  const [active, setActive] = useState(0);

  const [visible, setVisible] = useState(false);

  const effect = (num) => {
    setVisible(false);
    setTimeout(() => {
      setActive(num);
      setTestimony(localTestimonies[num]);
    }, 300);
  };

  const next = () => {
    if (active >= 0 && active < localTestimonies.length - 1) {
      effect(active + 1);
    }
  };

  const prev = () => {
    if (active > 0 && active <= localTestimonies.length - 1) {
      effect(active - 1);
    }
  };

  const setTest = (event) => {
    const num = event.target.getAttribute("data-testimony");
    effect(num);
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible("visible");
    }, 300);
  }, [visible]);

  return <div className="container">
    <h2>Nuestros clientes lo confirman</h2>
    <div className="cards">
        <div className={visible ? `card ${visible}` : "card"}>
          <TestimonyCard name={testimony.name} from={testimony.from} picture={testimony.picture} testimony={testimony.testimony}/>
        </div>

      <div className="btns">
        <Icon icon="bi:arrow-left" color="#181616" height={32} style={{ cursor: "pointer" }} onClick={prev} />
        {Object.keys(localTestimonies).map(index => <span key={index} data-testimony={index} onClick={setTest} ></span>)}
        <Icon icon="bi:arrow-left" color="#181616" height={32} rotate={2} style={{ cursor: "pointer" }} onClick={next} />
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
      .card{
        opacity: 0;
        transition: opacity 300ms ease;
      }
      .${visible}{
        opacity: 1;
      }
      .btns{
        gap: 15px;
        -webkit-tap-highlight-color: transparent;
      }
      span{
        width: 15px;
        height: 15px;
        cursor: pointer;
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
