import React from "react";

const MainHero = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute bottom-2 left-4 md:bottom-12 md:left-6 flex space-x-2 md:space-x-4 animate-bounce">
          <button className="bg-blue-300 text-white py-1 px-1.5 md:py-2 md:px-4 rounded-md shadow-md hover:bg-blue-400 transition ease-in-out duration-300 text-xs md:text-base min-w-[70px] md:min-w-[100px]">
            Talk An Expert
          </button>
          <button className="bg-orange-300 text-black flex items-center justify-center space-x-0.5 md:space-x-2 py-1 px-1.5 md:py-2 md:px-4 rounded-full shadow-md hover:bg-orange-400 transition ease-in-out duration-300 text-xs md:text-base min-w-[90px] md:min-w-[120px]">
            <i className="fas fa-play" />
            <span>See how it works</span>
          </button>
        </div>
        <img src="/poster.png" alt="Poster" className="w-full h-auto" />
      </div>
      <div className="flex justify-center space-x-4">
        <hr className="my-8 border-t-2 border-gray-300" />
        <img
          src="/Screenshot 2025-01-21 220633.png"
          alt="Company logos"
          className="w-full h-auto"
        />
      </div>
      <section
        className="mt-10 p-6"
        style={{
          backgroundColor: "rgb(250, 250, 250)",
          borderRadius: 8,
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
        }}
      >
        <h5
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "rgb(235, 141, 21)" }}
        >
          WELCOME TO REGISTERKARO.IN
        </h5>
        <div className="flex justify-center mt-8">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="text-4xl text-orange-500 animate-bounce"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mt-6 text-center">
          Explore Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <div className="text-4xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-blue-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Company Formation</h3>
            <p className="mt-2 text-gray-600">
              Build web-based solutions that enhance customer experience.
            </p>
            <a href="#" className="mt-4 text-blue-500 hover:underline">
              Learn more
            </a>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <div className="text-4xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-green-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Company Secretarial Services
            </h3>
            <p className="mt-2 text-gray-600">
              Make data-driven decisions and utilize technology to reach
              business goals.
            </p>
            <a href="#" className="mt-4 text-blue-500 hover:underline">
              Learn more
            </a>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <div className="text-4xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                className="text-yellow-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Virtual Office Address
            </h3>
            <p className="mt-2 text-gray-600">
              Foster customer relationships by effectively serving your market.
            </p>
            <a href="#" className="mt-4 text-blue-500 hover:underline">
              Learn more
            </a>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <div className="text-4xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Annual Compliance Services
            </h3>
            <p className="mt-2 text-gray-600">
              Turn your ideas into modern products with our design experts.
            </p>
            <a href="#" className="mt-4 text-blue-500 hover:underline">
              Learn more
            </a>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <div className="text-4xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 576 512"
                className="text-purple-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Payroll Services</h3>
            <p className="mt-2 text-gray-600">
              Expand your business across the globe with minimal effort.
            </p>
            <a href="#" className="mt-4 text-blue-500 hover:underline">
              Learn more
            </a>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <div className="text-4xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 384 512"
                className="text-indigo-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Bookkeeping Services</h3>
            <p className="mt-2 text-gray-600">
              Steering user behaviours with creative design, data insights &amp;
              technology.
            </p>
            <a href="#" className="mt-4 text-blue-500 hover:underline">
              Learn more
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition ease-in-out duration-300">
            See All Services
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainHero;
