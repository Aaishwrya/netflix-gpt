import { useQuery } from "@tanstack/react-query";
import { API_OPTIONS } from "../utils/constants";
const useFetchMovieVideos = (id) => {
  return useQuery({
    queryKey: ["video-list"],
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos",
        API_OPTIONS
      ).then((res) => res.json()),
  });
};

export default useFetchMovieVideos;
