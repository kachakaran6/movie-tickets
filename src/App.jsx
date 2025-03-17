// src/App.js
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import TicketBooking from "./components/TicketBooking";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller about dreams within dreams.",
      poster: "https://example.com/inception.jpg",
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "Batman battles the Joker in Gotham City.",
      poster: "https://example.com/dark_knight.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      description:
        "A group of explorers travel through a wormhole to save humanity.",
      poster: "https://example.com/interstellar.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center text-3xl font-semibold">
        Movie Ticket Booking App
      </header>
      <main className="p-5">
        {selectedMovie ? (
          <TicketBooking
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        ) : (
          <MovieList movies={movies} onSelect={setSelectedMovie} />
        )}
      </main>
    </div>
  );
};

export default App;
