import { getSerieById } from "../../../app/data/services/api/routes/routes";
import { Details } from "../../details/Details";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const data = await getSerieById(id);

  return {
    props: { data, type: 'series' },
  };
}

const MoviePage = ({ data, type }) => {
  return (
    <section>
      <Details data={data} type={type} />
    </section>
  );
};

export default MoviePage;