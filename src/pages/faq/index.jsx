import React  from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeadEdit from "@/app/helpers/Head";
import styles from "../../../src/app/css/pages/Faq.module.scss";
import Accordion from "@/app/components/Accordion";
import IntroSection from "@/app/components/IntroSection";

function Faq() {
  return (
    <>
      <HeadEdit titlePage="FAQ" descriptionPage="Tire sua dúvida conosco." />
      <Header />
      <section className={styles.faq}>
        <div className="container">
        <IntroSection
            titleSection="Perguntas frequentes"
            descriptionSection="Tire sua dúvidas"
          />
          <div className={styles.faqContent}>
            <Accordion />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Faq;
