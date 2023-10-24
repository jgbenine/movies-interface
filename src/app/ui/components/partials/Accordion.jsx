import React from "react";
import { PlusIcon, MinusIcon } from "lucide-react";
// import "../../../global.css";


function Accordion() {
  const [activeQuest, setActiveQuest] = React.useState(false);

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
          <a href="https://developer.themoviedb.org/" target="_blank">
            {" "}
            Leia a documentação{" "}
          </a>
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
    </>
  );
}

export default Accordion;