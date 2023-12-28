import { useLoaderData } from "react-router-dom";
import AllBookCard from "../AllBookCard/AllBookCard";

const AllBooks = () => {
  const allBooks = useLoaderData();
  console.log(allBooks);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
      {allBooks.map((book) => (
        <AllBookCard key={book._id} book={book}></AllBookCard>
      ))}
    </div>
  );
};

export default AllBooks;
