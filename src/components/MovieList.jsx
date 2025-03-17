// src/components/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default MovieList;
