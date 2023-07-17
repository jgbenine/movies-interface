import React from 'react'
import { Search, UserCircle, LogIn, Clapperboard, Menu, Play, Home } from 'lucide-react'
import Link from 'next/link'
import styles from '../css/Header.module.scss'

function Header() {
  const [menuMobile, setMenuMobile] = React.useState(false);

  function toggleMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  React.useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 680;
      if(!isMobile){
        setMenuMobile(true)
      }else{
        setMenuMobile(false)
      }
    }
    handleResize(); 
    window.addEventListener('resize', handleResize);

  }, []);
  
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
                <Home size={15} color='#e3e3e3' />
                <Link href="/">
                  Home
                </Link>
              </li>
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
