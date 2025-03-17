// src/components/TicketBooking.js
import React, { useState } from "react";

const TicketBooking = ({ movie, onClose }) => {
  const [numTickets, setNumTickets] = useState(1);

  const handleTicketChange = (e) => {
    setNumTickets(e.target.value);
  };

  const handleBookTickets = () => {
    alert(`Booking ${numTickets} tickets for ${movie.title}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl mb-4">{movie.title}</h2>
        <p className="mb-4">{movie.description}</p>
        <label className="block text-gray-700">Number of Tickets</label>
        <input
          type="number"
          value={numTickets}
          onChange={handleTicketChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
          min="1"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-400 text-white rounded-lg"
          >
            Close
          </button>
          <button
            onClick={handleBookTickets}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;
