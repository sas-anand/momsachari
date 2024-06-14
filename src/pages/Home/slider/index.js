import React, { useEffect, useContext } from "react";
import Slider from "react-slick";
import "./index.css";
import Img1 from "../../../assets/images/img1.png";
import Img2 from "../../../assets/images/img2.png";
import Img3 from "../../../assets/images/img3.png";
import Img6 from "../../../assets/images/img6.png";
import Img7 from "../../../assets/images/img7.png";
import Img8 from "../../../assets/images/img8.png";


import { MyContext } from "../../../App";

const HomeSlider = () => {
  const context = useContext(MyContext);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: context.windowWidth > 992 ? true : false,
    autoplay: true,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main h-screen">
          <section class="dark:bg-gray-900 bg-green-50">
            <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-3xl mb-4 text-9xl font-extrabold tracking-tight leading-none md:text-8xl text-teal-950">
                  Lal Mirch Bharua
                </h1>
                <p class="max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-3xl dark:text-gray-400">
                  Our BestSellar. Choice for each home
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-3 mr-3 text-xl font-medium text-center rounded-lg text-white rounded-lg bg-teal-950 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  ORDER NOW
                </a>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={Img1} className="h-svh" alt="mockup" />
              </div>
            </div>
          </section>
          <section class="dark:bg-gray-900 bg-green-50">
            <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-3xl mb-4 text-9xl font-extrabold tracking-tight leading-none md:text-8xl text-teal-950">
                  Amla Muraba
                </h1>
                <p class="max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-3xl dark:text-gray-400">
                  Mouthwatering.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-3 mr-3 text-xl font-medium text-center rounded-lg text-white rounded-lg bg-teal-950 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  ORDER NOW
                </a>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={Img7} alt="mockup" className="h-svh" />
              </div>
            </div>
          </section>
          <section class="dark:bg-gray-900 bg-green-50">
            <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-3xl mb-4 text-9xl font-extrabold tracking-tight leading-none md:text-8xl text-teal-950">
                  Amla Pickle
                </h1>
                <p class="max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-3xl dark:text-gray-400">
                Tangy, Sour & Masaledaar...
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-3 mr-3 text-xl font-medium text-center rounded-lg text-white rounded-lg bg-teal-950 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  ORDER NOW
                </a>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={Img3} alt="mockup" className="h-svh" />
              </div>
            </div>
          </section>
          <section class="dark:bg-gray-900 bg-green-50">
            <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-3xl mb-4 text-9xl font-extrabold tracking-tight leading-none md:text-8xl text-teal-950">
                  Whole Lemon Pickle
                </h1>
                <p class="max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-3xl dark:text-gray-400">
                Sour & Salty...
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-3 mr-3 text-xl font-medium text-center rounded-lg text-white rounded-lg bg-teal-950 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  ORDER NOW
                </a>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={Img6} alt="mockup" className="h-svh" />
              </div>
            </div>
          </section>
          <section class="dark:bg-gray-900 bg-green-50">
            <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-3xl mb-4 text-9xl font-extrabold tracking-tight leading-none md:text-8xl text-teal-950">
                  Mango Pickle
                </h1>
                <p class="max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-3xl dark:text-gray-400">
                Tangy & Sour...
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-3 mr-3 text-xl font-medium text-center rounded-lg text-white rounded-lg bg-teal-950 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  ORDER NOW
                </a>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={Img8} alt="mockup" className="h-svh" />
              </div>
            </div>
          </section>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
