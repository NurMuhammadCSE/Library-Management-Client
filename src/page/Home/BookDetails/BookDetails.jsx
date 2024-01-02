import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Rating } from '@smastrom/react-rating'

const BookDetails = () => {
  // const params = useParams();
  const bookInformation = useLoaderData();
  const { user } = useContext(AuthContext);
  const { image, name, author, rating, quantity, category, description, _id } =
    bookInformation;
  const { register, handleSubmit, reset } = useForm();
  const [isBorrowed, setIsBorrowed] = useState(false);

  function getFormattedDate() {
    const today = new Date();
    // Get day, month, and year
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based
    const year = today.getFullYear();

    // Add leading zeros if needed
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    // Assemble the formatted date
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

    return formattedDate;
  }

  const todayFormatted = getFormattedDate();
  console.log(todayFormatted);

  const handleAddBook = (event) => {
    const form = event.target;
    const UserName = form.name.value;
    const email = form.email.value;
    const date = form.date.value;

    if (user && user?.email) {
      const bookInfo = {
        image,
        category,
        name,
        UserName,
        email,
        returnDate: date,
        borrowedDate: todayFormatted,
        bookId: _id,
      };

      fetch(`http://localhost:5000/borrowBook`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            reset();
            document.getElementById("my_modal_5").close();
            setIsBorrowed(true);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Book is Borrowed Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  //   fetch(`http://localhost:5000/borrowBook`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.insertedId) {
  //         reset();
  //         document.getElementById("my_modal_5").close();
  //         setIsBorrowed(true);
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Your work has been saved",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  // };

  return (
    <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row items-center">
        <img
          src={image}
          alt="Library Image"
          className="max-w-xl rounded-lg shadow-2xl mb-4 lg:mb-0"
        />
        <div className="text-center lg:text-left lg:pl-8">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <h1 className="text-2xl mb-4">By: <span className="text-primary">{author}</span> </h1>
          <h1 className="text-2xl mb-4">Category: <span className="text-primary">
          {category}</span> </h1>
          <h1 className="text-2xl mb-4">Quantity: {quantity}</h1>
          <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
          <p className="text-lg mt-6"> Description: {description}</p>
          <button
            className={`btn mt-4 ${
              isBorrowed ? "btn-warning" : "btn-primary"
            } mx-10 px-10`}
            onClick={() => {
              if (!isBorrowed) {
                document.getElementById("my_modal_5").showModal();
              } else {
                Swal.fire({
                  icon: "info",
                  title: "Already Borrowed",
                  text: "You have already borrowed this book.",
                });
              }
            }}
          >
            {isBorrowed ? "Borrowed" : "Borrow"}
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="">
                <form onSubmit={handleAddBook} method="dialog">
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">What is your name?</span>
                    </div>
                    <input
                      type="text"
                      // {...register("name", { required: true })}
                      placeholder="Type here"
                      name="name"
                      defaultValue={user?.displayName}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">What is your email?</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      // {...register("email", { required: true })}
                      placeholder="Type here"
                      defaultValue={user?.email}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">
                        What is your Return Date??
                      </span>
                    </div>
                    <input
                      type="date"
                      name="date"
                      // {...register("date", { required: true })}
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <button className="btn btn-primary px-10 mt-4">Submit</button>
                </form>
              </div>
            </div>
          </dialog>
          <button className="btn btn-primary px-10">Read</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
