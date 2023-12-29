import { useLoaderData } from "react-router-dom";
import BorrowBooksCard from "../BorrowBooksCard/BorrowBooksCard";
import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const BorrowBooks = () => {
  const borrowBooks = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); // useEffect runs only once, simulating initial data fetching

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
          ></BorrowBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowBooks;
