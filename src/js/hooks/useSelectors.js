import { useSelector } from "react-redux";

const useSelectors = () => {

  const { error, loading } = useSelector(state => state.request);
  const filmsList = useSelector(state => state.films.films);
  const actorsList = useSelector(state => state.actors.actors);
  const pageCount = useSelector(state => state.pageCount.data);
  const paginationCount = useSelector(state => state.paginationCount.number);
  const {id, details, countries, genres} = useSelector(state => state.movie);
  const stillsList = useSelector(state => state.stills.stills);
  const similarList = useSelector(state => state.similar.similar);
  const seasons = useSelector(state => state.seasons.seasons);

  return {
    filmsList,
    pageCount,
    error,
    loading,
    paginationCount,
    id,
    details,
    actorsList,
    stillsList,
    similarList,
    countries,
    genres,
    seasons
  }
};

export { useSelectors };
