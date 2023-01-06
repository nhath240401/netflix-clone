import { useEffect, useState } from "react";
import axios from "../axios";
import '../App.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="ml-5 text-white">
      <h2 className="mt-5 font-bold uppercase">{title}</h2>

      <div className="flex p-5 overflow-x-scroll overflow-y-hidden row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }
            `}
            alt={movie.name}
            className={`row_poster max-h-[150px] object-contain mr-[10px] w-full transition-transform duration-500 hover:scale-90 cursor-pointer ${isLargeRow && "max-h-[250px]"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
