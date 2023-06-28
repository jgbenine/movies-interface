import React from 'react'
import { Search } from 'lucide-react'
import styles from '../css/Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <p>
            Filmes
          </p>
        </div>
        <ul className={styles.headerLinks}>
          <li><a href="">Filmes</a></li>
          <li><a href="">Séries</a></li>
          <li><a href="">Episódios</a></li>
          <Search />
        </ul>


      </div>
    </header>
  )
}

export default Header
