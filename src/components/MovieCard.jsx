// src/components/MovieCard.js
import React from "react";

const MovieCard = ({ movie, onSelect }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={movie.poster}
        alt={movie.title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-gray-500">{movie.description}</p>
        <button
          onClick={() => onSelect(movie)}
          className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700"
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
