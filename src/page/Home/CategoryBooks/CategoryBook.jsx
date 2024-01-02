import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { AwesomeButton } from "react-awesome-button";

/* eslint-disable react/prop-types */
const CategoryBook = ({ books }) => {
  const { name, image, author, category, rating, _id } = books;
  return (
    <div className="card w-96 h-4/5 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Book" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>
          by <span className="text-primary">{author}</span>{" "}
        </p>
        <p>
          Category: <span className="text-primary">{category}</span>
        </p>
        {/* <p>{rating}</p> */}
        <Rating style={{ maxWidth: 250 }} value={rating} readOnly />

        <div className="card-actions">
            <Link to={`/details/${_id}`}>
              <AwesomeButton type="primary">Details</AwesomeButton>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBook;
