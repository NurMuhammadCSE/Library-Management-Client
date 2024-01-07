// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const FeaturedCategory = () => {
  return (
    <div className="my-14">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-halloween-concept-with-spell-books-skull_23-2148277550.jpg?w=740&t=st=1703685850~exp=1703686450~hmac=67f1f81f55acdbeb5ccf00b87b3557224498bd6ccbe424ef991972634ddc6950"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/set-old-books-scrolls-parchments-papers_105738-988.jpg?w=826&t=st=1703685908~exp=1703686508~hmac=92892377adf1c47e2e6c7320d7ad0850b0af5f3e44664770ebe96aab02b4e589"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://shorturl.at/jxzIL" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://shorturl.at/oACTV" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://shorturl.at/imGH6" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://shorturl.at/bBTV9" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedCategory;
