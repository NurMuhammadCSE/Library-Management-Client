/* eslint-disable react/prop-types */
import { AwesomeButton } from "react-awesome-button";

const BorrowBooksCard = ({ borrowBook, handleReturnBook }) => {
  const { image, name, category, returnDate, borrowedDate, _id } = borrowBook;

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
            <button onClick={() => handleReturnBook(_id)}>
              <AwesomeButton type="primary">Return</AwesomeButton>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowBooksCard;
