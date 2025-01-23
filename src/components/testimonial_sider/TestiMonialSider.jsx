import { useState, useEffect } from "react";
import Image from "next/image";

const TestimonialSlider = () => {
  const testimonials = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    name: "Chris " + index,
    title: "President and CEO, PrintReach, USA",
    image: "/reviews/user1.png",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    ratingImage: "/reviews/Star.png",
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#1C4670] h-auto p-5 sm:p-10 overflow-hidden">
      {/* Header Section */}
      <div className="header flex justify-between items-center">
        <h1 className="font-bold text-2xl sm:text-3xl tracking-wider text-white">
          What people say about us
        </h1>
        <div className="slider-controls flex gap-4">
          <button onClick={goToPrevious} className="left cursor-pointer">
            <Image
              src="/leftArrow.png"
              width={42.86}
              height={42.86}
              alt="Previous Slide"
            />
          </button>
          <button onClick={goToNext} className="right cursor-pointer">
            <Image
              src="/rightArrow.png"
              width={42.86}
              height={42.86}
              alt="Next Slide"
            />
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-container relative mt-10 w-full ">
        <div
          className="slider-track flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 520}px)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-white w-auto sm:max-w-[520px] mx-auto flex-shrink-0 rounded-md shadow-lg ml-9"
              style={{
                flex: "0 0 100%", // Makes each slide take 100% width
              }}
            >
              <div className="ratingAndQuote flex justify-between p-5">
                <svg
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2084 28V19.5804C18.2084 14.2937 19.3502 9.98602 21.6338 6.65734C23.9775 3.2634 27.4329 1.04429 32 0V6.36364C29.9568 6.88578 28.3343 7.8648 27.1324 9.3007C25.9305 10.6713 25.1493 12.3357 24.7887 14.2937H30.1972V28H18.2084ZM0 28V19.5804C0 14.2937 1.14178 9.98602 3.42535 6.65734C5.76901 3.2634 9.19437 1.04429 13.7014 0V6.36364C11.6582 6.88578 10.0357 7.8648 8.8338 9.3007C7.63192 10.6713 6.8507 12.3357 6.49014 14.2937H11.8986V28H0Z"
                    fill="url(#gradient)"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="16"
                      y1="0"
                      x2="16"
                      y2="28"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFA229" />
                      <stop offset="0.78125" stopColor="#1C4670" />
                    </linearGradient>
                  </defs>
                </svg>
                <Image
                  src={testimonial.ratingImage}
                  width={139}
                  height={29}
                  alt="Rating stars"
                />
              </div>
              <p className="text-gray-600 p-5">{testimonial.text}</p>
              <div className="user-section p-5 flex items-center gap-3 text-black">
                <Image
                  src={testimonial.image}
                  width={70}
                  height={70}
                  alt="User profile"
                />
                <div className="info">
                  <h1 className="font-bold text-sm">{testimonial.name}</h1>
                  <p className="font-light text-xs">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="dots flex justify-center mt-5 gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-300"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
