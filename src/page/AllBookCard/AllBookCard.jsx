/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllBookCard = ({ book }) => {
  const { image, name, author, category, rating, _id } = book;

  const handelDeleteBook = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
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
  }
  return (
    <div>
      <div className="card w-96 h-4/5 bg-base-100 shadow-xl my-10">
        <figure className="px-10 pt-10">
          <img src={image} alt="Books" className="rounded-xl w-fit" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{author}</p>
          <p>{category}</p>
          <p>{rating}</p>
          <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
          <div className="card-actions">
            <button className="btn btn-primary">
                <Link to={`/updateBook/${_id}`}>Update</Link>
            </button>
            <button onClick={() => handelDeleteBook(_id)} className="btn btn-primary">
                <Link>Delete</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookCard;
