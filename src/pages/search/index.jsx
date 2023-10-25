import React from "react";
import { DataContext } from "@/app/data/hooks/ContextApi";
import HeadEdit from "@/app/ui/components/helpers/Head";
import Header from "@/app/ui/components/navigation/Header";

function Search() {
  const { infoSearch, setSearchQuery } = React.useContext(DataContext);

  React.useEffect(() => {
    console.log("Search:", infoSearch);
  }, [infoSearch]);

  return (
    <>
      <HeadEdit titlePage="Procurar" />
      <Header />
      <section className={`container`}>
      </section>
    </>
  );
}

export default Search;
