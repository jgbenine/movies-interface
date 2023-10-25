import { useEffect, useState } from "react";
import {
  Search,
  UserCircle,
  LogIn,
  Clapperboard,
  Menu,
  Play,
  Home,
} from "lucide-react";
import Link from "next/link";
import styles from "../../css/components/Header.module.scss";
import { usePathname } from "next/navigation";

function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  const pathname = usePathname();

  function activeMenu(hrefLink) {
    return pathname === hrefLink;
  }

  function toggleMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 680;
      if (!isMobile) {
        setMenuMobile(true);
      } else {
        setMenuMobile(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav>
          <div className={styles.logo}>
            <Link href="/" title="Claquete | Filmes">
              <Clapperboard size={22} color="#e3e3e3" />
            </Link>
          </div>
          {menuMobile && (
            <ul className={`${styles.headerNav} slide-right`}>
              <li className={activeMenu("/") ? "activeItemMenu" : ""}>
                <Home size={15} color="#e3e3e3" />
                <Link href="/">Home</Link>
              </li>
              <li className={activeMenu("/filmes") ? "activeItemMenu" : ""}>
                <Play size={15} color="#e3e3e3" />
                <Link href="/filmes">Filmes</Link>
              </li>
              <li className={activeMenu("/series") ? "activeItemMenu" : ""}>
                <Play size={15} color="#e3e3e3" />
                <Link href="/series">Series</Link>
              </li>
              <li className={activeMenu("/faq") ? "activeItemMenu" : ""}>
                <Play size={15} color="#e3e3e3" />
                <Link href="/faq">FAQ</Link>
              </li>
              <li className={activeMenu("/about") ? "activeItemMenu" : ""}>
                <Play size={15} color="#e3e3e3" />
                <Link href="/about">Sobre</Link>
              </li>
            </ul>
          )}
        </nav>
        <div className={styles.headerLinks}>
          <Link href="/search" title="Login">
            <Search size={18} />
          </Link>
          <Link href="/perfil" title="Perfil">
            <UserCircle size={18} />
          </Link>
          <Link href="/login" title="Login">
            <LogIn size={18} />
          </Link>

          <button className={styles.btnMobile} onClick={toggleMenuMobile}>
            <Menu color="#ffff00" size={21} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
