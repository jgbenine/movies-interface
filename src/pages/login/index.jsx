import React from "react";
import "tailwindcss/tailwind.css";
import styles from "../../app/css/Login.module.scss";
import '../../app/globals.css'
import Button from "@/app/componentes/Button";
import Input from "@/app/componentes/Input";
import Label from "@/app/componentes/Label";
import Link from "next/link";
import Footer from "@/app/componentes/Footer";
import Header from "@/app/componentes/Header";
import HeadEdit from "@/app/helpers/Head";

function Login() {
  return (
    <>
        <HeadEdit
        titlePage="Login"
        descriptionPage="Acesso."
      />
      <Header />
      <section className={styles.login}>
        <div className={styles.loginWrapper}>
          <h2 className="title-main">Login</h2>
          <div className={styles.loginContent}>
            <form className="">
              <div className={styles.loginBlock}>
                <Label htmlFor="username" textInfo="Informe user/e-mail" />
                <Input idInput="username" type="text" />
              </div>
              <div className={styles.loginBlock}>
                <Label htmlFor="password" textInfo="Informe sua senha" />
                <Input idInput="password" type="password" />
              </div>
            </form>
            <div className={styles.loginFooter}>
              <Button textInfo="Acessar" />
              <Link className="link-nav" href="/">
                Ver Filmes
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
