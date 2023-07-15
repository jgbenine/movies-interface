"use client";
import React, { useState } from "react";
import styles from "../../app/css/Perfil.module.scss";
import "../../pages/pages.css";
import Input from "@/app/componentes/Input";
import Label from "@/app/componentes/Label";
import Button from "@/app/componentes/Button";
import Link from "next/link";
import Header from "@/app/componentes/Header";
import Footer from "@/app/componentes/Footer";
import '../../app/css/style.scss'

function Perfil() {
  const [isEmailDisabled, setEmailDisabled] = useState(true);
  const [isNomeDisabled, setNomeDisabled] = useState(true);
  const [isContatoDisabled, setContatoDisabled] = useState(true);
  const [isEnderecoDisabled, setEnderecoDisabled] = useState(true);
  const [isSenhaDisabled, setSenhaDisabled] = useState(true);

  const handleEmailClick = () => {
    setEmailDisabled(false);
  };

  const handleNomeClick = () => {
    setNomeDisabled(false);
  };

  const handleContatoClick = () => {
    setContatoDisabled(false);
  };

  const handleEnderecoClick = () => {
    setEnderecoDisabled(false);
  };

  const handleSenhaClick = () => {
    setSenhaDisabled(false);
  };

  return (
    <>
      <Header />
      <section className={styles.perfil}>
        <main className="container mx-auto p-4">
          <div className={styles.perfilContent}>
            <div className={styles.perfilIntro}>
              <h3>Bem-vindo, João</h3>
              <div className={styles.perfilUser}>
                <img
                  src="https://avatars.githubusercontent.com/u/32625236?v=4"
                  alt=""
                />
              </div>
              <Button textInfo="Alterar" />
            </div>

            <div className={styles.perfilData}>
              <h3>Dados do Pefil:</h3>
              <div className={styles.perfilGrid}>
                <div className={styles.perfilEdit}>
                  <Label htmlFor="email" textInfo="E-mail" />
                  <Input
                    idInput="email"
                    type="text"
                    placeholder="email-ficticio@gmail.com"
                    disabled={isEmailDisabled}
                  />
                  <Button textInfo="Editar e-mail" onClick={handleEmailClick} />
                </div>
                <div className="perfil-edit">
                  <Label htmlFor="nome" textInfo="Nome" />
                  <Input
                    idInput="nome"
                    type="text"
                    placeholder="João Guilherme"
                    disabled={isNomeDisabled}
                  />
                  <Button textInfo="Editar Nome" onClick={handleNomeClick} />
                </div>
                <div className="perfil-edit">
                  <Label htmlFor="contato" textInfo="Contato" />
                  <Input
                    idInput="contato"
                    type="number"
                    placeholder="(41) 99234-****"
                    disabled={isContatoDisabled}
                  />
                  <Button
                    textInfo="Editar Telefone"
                    onClick={handleContatoClick}
                  />
                </div>
                <div className="perfil-edit">
                  <Label htmlFor="endereço" textInfo="Endereço" />
                  <Input
                    idInput="endereço"
                    type="text"
                    placeholder="Rua Candido de Abreu"
                    disabled={isEnderecoDisabled}
                  />
                  <Button
                    textInfo="Editar Endereço"
                    onClick={handleEnderecoClick}
                  />
                </div>
                <div className="perfil-edit">
                  <Label htmlFor="senha" textInfo="Senha" />
                  <Input
                    idInput="senha"
                    type="password"
                    placeholder="*********"
                    disabled={isSenhaDisabled}
                  />
                  <Button textInfo="Editar Senha" onClick={handleSenhaClick} />
                </div>
              </div>
            </div>
            <Link className="link-nav" href="/">
              Voltar para home
            </Link>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default Perfil;
