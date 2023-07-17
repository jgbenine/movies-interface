import React from "react";
import styles from "../app/css/404.scss";
import "../app/globals.css";
import Link from "next/link";
import { Home } from "lucide-react";

function NotFound() {
  return (
    <>
      <section className="notFound">
        <div className="notFound-filter"></div>
        <section className="sectionTop">
          <div className="bg-red"></div>
          <div className="bg-light-blue"></div>
          <div className="bg-blue"></div>
          <div className="bg-shell"></div>
          <div className="bg-purple"></div>
          <div className="bg-green"></div>
          <div className="bg-yellow"></div>
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
            <p className="message">Not Found</p>
            <p className="message2">
              Rota não encontrada.. Infelizmente essa rota ainda não está
              disponível, acesse outra página.
            </p>
              <Link href="/" className="notFound-link">
                <Home size={20} color="#e3e3e3"  />
              </Link>
          </div>
        </section>
      </section>
      <div className="interference"></div>
    </>
  );
}

export default NotFound;
