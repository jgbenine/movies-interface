"use client";
import React, { useState } from "react";
import styles from "../../app/css/pages/Perfil.module.scss"
import "../../pages/pages.css";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";
import Button from "@/app/components/Button";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "../../app/globals.css";
import HeadEdit from "@/app/helpers/Head";

function Perfil() {
  const [isEmailDisabled, setEmailDisabled] = useState(true);

  const handleEmailClick = () => {
    setEmailDisabled(false);
  };

  return (
    <>
      <HeadEdit titlePage="Seu Perfil" descriptionPage="Pefil." />
      <Header />
      <section className={styles.perfil}>
        <main className="container mx-auto p-4">
          <div className={styles.perfilContent}>
            <div className={styles.perfilIntro}>
              <h3>Bem-vindo, ...</h3>
              <div className={styles.perfilUser}>
                <img
                  src="https://avatars.githubusercontent.com/u/32625236?v=4"
                  alt=""
                />
              </div>
              <Button textInfo="Alterar" />
            </div>
            <div className={styles.perfilData}>
              <h2 className="text-2xl py-4 font-thin">Dados do Pefil:</h2>
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
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default Perfil;
