import React from "react";
// import Heading from "../Shared/Heading";

// import images
// import Img1 from "../../assets/blogs/blog-1.jpg";
// import Img2 from "../../assets/blogs/blog-2.jpg";
// import Img3 from "../../assets/blogs/blog-3.jpg";
import AllPickles from "../../assets/images/allpickles.png";
import Img1 from "../../assets/images/img1.png";

import Img3 from "../../assets/images/img3.png";
import Img4 from "../../assets/images/img4.png";
import Img5 from "../../assets/images/img5.png";

const BlogData = [
  {
    title: "Fresh From Farm",
    subtitle:
      "",
    published: "",
    image: Img4,
    aosDelay: "0",
  },
  {
    title: "Unique in Taste, Traditional Homemade Achar",
    subtitle:
      "",
    published: "",
    image: Img3,
    aosDelay: "200",
  },
  {
    title: "Sharing Happiness in Every Bottle",
    subtitle:
      "",
    published: "",
    image: Img5,
    aosDelay: "400",
  },
];
const Blogs = () => {
  return (
    <div className="my-12 mx-5">
      <div className="px-10">
        {/* Header section */}
        {/* <Heading title="~A Tradition of Trust~" subtitle={"Explore Our Blogs"} /> */}
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 className="text-4xl font-bold lg:text-5xl">~A Traidition of Trust~</h1>
          <p className="text-s text-gray-400">"Explore Our Pickles"</p>
        </div>

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-28">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.aosDelay}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;