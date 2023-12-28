/* eslint-disable react/prop-types */

const BorrowBooksCard = ({ borrowBook }) => {
  const { image, name, category, returnDate, borrowedDate } = borrowBook;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Book"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>{borrowedDate}</p>
          <p>{returnDate}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Return</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowBooksCard;
