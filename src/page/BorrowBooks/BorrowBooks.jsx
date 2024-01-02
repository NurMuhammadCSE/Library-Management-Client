import { useNavigate } from "react-router-dom";
import BorrowBooksCard from "../BorrowBooksCard/BorrowBooksCard";
import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const BorrowBooks = () => {
  // const borrowBooks = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [borrowBooks, setBorrowBooks] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate an asynchronous data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    fetch(`http://localhost:5000/allBorrowBooks?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("library-access")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBorrowBooks(data);
        } else {
          // Logout and Navigate
          navigate("/");
        }
      });
  }, [navigate, user?.email]); // useEffect runs only once, simulating initial data fetching

  const handleReturnBook = (id) => {
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
        fetch(`http://localhost:5000/returnBorrowBook/${id}`, {
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
              const remaining = borrowBooks.filter((book) => book._id !== id);
              setBorrowBooks(remaining);
            }
          });
      }
    });
  };

  if (loading) {
    // Show loading spinner while fetching data
    return (
      <div className="text-center text-neutral-500 my-10">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (!borrowBooks || !Array.isArray(borrowBooks) || borrowBooks.length === 0) {
    return (
      <div className="text-center text-3xl font-extralight text-neutral-500 my-10">
        <p>No Borrowed Books found.</p>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        heading={"Borrowed Books"}
        subHeading={"Borrowed Books Read"}
      ></SectionTitle>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {borrowBooks.map((borrowBook) => (
          <BorrowBooksCard
            key={borrowBook._id}
            borrowBook={borrowBook}
            handleReturnBook={handleReturnBook}
          ></BorrowBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowBooks;
