import { Link } from "react-router-dom";
function MovieCard({ _id, Poster_Link, Series_Title, Genre, Released_Year }) {
  return (
    <div className="relative w-60 h-80 rounded-3xl shadow-md overflow-hidden group">
      <Link to={`/movie/${_id}`}>
      <div className="w-full rounded-lg transition-filter group-hover:blur-[2px] ">
        <img
          src={Poster_Link}
          alt={Series_Title}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out flex flex-col justify-end items-center text-center group-hover:text-xl">
        <h2 className="text-lila font-bold font-poppins text-base p-5">
          {Series_Title}
        </h2>
        <h2 className="text-lila font-bold font-poppins text-base p-4">
          {Genre}
        </h2>
        <h2 className="text-lila font-bold font-poppins text-base p-4">
          {Released_Year}
        </h2>
      </div>
      </Link>
    </div>
  );
}

export default MovieCard;