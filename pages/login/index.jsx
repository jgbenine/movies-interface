import React from 'react'
import 'tailwindcss/tailwind.css';
import Button from '@/app/componentes/Button';
import Input from '@/app/componentes/Input'
import Label from '@/app/componentes/Label'

function Login() {
  return (
    <section className="border border-zinc-950">
    <div className="w-[650px] p-5 flex flex-col">
      <h2 className="title-main">Login</h2>
      <form>
        <div className="flex flex-col gap-2 mt-4">
          <Label htmlFor="username" textInfo="Informe user/e-mail" />
          <Input idInput="username" type="text" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <Label htmlFor="username" textInfo="Informe sua senha" />
          <Input idInput="username" type="password" />
        </div>
      </form>
      <Button textInfo="Acessar"/>
    </div>
    </section>
  )
}

export default Login
