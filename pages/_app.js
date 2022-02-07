import "styles/globals.css";
import Head from "next/head";
import Footer from "components/footer/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Script strategy="afterInteractive" src={"https://www.googletagmanager.com/gtag/js?id=G-9QMCR9WS0E"} />
    <Script strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-9QMCR9WS0E');
      `}
    </Script>
    <Head>
      <meta name="theme-color" content="#181616" />
      <meta name="msapplication-TileColor" content="#181616)" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="Content-Language" content="es" />
      <title>Estuarg | Estudia en Argentina</title>
      <meta name="description" content="Asesoría para viajar y estudiar en Argentina. Somos una empresa liderada por jóvenes que brindan ayuda a todas las personas que deseen estudiar en Argentina." />
      <link rel="shortcut icon" href="https://estuarg.com/favicon.ico" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@estuarg"></meta>
      <meta name="twitter:image" content="https://estuarg.com/logos/twitter.png"></meta>
      <meta property="og:url" content="https://estuarg.com/"></meta>
      <meta property="og:title" content="EstuArg | Estudiar en Argentina"></meta>
      <meta property="og:image" content="https://estuarg.com/logos/logo250.png"></meta>
      <meta property="og:description" content="Asesoría para viajar y estudiar en Argentina. Somos una empresa liderada por jóvenes que brindan ayuda a todas las personas que deseen estudiar en Argentina."></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="fb:app_id" content="643001603487318" />
      <meta name="apple-mobile-web-app-title" content="EstuArg"></meta>
      <meta name="robots" content="index, follow"></meta>
      <link rel="apple-touch-icon" sizes="57x57" href="https://estuarg.com/logos/logo57.png" importance="low"></link>
      <link rel="apple-touch-icon" sizes="60x60" href="https://estuarg.com/logos/logo60.png" importance="low"></link>
      <link rel="apple-touch-icon" sizes="72x72" href="https://estuarg.com/logos/logo72.png" importance="low"></link>
      <link rel="apple-touch-icon" sizes="76x76" href="https://estuarg.com/logos/logo76.png" importance="low"></link>
      <link rel="apple-touch-icon" sizes="114x114" href="https://estuarg.com/logos/logo114.png" importance="low"></link>
      <link rel="apple-touch-icon" sizes="120x120" href="https://estuarg.com/logos/logo120.png" importance="low"></link>
      <link rel="apple-touch-icon" sizes="144x144" href="https://estuarg.com/logos/logo144.png" importance="low"></link>
      <link rel="apple-touch-icon" sizes="152x152" href="https://estuarg.com/logos/logo152.png" importance="low"></link>
      <link rel="apple-touch-icon" sizes="180x180" href="https://estuarg.com/logos/logo180.png" importance="low"></link>
      <link rel="canonical" href="https://estuarg.com/" />
      <meta name="keywords" content="Asesoaria, viajar, argentina, estuarg, educacion en argentina, viajar a argentina, estudiar en argentina, educarse en argentina, universidades en argentina, estudiar en universidades argentinas, asesorias para viajar a argentina, asesorias para estudiar a argentina, asesorias para viajar y estudiar a argentina, asesorias para viajar en argentina, asesorias para estudiar en argentina, asesorias para viajar y estudiar en argentina"></meta>
      <meta httpEquiv="expires" content="86400" />
    </Head>
    <Component {...pageProps} />
    <Footer />
  </>
  );
}

export default MyApp;
