import React from "react";
import Head from "next/head";
import { Helmet } from "react-helmet";

function HeadEdit({titlePage, descriptionPage }) {
  React.useEffect(() => {
    document.title = titlePage + " | Claquete Filmes";
    const metaDados = document.querySelector("meta[name='description']");
      if(metaDados){
        metaDados.setAttribute("content", descriptionPage || "");
    }
  }, [titlePage, descriptionPage]);

  return (
    <>
      <Head>
        <title>{titlePage}</title>
      </Head>

      <Helmet>
        <meta name="description" content={descriptionPage} />
      </Helmet>
    </>
  );
}

export default HeadEdit;
