import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const updateBook = useLoaderData();
  //   console.log(updateBook);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { image, name, author, category, rating, _id } = updateBook;

  const onSubmit = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/updateBook/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book is Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-10">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Book Name</span>
        </div>
        <input
          type="text"
          defaultValue={name}
          {...register("name", { required: true })}
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Author Name</span>
        </div>
        <input
          type="text"
          {...register("author", { required: true })}
          defaultValue={author}
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Rating</span>
        </div>
        <input
          type="number"
          {...register("rating", { required: true })}
          defaultValue={rating}
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        {errors.rating && (
          <span className="text-red-600">Rating is Nearest Value</span>
        )}{" "}
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Image Url</span>
        </div>
        <input
          type="text"
          {...register("image", { required: true })}
          defaultValue={image}
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>

      <label className="form-control w-full">
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

      <button className="btn btn-neutral" type="submit">
        Update Book
      </button>
    </form>
  );
};

export default UpdateBook;
