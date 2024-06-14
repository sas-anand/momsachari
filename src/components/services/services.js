import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-teal-950" />,
    title: "Shipping",
    description: "PAN India Delivery",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-teal-950" />,
    title: "Safe Money ",
    description: "100% Replacement Guaranteed",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-teal-950" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-teal-950" />,
    title: "Quick Support",
    description: "WhatsApp @+91 9226961604",
  },
];

const Services = () => {
  return (
    <div className="flex align-center justify-center ">
      <div className="my-14 md:my-20 w-3/4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div className="flex flex-col items-start sm:flex-row gap-8">
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold text-teal-950">
                  {data.title}
                </h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
