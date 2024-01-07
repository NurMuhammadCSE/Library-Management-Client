/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Categories = ({ categoriesData }) => {
  //   console.log(categoriesData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous data fetch
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []); // useEffect runs only once, simulating initial data fetching

  if (loading) {
    // Show loading spinner while fetching data
    return (
      <div className="text-center text-neutral-500 my-10">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (
    !categoriesData ||
    !Array.isArray(categoriesData) ||
    categoriesData.length === 0
  ) {
    return (
      <div className="text-center text-3xl font-extralight text-neutral-500 my-10">
        <p>No categories found.</p>
      </div>
    );
  }
  return (
    <div>
      <SectionTitle
        heading={"Book Categories"}
        subHeading={"Please Explore Category"}
      ></SectionTitle>
      <div className="grid md:grid-cols-4 justify-center items-center gap-6 mb-16">
        {categoriesData?.map((item) => (
          <CategoriesCard key={item.id} item={item}></CategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
