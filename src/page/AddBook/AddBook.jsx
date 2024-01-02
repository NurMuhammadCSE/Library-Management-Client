import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    data.rating = Number(data.rating);
    data.quantity = Number(data.quantity);

    fetch(`http://localhost:5000/addBook/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book is added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/allBooks");
        }
      });
  };

  return (
    <>
      <SectionTitle
        heading={"Add A Book"}
        subHeading={"Your Special Book"}
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="my-10 mx-16">
        <div className="flex">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Book Name</span>
            </div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full ml-5">
            <div className="label">
              <span className="label-text">Author Name</span>
            </div>
            <input
              type="text"
              {...register("author", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="flex mt-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="number"
              {...register("rating", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            {errors.rating && (
              <span className="text-red-600">Rating is Nearest Value</span>
            )}{" "}
          </label>
          <label className="form-control w-full ml-5">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <input
              type="number"
              {...register("quantity", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            {errors.rating && (
              <span className="text-red-600">Rating is Nearest Value</span>
            )}{" "}
          </label>
        </div>

        <div className="flex mt-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Image Url</span>
            </div>
            <input
              type="text"
              {...register("image", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full ml-4">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option>History</option>
              <option>Drama</option>
              <option>Sci-Fi</option>
              <option>Thriller</option>
              <option>Novel</option>
              <option>Parenting</option>
              <option>Medical</option>
            </select>
          </label>
        </div>

        <label className="form-control mt-4">
          <div className="label">
            <span className="label-text">Book Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Please Provide Book Description"
          ></textarea>
        </label>

        <button className="btn btn-neutral mt-4" type="submit">
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddBook;
