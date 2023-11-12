import React from "react";
import { Link } from "react-router-dom";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, title, email, level, date, marks, image, description, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{level}</td>
      <td>{date}</td>
      <td>Marks : {marks}</td>
      <th>
        <Link to={`/getmark/${_id}`}>
          <button className="btn btn-success text-white mt-6">view</button>
        </Link>
      </th>
      {/* <th>
        {status === "confirm" ? (
          <Link to={`/submit/${_id}`}>
            <span className="font-bold text-white bg-green-400 p-2 rounded-lg">submited</span>
          </Link>
        ) : (
          <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">
            pending
          </button>
        )}
      </th> */}
    </tr>
  );
};

export default BookingRow;
