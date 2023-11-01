import React  from "react";
import Footer from "@/app/ui/components/navigation/Footer";
import Header from "@/app/ui/components/navigation/Header";
import HeadEdit from "@/app/ui/components/helpers/Head";
import Accordion from "@/app/ui/components/partials/Accordion";
import IntroSection from "@/app/ui/components/sections/IntroSection";
import styles from "../../app/ui/css/pages/Faq.module.scss";

function Faq() {
  return (
    <>
      <HeadEdit titlePage="FAQ" descriptionPage="Tire sua dúvida conosco." />
      <Header />
      <section className={styles.faq}>
        <div className="containerMain">
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
