import Cartaz from '@/app/componentes/Cartaz'
import React from 'react'

function Filmes() {
  return (
    <section>
      <h2 className="title-main">Filmes</h2>
      <p className="description">Selecione um filme da lista para assistir</p>
      <div className="mt-2 grid grid-cols-5">
        <Cartaz
          backgroundImage="/assets/cartaz-img1.jpg"
          titleMovie="Joker"
          sinceFilme="2022"
          director="Todd"
        />


        <Cartaz
          backgroundImage="/assets/cartaz-img2.jpg"
          titleMovie="Pulp Fiction"
          sinceFilme="1994"
          director="Quentin Tarantino"
        />

      </div>
    </section>
  )
}

export default Filmes
