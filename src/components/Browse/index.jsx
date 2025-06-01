import React from "react";
import Header from "./../Header";
import useFetchMovieList from "./../../hooks/useFetchMovieList";
import { Trailer } from "./Trailer";
import { useDispatch } from "react-redux";
import { addMovies } from "../../redux/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const { data } = useFetchMovieList();
  if (data?.results?.length === 0) return;
  dispatch(addMovies(data?.results || []));

  return (
    <div>
      <Header />
      <>
        {data?.results[0]?.id && (
          <Trailer movie={data?.results && data?.results[0]} />
        )}
      </>
    </div>
  );
};

export default Browse;
