
import { getMovieId } from "../../../app/data/api/routes/routes";
import { Details } from "../../details/Details";


export async function getServerSideProps(context) {
  const { id } = context.params;
  const data = await getMovieId(id);
  return {
    props: { data, type: 'movie' },
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