import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data.testimonials);
      });
  }, []);
  return (
    <div className="my-14">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Customer Say"}
      ></SectionTitle>

      <div className="flex justify-center items-center flex-wrap gap-10">
        {testimonial.map((item, idx) => (
          <div key={idx} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Shoes"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.testimonial}</p>
              <Rating style={{ maxWidth: 250 }} value={item.rating} readOnly />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
