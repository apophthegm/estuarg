const Index = () => {
  return (
    <main>
      <h2>Preguntas frecuentes</h2>
      <p>
        ¡Hola! Sabemos que puedes llegar a tener inquietudes sobre todo el proceso que estaremos llevando a cabo si decides tomarnos como tu acompañante de viaje en esta nueva travesía que deseas emprender, por esto, hemos creado este apartado, para despejar todas esas dudas que tengas sobre nosotros. Si no encuentras la solución a tu inquietud, no dudes en escribirnos por alguno de nuestros canales de atención para así poder resolverla lo más pronto posible y, ¿Por qué no? Agregarla a esta sección, así, las personas que tengan tú mismo interrogante podrán encontrar aquí la solución, todo gracias a ti.
      </p>
      <div>
        <h5>¿Qué sigue una vez me ponga en contacto con ustedes?</h5>
        <p>
          Una vez nos contactes te facilitaremos todos nuestros servicios para que seas tú quien elija esos que son de tu interés. A continuación pactamos el precio y empezaríamos a trabajar. Recuerda que todo este proceso se te asignará un asesor el cual será el encargado de ayudarte y acompañarte.
        </p>
      </div>
      <div>
        <h5>¿Qué servicios ofrecen?</h5>
        <p>
          En estuarg, no contamos con planes, pues sabemos que no todos están interesados en adquirir paquetes predefinidos, por eso, en EstuArg tú eliges qué servicios deseas y nosotros te brindamos ayuda solo en eso que deseas. Si te interesa conocer todos nuestros servicios, te recomendamos <a href="https://drive.google.com/uc?id=1-9tkaKO1LXOL6OKoQlXFoPvnrlDwkX2I&export=download&authuser=0"> <u>descargar nuestra guía</u></a> que contiene todos los servicios ofrecidos y la descripción de cada uno.
        </p>
      </div>
      <div>
        <h5>No tengo claro qué universidad es mejor para la carrera que quiero estudiar.</h5>
        <p>
          Si no sabes qué universidad elegir, te recomendamos que te bases en el prestigio o reconocimientos que ha ganado la universidad, para hacer esto, cuentas con herramientas como Google, la misma página de la U, entre otros. También podrías elegir la que se te haga más atractiva económicamente hablando. Al momento de elegir, todo depende de ti y tus necesidades.
        </p>
      </div>
      <div>
        <h5>¿Cuánto tiempo se demoran en responderme?</h5>
        <p>
          Nuestros asesores intentan responder en el menor tiempo posible, todo esto para brindar la mejor experiencia a nuestros clientes. Una vez nos escribas, te responderán apenas se encuentren disponibles. Ten en cuenta que ellos, al igual que tú, son personas, por tanto, trátalos con respeto, ellos te lo agradecerán.
        </p>
      </div>
      <div>
        <h5>¿Cuáles son nuestros métodos de pago?</h5>
        <p>
          Actualmente contamos con dos métodos de pago internacional, vía PayPal y por transferencia bancaria. Al momento de decidirte por uno, el asesor que te atienda te facilitará los datos que necesites para realizar el pago.
        </p>
      </div>
      <div>
        <h5>¿Dónde estamos ubicados?</h5>
        <p>
          Estamos ubicados en Uriburu 1661 piso 2. Recoleta. Buenos Aires - Argentina (A 7 cuadras de la facultad de medicina de la UBA y a 1 cuadra del cementerio de recoleta).
        </p>
      </div>
      <style jsx>{`
        main{
          width: min(1200px, 100%);
          margin: var(--margin-two) auto;
          text-align: justify;
          padding: 0 var(--margin-one);
        }
        h2{
          text-align: center;
          margin-bottom: var(--margin-one);
        }
        p{
          margin-bottom: calc(var(--margin-one) + 10px);
        }
        h5{
          margin-bottom: var(--padding-one)
        }
        a{
          color: var(--color-secondary);
          font-weight: 600;
        }
      `}</style>
    </main>
  );
};
export default Index;
