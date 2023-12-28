import { useParams, useLoaderData } from "react-router-dom";
import CategoryBook from "./CategoryBook";

const CategoryBooks = () => {
  const category = useParams();
  console.log(category);
  const allBooksCategory = useLoaderData();
  console.log(allBooksCategory);

  return (
    <div className="grid md:grid-cols-3 gap-4 justify-center items-center">
      {allBooksCategory.map((books) => (
        <CategoryBook key={books._id} books={books}></CategoryBook>
      ))}
    </div>
  );
};

export default CategoryBooks;
