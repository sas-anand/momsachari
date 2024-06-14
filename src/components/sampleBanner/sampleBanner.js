import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 mx-6">
      <div className="md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-yellow-200">
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-3xl lg:text-6xl font-bold text-teal-950 pl-4"
            >
              Can't decide <br /> what to buy ?{/* {data.title} */}
            </h1>
            <p data-aos="fade-up" className="text-sm">
              {data.date}
            </p>
          </div>
          {/* second col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={data.image}
              alt=""
              className="rounded-3xl scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-bold text-xl">
              {data.title2}
            </p>
            <p
              data-aos="fade-up"
              className=" text-3xl sm:text-5xl font-bold text-teal-950 pr-3"
            >
              {data.title3}
            </p>
            <p
              data-aos="fade-up"
              className="text-md tracking-wide leading-5 text-teal-950 pr-3"
            >
              {/* {data.title4} */}
              Amla Muraba, Mirch Bharua, Amla Picke <br /> Whole Lemon, Mango Pickle 
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button
                style={{ color: data.bgColor }}
                className="bg-teal-950 py-2 px-4 rounded text-white"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
