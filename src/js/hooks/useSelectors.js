import { useSelector } from "react-redux";

const useSelectors = () => {

  const { error, loading } = useSelector(state => state.request);
  const filmsList = useSelector(state => state.films.films);
  const actorsList = useSelector(state => state.actors.actors);
  const pageCount = useSelector(state => state.pageCount.data);
  const paginationCount = useSelector(state => state.paginationCount.number);
  const {id, details} = useSelector(state => state.movie);

  return {
    filmsList,
    pageCount,
    error,
    loading,
    paginationCount,
    id,
    details,
    actorsList
  }
};

export { useSelectors };
