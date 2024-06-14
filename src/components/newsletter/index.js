import React from "react";
import "./style.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Button } from "@mui/material";

const Newsletter = () => {
  return (
    // <div className='newsLetterBanner'>
    //     <SendOutlinedIcon />
    //     <input type='text' placeholder='Your email address' />
    //     <Button className='bg-g'>Subscribe</Button>
    // </div>

    <div
      data-aos="zoom-out"
      className="py-8 mt-24 hidden md:block bg-yellow-100"
    >
      <div className="container">
        <div className="flex justify-center align-center">
          {/* <div className='newsLetterBanner'>
            <SendOutlinedIcon />
            <input type='text' placeholder='Your email address' />
            <Button className='bg-g'>Subscribe</Button>
        </div> */}
          <div>
            <div className="text-teal-950 text-4xl px-2 py-3 font-bold lg:text-5xl">
              Subscribe for an update
            </div>
            <div className="flex align-center justify-center gap-7">
              <input
                type="text"
                placeholder="Your email address"
                className="rounded-full w-3/5 outline-none px-8"
              />
              <button className="text-white my-4 bg-teal-950 rounded-full px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
