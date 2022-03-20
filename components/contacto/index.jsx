import { Icon } from "@iconify/react";

const Contacto = () => {
  return (
    <main>
      <section>
        <h2>Contacto</h2>
        <div className="linkLabel">
          <span>
            <Icon icon="clarity:phone-handset-solid" color="#63adf2" height="28" />
          </span>
          <a href="https://wa.me/573122779915" target="_blank" rel="noopener noreferrer">320 490 1742 (Colombia)</a>
        </div>
        <div className="linkLabel">
          <span>
            <Icon icon="clarity:phone-handset-solid" color="#63adf2" height="28" />
          </span>
          <a href="https://wa.me/5491127678532" target="_blank" rel="noopener noreferrer">9 11 7641-3099 (Argentina)</a>
        </div>
        <div className="linkLabel">
          <span>
            <Icon icon="bx:bxl-telegram" color="#63adf2" height="28" />
          </span>
          <a href="https://t.me/estuarglatam" target="_blank" rel="noopener noreferrer">/estuarglatam</a>
        </div>
        <div className="linkLabel">
          <span>
            <Icon icon="clarity:email-solid" color="#63adf2" height="28" />
          </span>
          <a href="mailto:info@estuarg.com" target="_blank" rel="noopener noreferrer">info@estuarg.com</a>
        </div>
        <div className="linkLabel">
          <span>
            <Icon icon="fa-brands:instagram-square" color="#63adf2" height="28" />
          </span>
          <a href="https://instagram.com/estuarglatam" target="_blank" rel="noopener noreferrer">/estuarglatam</a>
        </div>
        <div className="linkLabel">
          <span>
            <Icon icon="fluent:globe-location-24-filled" color="#63adf2" height="28" />
          </span>
          <a style={{ maxWidth: "25ch" }} href="https://goo.gl/maps/hBYogRumQ6HfQDYHA" target="_blank" rel="noopener noreferrer">Uriburú 1662 piso 2, Recoleta. Buenos Aires - Argentina.</a>
        </div>
      </section>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.276974833472!2d-58.3953743!3d-34.5897645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca986e15ad39%3A0x4421ae7dca2adf2!2sPres.%20Jos%C3%A9%20Evaristo%20Uriburu%201661%2C%20C1114%20AAQ%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sco!4v1644683089961!5m2!1ses!2sco" width="100%" height="auto" style={{ border: 0, width: "100%", height: "100%" }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      {/* Styles */}
      <style jsx>
        {`
          main{
            width: min(1200px, 100%);
            margin: var(--margin-two) auto;
            display: grid;
            justify-items: center;
            align-items: center;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: var(--margin-one) var(--margin-two);
          }
          section{
            width: fit-content;
          }
          h2{
            text-align: center;
            margin-bottom: var(--padding-one);
          }
          .linkLabel{
            display: flex;
            align-items: center;
            margin-bottom: var(--padding-one);
            gap: var(--padding-one);
          }
          .map{
            min-height: 400px;
            width: 90%;
            display: inline-grid;
          }
        `}
      </style>
    </main>
  );
};
export default Contacto;
