/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useState } from "react";

const BorrowBooksCard = ({ borrowBook }) => {
  const { image, name, category, returnDate, borrowedDate, _id } = borrowBook;

  const handleReturnBook = (_id) => {
    // Show a confirmation dialog before proceeding
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Send DELETE request to return the book
        fetch(`http://localhost:5000/returnBorrowBook/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book is returned successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl my-10">
        <figure className="px-10 pt-10">
          <img src={image} alt="Book" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>{borrowedDate}</p>
          <p>{returnDate}</p>
          <div className="card-actions">
            <button
              onClick={() => handleReturnBook(_id)}
              className={`btn btn-primary}`}
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowBooksCard;
