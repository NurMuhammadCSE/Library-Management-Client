/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const AllBookCard = ({ book }) => {
  const { image, name, author, category, rating, _id } = book;
  return (
    <div>
      <div className="card w-96 h-4/5 bg-base-100 shadow-xl my-10">
        <figure className="px-10 pt-10">
          <img src={image} alt="Books" className="rounded-xl w-fit" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{author}</p>
          <p>{category}</p>
          <p>{rating}</p>
          <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
          <div className="card-actions">
            <button className="btn btn-primary">
                <Link to={`/updateBook/${_id}`}>Update</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookCard;
