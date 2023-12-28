import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CategoryBook = ({ books }) => {
  const { name, image, author, category, rating, _id } = books;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Book" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{author}</p>
        <p>{category}</p>
        <p>{rating}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to={`/details/${_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBook;
