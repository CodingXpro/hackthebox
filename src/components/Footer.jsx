/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black mt-8 w-full px-8 md:px-[500px] flex md:flex-row flex-col md:space-y-0 space-y-4 justify-between text-sm md:text-md py-8">
        <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choise</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <p className="py-2 pb-10 text-center bg-red-500 text-white w-full">
        All rights reserved @Blog Market 2023
      </p>
    </>
  );
};

export default Footer;
