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
      titleQuest: "Quest Title 1",
      answerQuest: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      titleQuest: "Quest Title 2",
      answerQuest: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      titleQuest: "Quest Title 3",
      answerQuest:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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

                  {activeQuest === index ? (
                    <MinusIcon size={25} />
                  ) : (
                    <PlusIcon size={25} />
                  )}
                </button>
                {activeQuest === index && <p>{quest.answerQuest}</p>}
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
