import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-custom text-gray-300">
      <div className="mx-auto p-5 max-w-[1024px] flex items-center sm:items-start justify-between flex-col sm:flex-row">
        <div className="my-2 text-center sm:text-start">
          <h4 className="mb-2 text-2xl capitalize font-semibold text-white">Categories</h4>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </div>
        <div className="my-2 text-center sm:text-start">
          <h4 className="mb-2 text-2xl capitalize font-semibold text-white">Contact</h4>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </div>
        <div className="my-2 text-center sm:text-start">United States</div>
      </div>
    </div>
  );
};

export default Footer;
