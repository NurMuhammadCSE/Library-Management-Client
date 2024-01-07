import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Testimonial from "../Testimonial/Testimonial";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";

const Home = () => {
  const categoriesData = useLoaderData();
  return (
    <div>
      <Banner></Banner>

      <SectionTitle
        heading={"Featured Category"}
        subHeading={"A room without books is like a body without a soul"}
      ></SectionTitle>
      <FeaturedCategory></FeaturedCategory>

      <SectionTitle
        heading={"Book Categories"}
        subHeading={"Please Explore Category"}
      ></SectionTitle>
      <Categories categoriesData={categoriesData}></Categories>

      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Customer Say"}
      ></SectionTitle>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
