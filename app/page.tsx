import { ReactNode } from 'react'
import { Header } from '@components/header'
import { Hero } from '@components/hero'
import { AboutSection } from '@components/home/about-section'

export default function HomePage(): ReactNode {
  return (
    <div className='global__container'>
      <Header />
      <Hero />
      <AboutSection />
    </div>
  )
}
