import React  from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeadEdit from "@/app/helpers/Head";
import styles from "../../../src/app/css/pages/Faq.module.scss";
import Accordion from "@/app/components/Accordion";

function Faq() {
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
            <Accordion />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Faq;
