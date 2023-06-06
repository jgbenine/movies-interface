import React from 'react'
import '../perfil/perfil.css';
import '../../pages/pages.css'
import Input from '@/app/componentes/Input';
import Label from '@/app/componentes/Label';
import Button from '@/app/componentes/Button';

function Perfil() {
  return (
    <section>
      <h2 className="title-main">
        Perfil Usuário
      </h2>

      <div className="perfil-content">
        <div className="perfil-intro">
          <h3>Bem-vindo, João</h3>
          <div className="perfil-user">
            <img src="https://avatars.githubusercontent.com/u/32625236?v=4" alt="" />
          </div>
            <Button textInfo="Alterar" />
        </div>

        <div className="perfil-data">
          <h3>Dados do Pefil:</h3>
          <div className="perfil-grid">
            <div className="perfil-edit">
              <Label htmlFor="email" textInfo="E-mail" />
              <Input idInput="email" type="text" placeholder="email-ficticio@gmail.com" />
             <Button textInfo="Editar e-mail" />
            </div>
            <div className="perfil-edit">
              <Label htmlFor="nome" textInfo="Nome" />
              <Input idInput="nome" type="text" placeholder="João Guilherme" />
              <Button textInfo="Editar Nome" />
            </div>
            <div className="perfil-edit">
              <Label htmlFor="contato" textInfo="Contato" />
              <Input idInput="contato" type="number" placeholder="(41) 99234-****" />
              <Button textInfo="Editar Telefone" />
            </div>
            <div className="perfil-edit">
              <Label htmlFor="endereço" textInfo="Endereço" />
              <Input idInput="endereço" type="text" placeholder="Rua Candido de Abreu" />
              <Button textInfo="Editar Endereço" />
            </div>
            <div className="perfil-edit">
              <Label htmlFor="senha" textInfo="Senha" />
              <Input idInput="senha" type="password" placeholder="*********" />
              <Button textInfo="Editar Senha" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Perfil
