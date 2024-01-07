// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row items-center">
              <img
                src="https://shorturl.at/fmXY5"
                alt="Library Image"
                className="max-w-xl rounded-lg shadow-2xl mb-4 lg:mb-0"
              />
              <div className="text-center lg:text-left lg:pl-8">
                <h1 className="text-5xl font-bold mb-4">
                  Your Literary Journey Begins Here: Where Books Transform Lives
                </h1>
                <p className="text-lg text-neutral-500 mb-6">
                  Embark on a literary adventure with our Library Management
                  website. From classics to contemporary reads, explore a world
                  where knowledge meets convenience. Borrow, return, and indulge
                  in the joy of reading effortlessly.
                </p>
                <button className="btn btn-primary">Start Your Journey</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row items-center">
              <img
                src="https://shorturl.at/imGH6"
                alt="Library Image"
                className="max-w-xl rounded-lg shadow-2xl mb-4 lg:mb-0"
              />
              <div className="text-center lg:text-left lg:pl-8">
                <h1 className="text-5xl font-bold mb-4">
                Books are a uniquely portable magic
                </h1>
                <p className="text-lg text-neutral-500 mb-6">
                The more that you read, the more things you will know. The more that you learn, the more places you&apos;ll go. - Dr. Seuss
                </p>
                <button className="btn btn-primary">Start Your Journey</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row items-center">
              <img
                src="https://shorturl.at/fmXY5"
                alt="Library Image"
                className="max-w-xl rounded-lg shadow-2xl mb-4 lg:mb-0"
              />
              <div className="text-center lg:text-left lg:pl-8">
                <h1 className="text-5xl font-bold mb-4">
                A book is a dream that you hold in your hand.
                </h1>
                <p className="text-lg text-neutral-500 mb-6">
                I find television very educational. Every time someone turns it on, I go in the other room and read a book. - Groucho Marx
                </p>
                <button className="btn btn-primary">Start Your Journey</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
