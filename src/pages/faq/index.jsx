import React, { useState } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeadEdit from "@/app/helpers/Head";
import "../../app/globals.css";
import styles from "../../../src/app/css/pages/Faq.module.scss";
import { PlusIcon } from "lucide-react";

function Faq() {
  const [activeQuest, setActiveQuest] = useState(false);

  const dataQuest = [
    {
      titleQuest: "Quest Title 1",
      answerQuest: "Resposta 1",
    },
    {
      titleQuest: "Quest Title 2",
      answerQuest: "Resposta 2",
    },
    {
      titleQuest: "Quest Title 3",
      answerQuest: "Resposta 3",
    },
  ];

  function handleActiveQuest(index) {
    // setActiveQuest(index);
    console.log(index)
  }

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
                  ok
                  <PlusIcon size={25} />
                </button>
                {activeQuest === index && <p>{item.answerQuest}</p>}
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
