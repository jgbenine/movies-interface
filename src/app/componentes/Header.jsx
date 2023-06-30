import React from 'react'
import { Search, UserCircle, LogIn, Clapperboard } from 'lucide-react'
import Link from 'next/link'
import styles from '../css/Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/" title='JG | Filmes'>
            <Clapperboard size={22} color='#e3e3e3' />
          </Link>
        </div>
        <ul className={styles.headerNav}>
          <li>
            <Link href="/filmes">Filmes</Link>
          </li>
          <li>
            <Link href="/series">Séries</Link>
          </li>
          <li>
            <Link href="/episodios">Episódios</Link>
          </li>
        </ul>

        <div className={styles.headerMenu}>
          <Link href="/login" title='Login'>
            <LogIn size={18} />
          </Link>
          <Link href="/perfil" title='Perfil'>
            <UserCircle size={18} />
          </Link>
          <Search size={18} />
        </div>
      </div>
    </header>
  )
}

export default Header
