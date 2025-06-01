import { useQuery } from "@tanstack/react-query";
import { API_OPTIONS } from "../utils/constants";
const useFetchMovieList = () => {
  return useQuery({
    queryKey: ["movie-list"],
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      ).then((res) => res.json()),
  });
};

export default useFetchMovieList;
