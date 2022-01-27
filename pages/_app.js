import "styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <meta name="theme-color" content="#181616" />
      <meta name="msapplication-TileColor" content="#181616)" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="Content-Language" content="es" />
      <title>Estuarg: Estudia en Argentina</title>
      <meta name="description" content="Somos una empresa vanguardista, liderada por jóvenes que brindan ayuda a todas esas personas que deseen estudiar en Argentina. ¡Tú preocúpate de luchar por tus sueños y nosotros de ayudarte a conseguirlos!" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;
