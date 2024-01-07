// import { useLoaderData } from "react-router-dom";
import AllBookCard from "../AllBookCard/AllBookCard";
import {  useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const AllBooks = () => {
  // const allBooks = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [asc, setAcs] = useState(true);
  const [allBooks, setAllBooks] = useState('')

  useEffect(() => {
    // Simulate an asynchronous data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    fetch(`http://localhost:5000/allBooks`)
    .then(res => res.json())
    .then(data => {
      setAllBooks(data)
    })
  }, []); // useEffect runs only once, simulating initial data fetching

  if (loading) {
    // Show loading spinner while fetching data
    return (
      <div className="text-center text-neutral-500 my-10">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const sortedBooks = [...allBooks].sort((a, b) => {
    const compareResult = asc
      ? a.rating - b.rating // Ascending order
      : b.rating - a.rating; // Descending order

    // If ratings are equal, sort by book name
    return compareResult === 0 ? a.name.localeCompare(b.name) : compareResult;
  });

  if (!allBooks || !Array.isArray(allBooks) || allBooks.length === 0) {
    return (
      <div className="text-center text-3xl font-extralight text-neutral-500 my-10">
        <p>No Books found.</p>
      </div>
    );
  }
  return (
    <div>
      <SectionTitle
        heading={"All Books"}
        subHeading={"Please Explore Books"}
      ></SectionTitle>
      Rating:{" "}
      <button onClick={() => setAcs(!asc)} className="btn btn-accent mb-4">
        {asc ? "Ascending" : "Descending"}
      </button>
      <input type="button" value="" />
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
        {sortedBooks.map((book) => (
          <AllBookCard key={book._id} book={book}></AllBookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
