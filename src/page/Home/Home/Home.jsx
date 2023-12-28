import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  const categoriesData = useLoaderData()
  console.log(categoriesData)
  return (
    <div>
      <Banner></Banner>
      <Categories categoriesData={categoriesData}></Categories>
    </div>
  );
};

export default Home;
