'use client'
import '../filmes/filmes.css'
import Cartaz from '@/app/componentes/Cartaz'
import React, { useState } from 'react'
import Link from 'next/link';


function Filmes() {
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? '' : dropdownName);
  };

  return (
    <section className="container">
      <nav className="cartaz-menu">
        <div className="cartaz-menu__wrapper">
          <div className={`cartaz-category ${activeDropdown === 'filmes' ? 'active' : ''}`} onClick={() => toggleDropdown('filmes')}>
            Filmes
            <ul className={activeDropdown === 'filmes' ? 'flex' : 'hidden'}>
              <li>
                <a href=""> Ação</a>
              </li>
              <li>
                <a href=""> Terror</a>
              </li>
              <li>
                <a href=""> Suspense</a>
              </li>
              <li>
                <a href=""> Comédia</a>
              </li>
              <li>
                <a href=""> Sci-fi</a>
              </li>
            </ul>
          </div>
          <div className={`cartaz-category ${activeDropdown === 'series' ? 'active' : ''}`} onClick={() => toggleDropdown('series')}>
            Series
            <ul className={`${activeDropdown === 'series' ? 'flex' : 'hidden'}`}>
              <li>
                <a href=""> Terror</a>
              </li>
              <li>
                <a href=""> Ação</a>
              </li>
              <li>
                <a href=""> Comédia</a>
              </li>
              <li>
                <a href=""> Sci-fi</a>
              </li>
              <li>
                <a href=""> Suspense</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="cartaz-menu__link">
          <Link className="link-nav" href="/login">
            Realizar Login
          </Link>
          <Link className="link-nav" href="/perfil">
            Perfil
          </Link>
        </div>
      </nav>

      <div className="cartaz-content">
        <h2 className="title-main">Assistir Filmes</h2>
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
          <Cartaz
            backgroundImage="/assets/cartaz-img7.jpg"
            titleMovie="Constantine"
            sinceFilme="2005"
            director="Francis Lawrence"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img8.jpg"
            titleMovie="Watchmen"
            sinceFilme="2009"
            director="Zack Snyder"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img9.jpg"
            titleMovie="Matrix"
            sinceFilme="1999"
            director="Lana Wachowski"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img11.jpg"
            titleMovie="Mad Max"
            sinceFilme="2015"
            director="George Miller"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img10.jpg"
            titleMovie="Até o último Homem"
            sinceFilme="2017"
            director="Mel Gibson"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img12.jpg"
            titleMovie="Sniper Americano"
            sinceFilme="2014"
            director="Clint Eastwood"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img13.jpg"
            titleMovie="Os Imperdoáveis"
            sinceFilme="1992"
            director="Clint Eastwood"
          />
        </div>
      </div>
    </section>
  )
}

export default Filmes
