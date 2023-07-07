import React from 'react'
import { Search, UserCircle, LogIn, Clapperboard, Menu, Play } from 'lucide-react'
import Link from 'next/link'
import styles from '../css/Header.module.scss'

function Header() {
  const [menuMobile, setMenuMobile] = React.useState(false);

  function toggleMenuMobile() {
    setMenuMobile(!menuMobile);
  }
  
  React.useEffect(() => {
    const mediaQueryMenu = window.matchMedia('(min-width: 680px)');

    function handleResize(e) {
      if (mediaQueryMenu.matches) {
        setMenuMobile(true)
      }
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/" title='Nin9 | Filmes'>
            <Clapperboard size={22} color='#e3e3e3' />
          </Link>
        </div>
        <nav className={styles.nav}>
          {menuMobile && (
            <ul className={styles.headerNav} >
              <li>
                <Play size={15} color='#e3e3e3' />
                <Link href="/filmes">
                  Filmes
                </Link>
              </li>
              <li>
                <Play size={15} color='#e3e3e3' />
                <Link href="/series">
                  Séries
                </Link>
              </li>
              <li>
                <Play size={15} color='#e3e3e3' />
                <Link href="/episodios">
                  Episódios
                </Link>
              </li>
            </ul>
          )}
        </nav>
        <div className={styles.headerLinks}>
          <Link href="/login" title='Login'>
            <LogIn size={18} />
          </Link>
          <Link href="/perfil" title='Perfil'>
            <UserCircle size={18} />
          </Link>
          <Search size={18} />
          <button className={styles.btnMobile} onClick={toggleMenuMobile}>
            <Menu color='#ffff00' size={21} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
