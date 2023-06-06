import React from 'react'
import 'tailwindcss/tailwind.css';
import '../login/login.css';
import '../../pages/pages.css';
import Button from '@/app/componentes/Button';
import Input from '@/app/componentes/Input';
import Label from '@/app/componentes/Label';
import Link from 'next/link';

function Login() {
  return (
    <section className="login">
      <div className="wrapper-login">
        <h2 className="title-main">Login</h2>
        <form className=''>
          <div className="wrapper-login__items">
            <Label
              htmlFor="username"
              textInfo="Informe user/e-mail" />
            <Input
              idInput="username"
              type="text" />
          </div>
          <div className="wrapper-login__items">
            <Label
              htmlFor="password"
              textInfo="Informe sua senha" />
            <Input
              idInput="password"

              type="password" />
          </div>
        </form>
        <div className="footer-login">
          <Button textInfo="Acessar" />
          <Link className="link-nav" href="/">
            Ver Filmes
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login
