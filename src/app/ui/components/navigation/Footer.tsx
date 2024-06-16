import React from 'react'
import styles from '../../css/components/Footer.module.scss'
import {Github, Clapperboard } from 'lucide-react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={`bg-gray-900 ${styles.footer}`}>
      <div className={`bg-gray-900 ${styles.footerWrapper}`}>
        <Link href="/" className={styles.logo}>
          <Clapperboard
            color='#fff'
          />
        </Link>
        <p className={styles.description}>
          Uma plataforma dedicada a fornecer informações sobre filmes.
          Os usuários podem explorar uma ampla variedade de conteúdos, desde os mais
          recentes lançamentos até os clássicos atemporais.
        </p>
        <ul className={styles.footerSocial}>
          <li>
            <Link
              href="https://github.com/jgbenine/"
              target='_blank'
              title='Github createBy'>
              <Github
                size={20}
                color='#ffffff62'
              />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>
        © 2023 · Claquete Filmes
      </p>
    </footer>
  )
}

export default Footer
