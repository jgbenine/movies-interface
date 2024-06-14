import React from "react";
import styles from "../../app/ui/css/pages/Faq.module.scss";
import HeadEdit from "../../app/ui/components/helpers/Head";
import { IntroSection } from "../../app/ui/components/sections/IntroSection";
import Accordion from "../../app/ui/components/partials/Accordion";

function Faq() {
  return (
    <>
      <HeadEdit titlePage="FAQ" descriptionPage="Tire sua dúvida conosco." />
      <section className={styles.faq}>
        <div className="containerMain">
          <IntroSection
            titleSection="Perguntas frequentes"
            descriptionSection="Tire sua dúvidas"
            linkHrefSection=""
          />
          <div className={styles.faqContent}>
            <Accordion />
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
