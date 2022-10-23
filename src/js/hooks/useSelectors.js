import { useSelector } from "react-redux";

const useSelectors = () => {

  const top250 = useSelector(state => state.top250.data);
  const pageCount = useSelector(state => state.pageCount.data);
  return {
    top250,
    pageCount
  }
};

export { useSelectors };
