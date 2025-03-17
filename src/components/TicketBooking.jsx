// src/components/TicketBooking.js
import React, { useState } from "react";

const TicketBooking = ({ movie, onClose }) => {
  const [numTickets, setNumTickets] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatRows = 5; // Number of rows
  const seatsPerRow = 10; // Number of seats in each row

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      // Deselect the seat if it's already selected
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else if (selectedSeats.length < numTickets) {
      // Select the seat if not already selected and under the ticket limit
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleTicketChange = (e) => {
    setNumTickets(Number(e.target.value));
    setSelectedSeats([]); // Clear previous seat selections if ticket count changes
  };

  const handleBookTickets = () => {
    if (selectedSeats.length === numTickets) {
      alert(
        `Booking ${numTickets} tickets for "${
          movie.title
        }" with seats: ${selectedSeats.join(", ")}`
      );
      onClose();
    } else {
      alert(`Please select exactly ${numTickets} seats.`);
    }
  };

  const renderSeats = () => {
    const seats = [];
    let seatId = 1;
    for (let row = 0; row < seatRows; row++) {
      const seatRow = [];
      for (let col = 0; col < seatsPerRow; col++) {
        const isSelected = selectedSeats.includes(seatId);
        seatRow.push(
          <button
            key={seatId}
            onClick={() => handleSeatClick(seatId)}
            className={`w-12 h-12 m-2 rounded-lg ${
              isSelected ? "bg-blue-500" : "bg-gray-300"
            } ${isSelected ? "text-white" : "text-black"}`}
          >
            {seatId}
          </button>
        );
        seatId++;
      }
      seats.push(
        <div key={row} className="flex justify-center mb-2">
          {seatRow}
        </div>
      );
    }
    return seats;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">{movie.title}</h2>
        <p className="mb-4">{movie.description}</p>

        <div className="mb-4">
          <label className="block text-gray-700">Number of Tickets</label>
          <input
            type="number"
            value={numTickets}
            onChange={handleTicketChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
            min="1"
            max="5"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-xl mb-2">Select Seats</h3>
          {renderSeats()}
        </div>

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
