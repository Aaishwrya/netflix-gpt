import React from "react";
import useFetchMovieVideos from "../../hooks/useFetchMovieVideos";
import { useDispatch } from "react-redux";
import { addMainTrailer } from "../../redux/moviesSlice";

export const Trailer = ({ movie }) => {
  const dispatch = useDispatch();
  const { data } = useFetchMovieVideos(movie?.id);
  const movieTrailer =
    data?.results?.filter((trailer) => trailer.type === "Trailer") ||
    data?.results;

  if (!movieTrailer) return;
  dispatch(addMainTrailer(movieTrailer[0]));

  return (
    <div className="relative">
      <VideoSection movieTrailer={movieTrailer[0]} />
      <TitleSection movie={movie} />
    </div>
  );
};

const VideoSection = ({ movieTrailer }) => {
  return (
    <>
      <div className="w-full absolute">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1`}
          title="Trailer_Official"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </>
  );
};

const TitleSection = ({ movie }) => {
  return (
    <>
      <div className="w-full aspect-video text-white bg-gradient-to-tr from-black p-10 absolute">
        <div className="absolute bottom-4/12">
          <h1 className="text-5xl font-bold">{movie?.title}</h1>
          <p className="w-4/12 mt-5">{movie?.overview}</p>
          <div className="flex my-10 gap-2">
            <button className="bg-white px-8 hover:bg-gray-200 opacity-75 cursor-pointer text-black py-2 rounded-md">
            
              Play
            </button>
            <button className="bg-gray-600 hover:bg-gray-500 opacity-75 cursor-pointer px-8 py-2 rounded-md">
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
