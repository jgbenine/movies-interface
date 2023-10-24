import React from "react";
import styles from "../app/ui/css/pages/404.scss";
import Link from "next/link";
import { Home } from "lucide-react";
import HeadEdit from "@/app/ui/components/helpers/Head";

function NotFound() {
  return (
    <>
       <HeadEdit titlePage="Página não encontrada" />
      <section className="notFound">
        <div className="notFound-filter"></div>
        <section className="sectionTop">
          <div className="bg-white"></div>
          <div className="bg-shell"></div>
          <div className="bg-light-blue"></div>
          <div className="bg-green"></div>
          <div className="bg-yellow"></div>
          <div className="bg-red"></div>
          <div className="bg-purple"></div>
          <div className="bg-blue"></div>
        </section>
        <section className="sectionMiddle">
          <div className="bg-blue"></div>
          <div className="bg-white"></div>
          <div className="bg-purple"></div>
          <div className="bg-black"></div>
          <div className="bg-white"></div>
          <div className="bg-blue"></div>
          <div className="bg-black"></div>
        </section>
        <section className="sectionBottom">
          <div className="bg-shell"></div>
          <div className="bg-dark-blue"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-dark-blue"></div>
          <div className="bg-white"></div>
        </section>
        <section className="sectionContent">
          <div className="message-container">
            <p className="message">Página indisponível </p>
            <p className="message2">
              Rota não encontrada.. Infelizmente essa rota ainda não foi 
              construida, navegue por outras páginas.
            </p>
              <Link href="/" className="notFound-link">
                <Home size={20} color="#e3e3e3"  />
                voltar
              </Link>
          </div>
        </section>
      </section>
      <div className="interference"></div>
    </>
  );
}

export default NotFound;
