import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  const categoriesData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Categories categoriesData={categoriesData}></Categories>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
