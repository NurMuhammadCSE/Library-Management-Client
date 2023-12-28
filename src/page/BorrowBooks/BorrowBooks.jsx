import { useLoaderData } from "react-router-dom";
import BorrowBooksCard from "../BorrowBooksCard/BorrowBooksCard";

const BorrowBooks = () => {
  const borrowBooks = useLoaderData();
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap">
      {borrowBooks.map((borrowBook) => (
        <BorrowBooksCard
          key={borrowBook._id}
          borrowBook={borrowBook}
        ></BorrowBooksCard>
      ))}
    </div>
  );
};

export default BorrowBooks;
