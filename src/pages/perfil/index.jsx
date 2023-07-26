import styles from "../../app/css/pages/Perfil.module.scss";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HeadEdit from "@/app/helpers/Head";
import Image from "next/image";
import "../../app/globals.css";

function Perfil() {
  return (
    <>
      <HeadEdit titlePage="Seu Perfil" descriptionPage="Pefil." />
      <Header />
      <section className={styles.perfil}>
        <main className="container mx-auto p-4">
          <div className={styles.perfilContent}>
            <div className={styles.perfilIntro}>
              <h3>Bem-vindo, ...</h3>
              <div className={styles.perfilUser}>
                <Image alt="imagem Perfil" />
              </div>
            </div>
            <>
              <h2 className="text-2xl py-4 font-thin">Dados do Pefil:</h2>
              <div className={styles.perfilGrid}>
                <div className={styles.perfilEdit}>
                  <Label htmlFor="email" textInfo="E-mail" />
                  <Input
                    idInput="email"
                    type="text"
                    placeholder="email-ficticio@gmail.com"
                  />
                  {/* <Button textInfo="Editar e-mail" /> */}
                </div>
              </div>
            </>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default Perfil;
