import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const bookInformation = useLoaderData();
  console.log(bookInformation[0].name);
  return bookInformation.map((book) => (
    <div
      key={book._id}
      className="hero min-h-screen bg-base-200 flex items-center justify-center"
    >
      <div className="hero-content flex-col lg:flex-row items-center">
        <img
          src={book.image}
          alt="Library Image"
          className="max-w-xl rounded-lg shadow-2xl mb-4 lg:mb-0"
        />
        <div className="text-center lg:text-left lg:pl-8">
          <h1 className="text-5xl font-bold mb-4">{book.name}</h1>
          <h1 className="text-5xl font-bold mb-4">{book.author}</h1>
          <h1 className="text-5xl font-bold mb-4">{book.rating}</h1>
          <h1 className="text-5xl font-bold mb-4">{book.quantity}</h1>
          <h1 className="text-5xl font-bold mb-4">{book.category}</h1>
          <p className="text-lg text-neutral-500 mb-6">{book.description}</p>
          <button className="btn btn-primary mx-10 px-10">Borrow</button>
          <button className="btn btn-primary px-10">Read</button>
        </div>
      </div>
    </div>
  ));
};

export default BookDetails;
