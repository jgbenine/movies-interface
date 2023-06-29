'use client'
import Novidades from '../pages/novidades'
import SliderDry from './componentes/SliderDry'

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center w-full">
      <SliderDry />
      <Novidades />
    </main>
  )
}
