'use client'
// import '../filmes/filmes.css'
import Cartaz from '@/app/componentes/Cartaz'
import React from 'react'


function Filmes() {
  return (
    <section className="container">
      <div className="cartaz-content">
        <h2 className="title-main">Novidades</h2>
        <p className="description">Selecione um filme da lista para assistir</p>
        <div className="grid-filmes">
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
          <Cartaz
            backgroundImage="/assets/cartaz-img3.jpg"
            titleMovie="Django Livre"
            sinceFilme="2012"
            director="Quentin Tarantino"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img4.jpg"
            titleMovie="Ilha do Medo"
            sinceFilme="2010"
            director="Martin Scorsese"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img5.jpg"
            titleMovie="Clube da Luta"
            sinceFilme="1999"
            director="David Fincher"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img6.jpg"
            titleMovie="Interstelar"
            sinceFilme="2014"
            director="Christopher Nolan"
          />
        </div>
      </div>
    </section>
  )
}

export default Filmes
