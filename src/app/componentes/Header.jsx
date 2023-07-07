import React from 'react'
import { Search, UserCircle, LogIn, Clapperboard, Menu } from 'lucide-react'
import Link from 'next/link'
import styles from '../css/Header.module.scss'

function Header() {
  const [menuMobile, setMenuMobile] = React.useState(false);


  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/" title='Nin9 | Filmes'>
            <Clapperboard size={22} color='#e3e3e3' />
          </Link>
        </div>
        <nav className={styles.nav}>
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
        </nav>
        <div className={styles.headerLinks}>
          <Link href="/login" title='Login'>
            <LogIn size={18} />
          </Link>
          <Link href="/perfil" title='Perfil'>
            <UserCircle size={18} />
          </Link>
          <Search size={18} />
          <button className={styles.btnMobile}>
            <Menu color='#ffff00' size={21} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
