/* eslint-disable react/prop-types */
import CategoriesCard from "../CategoriesCard/CategoriesCard";

const Categories = ({ categoriesData }) => {
//   console.log(categoriesData);
  return (
    <div className="grid md:grid-cols-4 justify-center items-center gap-6 mb-16">
      {categoriesData.map((item) => (
        <CategoriesCard key={item.id} item={item}></CategoriesCard>
      ))}
    </div>
  );
};

export default Categories;
