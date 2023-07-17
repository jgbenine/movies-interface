import React from "react";
import styles from "../app/css/404.scss";
import "../app/globals.css";

function NotFound() {
  return (
    <section className="notFound">
      <section className="sectionTop">
        <div className="bg-red"></div>
        <div className="bg-blue"></div>
        <div className="bg-shell"></div>
        <div className="bg-purple"></div>
        <div className="bg-light-blue"></div>
        <div className="bg-yellow"></div>
        <div className="bg-green"></div>
      </section>
      <section className="sectionMiddle">
        <div className="bg-blue"></div>
        <div className="bg-black"></div>
        <div className="bg-purple"></div>
        <div className="bg-black"></div>
        <div className="bg-white"></div>
        <div className="bg-blue"></div>
        <div className="bg-black"></div>
      </section>
      <section className="sectionBottom">
        <div className="bg-dark-blue"></div>
        <div className="bg-blue"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-dark-blue"></div>
        <div className="bg-white"></div>
      </section>
      <section className="sectionContent">
        <div className="message-container">
          <p className="message">Sem Sinal</p>
          <p className="message2">Rota não encontrada.. Infelizmente essa rota ainda não está disponível, acesse outra página.</p>
        </div>
      </section>
    </section>
  );
}

export default NotFound;
