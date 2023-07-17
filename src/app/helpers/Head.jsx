import React from "react";
import Head from "next/head";
import { Helmet } from "react-helmet";

function HeadEdit({props, titlePage, descriptionPage }) {
  React.useEffect(() => {
    document.title = titlePage + " | Nine";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", descriptionPage || "");
  }, [props]);

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
