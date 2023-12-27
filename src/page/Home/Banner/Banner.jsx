const Banner = () => {
    return (
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
              Embark on a literary adventure with our Library Management website.
              From classics to contemporary reads, explore a world where knowledge
              meets convenience. Borrow, return, and indulge in the joy of reading
              effortlessly.
            </p>
            <button className="btn btn-primary">Start Your Journey</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  