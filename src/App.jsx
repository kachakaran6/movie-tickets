// src/App.js
import React, { useState } from "react";
import TicketBooking from "./components/TicketBooking";

const App = () => {
  const [showBooking, setShowBooking] = useState(false);

  const movie = {
    title: "Inception",
    description:
      "A skilled thief is given a chance to have his criminal record erased, if he can successfully perform an inception.",
    poster: "https://via.placeholder.com/200x300?text=Movie+Poster",
  };

  return (
    <div className="App">
      <div className="flex justify-center p-6">
        <button
          onClick={() => setShowBooking(true)}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg"
        >
          Book Tickets for {movie.title}
        </button>
      </div>

      {showBooking && (
        <TicketBooking movie={movie} onClose={() => setShowBooking(false)} />
      )}
    </div>
  );
};

export default App;
