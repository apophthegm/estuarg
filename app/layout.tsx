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
  weight: ['400', '600', '700']
})

export default function RootLayout({ children }: IRootLayout): ReactNode {
  return (
    <html lang='es'>
      <head>
        <title>Estuarg</title>
        <meta name='description' content='Haz tus sueños realidad, empieza hoy a construir tu futuro con la ayuda de Estuarg, la agencia estudiantil que te ayuda a realizar tus sueños y metas. Estudia en argentina, confía en Estuarg.' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </head>
      <body className={interFont.className}>{children}</body>
    </html>
  )
}
