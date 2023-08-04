import React, { useState } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeadEdit from "@/app/helpers/Head";
import { PlusIcon, MinusIcon } from "lucide-react";
import styles from "../../../src/app/css/pages/Faq.module.scss";
import "../../app/globals.css";

function Faq() {
  const [activeQuest, setActiveQuest] = useState(false);

  function handleActiveQuest(index) {
    setActiveQuest((prevActiveQuest) =>
      prevActiveQuest === index ? null : index
    );
  }

  const dataQuest = [
    {
      titleQuest: "Objetivo da plataforma?",
      answerQuest:
        "Tem como objetivo prover informações sobre filmes e series. Atualmente sem disponibilidade de transmissão do conteúdo .",
    },
    {
      titleQuest: "De onde vem as informações do conteúdo?",
      answerQuest: (
          <span>
            Essas informações estão centralizadas em uma API onde não temos
            controle total do conteúdo.

            <a href="https://developer.themoviedb.org/" target="_blank"> Leia a documentação </a>
          </span>
      ),
    },
    {
      titleQuest: "Status",
      answerQuest: "Em desenvolvimento.",
    },
  ];

  return (
    <>
      <HeadEdit titlePage="FAQ" descriptionPage="Tire sua dúvida conosco." />
      <Header />
      <section className={styles.faq}>
        <div className="container">
          <h2 className="title-main">Perguntas frequentes</h2>
          <p className="description">
            Tire suas dúvidas, as perguntas realizadas com mais frequência.
          </p>
          <div className={styles.faqContent}>
            {dataQuest.map((quest, index) => (
              <article key={index}>
                <button onClick={() => handleActiveQuest(index)}>
                  {quest.titleQuest}

                  <span className="anima-opacity">
                    {activeQuest === index ? (
                      <MinusIcon size={25} />
                    ) : (
                      <PlusIcon size={25} />
                    )}
                  </span>
                </button>
                {activeQuest === index && (
                  <p className="anima-opacity">{quest.answerQuest}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Faq;
