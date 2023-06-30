import React from 'react'
import styles from '../css/Footer.module.scss'
import { AtSign, Github, Linkedin, Clapperboard } from 'lucide-react'
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
            <Link href="" title='Email'>
              <AtSign
                size={20}
                color='#ffffff62'
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/jaogui/"
              target='_blank'
              title='Github'>
              <Github
                size={20}
                color='#ffffff62'
              />
            </Link>
          </li>
          <li>
            <Link href="" title='Linkedin'>
              <Linkedin
                size={20}
                color='#ffffff62'
              />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>
        © 2023 · JG · Alguns os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
