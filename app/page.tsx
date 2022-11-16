import { ReactNode } from 'react'
import { Header } from '@components/header'
import { Hero } from '@components/hero'

export default function HomePage(): ReactNode {
  return (
    <div className='global__container'>
      <Header />
      <Hero />
    </div>
  )
}
