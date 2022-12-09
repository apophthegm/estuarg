import '@styles/globals.css'
import { ReactNode } from 'react'
import { Inter } from '@next/font/google'

interface IRootLayout {
  children: ReactNode
}

const interFont = Inter({
  adjustFontFallback: true,
  display: 'swap',
  preload: true,
  subsets: ['latin-ext'],
  weight: ['400', '500', '800']
})

export default function RootLayout ({ children }: IRootLayout): ReactNode {
  return (
    <html lang='es'>
      <head>
        <title>Viaja. Estudia. Conoce. Convertirte en lo que siempre has soñado. - EstuArg</title>
        <meta name='description' content='Haz tus sueños realidad, empieza hoy a construir tu futuro con la ayuda de Estuarg, la agencia estudiantil que te ayuda a realizar tus sueños y metas. Estudia en argentina, confía en Estuarg.' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta content='es' httpEquiv='Content-Language' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@estuarg' />
        <meta name='twitter:image' content='https://estuarg.com/vec.png' />
        <meta property='og:url' content='https://estuarg.com/' />
        <meta property='og:title' content='Viaja. Estudia. Conoce. Convertirte en lo que siempre has soñado. - EstuArg' />
        <meta property='og:image' content='https://estuarg.com/vec.png' />
        <meta property='og:description' content='Haz tus sueños realidad, empieza hoy a construir tu futuro con la ayuda de Estuarg, la agencia estudiantil que te ayuda a realizar tus sueños y metas. Estudia en argentina, confía en Estuarg.' />
        <meta property='og:type' content='website' />
        <meta property='fb:app_id' content='643001603487318' />
        <meta name='apple-mobile-web-app-title' content='Viaja. Estudia. Conoce. Convertirte en lo que siempre has soñado. - EstuArg' />
        <meta name='robots' content='index, follow' />
        <meta charSet='utf-8' />

        <link rel='apple-touch-icon' sizes='57x57' href='https://estuarg.com/logo57.png' fetchpriority='low' />
        <link rel='apple-touch-icon' sizes='60x60' href='https://estuarg.com/logo60.png' fetchpriority='low' />
        <link rel='apple-touch-icon' sizes='72x72' href='https://estuarg.com/logo72.png' fetchpriority='low' />
        <link rel='apple-touch-icon' sizes='76x76' href='https://estuarg.com/logo76.png' fetchpriority='low' />
        <link rel='apple-touch-icon' sizes='114x114' href='https://estuarg.com/logo114.png' fetchpriority='low' />
        <link rel='apple-touch-icon' sizes='120x120' href='https://estuarg.com/logo120.png' fetchpriority='low' />
        <link rel='apple-touch-icon' sizes='144x144' href='https://estuarg.com/logo144.png' fetchpriority='low' />
        <link rel='apple-touch-icon' sizes='152x152' href='https://estuarg.com/logo152.png' fetchpriority='low' />
        <link rel='apple-touch-icon' sizes='180x180' href='https://estuarg.com/logo180.png' fetchpriority='low' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        <link href='https://estuarg.com/' rel='canonical' />
        <meta httpEquiv='expires' content='86400' />
      </head>
      <body className={interFont.className}>
        {children}
      </body>
    </html>
  )
}
