import React from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeadEdit from "@/app/helpers/Head";
import "../../app/globals.css";
import styles from "../../../src/app/css/pages/Faq.module.scss";
import { PlusIcon } from "lucide-react";

function Faq() {
  return (
    <>
      <HeadEdit titlePage="FAQ" descriptionPage="Tire sua dúvida conosco." />
      <Header />
      <section className={styles.faq}>
        <div className="container">
          <h2 className="title-main">Perguntas frequentes</h2>
            <p className="description">Tire suas dúvidas, as perguntas realizadas com mais frequência.</p>
          <div className={styles.faqContent}>
            <article>
              <button>Quest content?
                <PlusIcon size={25} color="white" />
              </button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                atque eligendi consectetur modi, dolores natus incidunt
                accusamus unde. Blanditiis iure cum dolores aliquam et velit
                sapiente fugit sed, provident tenetur.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Faq;
