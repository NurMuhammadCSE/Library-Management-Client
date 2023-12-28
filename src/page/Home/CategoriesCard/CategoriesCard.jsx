/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoriesCard = ({ item }) => {
//   console.log(item);
  const { image, category } = item;
  return (
    <div className="card w-56 h-72 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Books" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to={`/details/${category}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
