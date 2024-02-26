import React from "react";
import monitor from "../assets/monitor.png";
import star from "../assets/star.png";
import trophyIcon from "../assets/trophy-icon.png";

const RectangleContainer = ({ props }) => {
  return (
    <section className="my-4 mx-1 rounded-xl p-5 grid border-2 border-gray-500 md:border-none md:grid-cols-custom place-items-center relative">
      <div className="my-2p-10">
        <img src={monitor} alt="monitor" className="w-60" />
        <p className="m-4 text-center text-gray-500">Builder 1</p>
      </div>
      {/* Text section */}
      <div className="my-2">
        <p className="text-gray-500 text-xl">
          <span className="text-black font-bold mr-1">
            {props.webBuilder.name}
          </span>
          {props.webBuilder.description}
        </p>
        <h4 className="my-2 font-bold text-xl">Main highlights</h4>
        <p className="pl-4 text-gray-500 text-xl">{props.whatYouGet}</p>
        <div className="flex items-center mt-2 text-xl font-semibold">
          <h4 className="text-blue-500">Show more</h4>
          <div className="text-blue-500 rotate-90 translate-y-[3px] px-2 text-xl">
            &#62;
          </div>
        </div>
      </div>
      {/* Rating section */}
      <div className="my-2p-5 pt-0">
        <div className="m-5 mt-0 text-center bg-blue-50 rounded-b-xl">
          <h4 className="p-4 text-5xl">{props.rating.point}</h4>
          <p>{props.rating.compliment}</p>
          <div className="p-3 flex justify-center ">
            <img src={star} alt="rating-star" />
            <img src={star} alt="rating-star" />
            <img src={star} alt="rating-star" />
            <img src={star} alt="rating-star" />
            <img src={star} alt="rating-star" />
          </div>
        </div>
        <button className="mt-10 py-2 px-20 bg-blue-500 text-white rounded-lg">
          View
        </button>
      </div>
      {/* Rank number on the top */}
      <h3 className="absolute w-10 h-10 hidden lg:grid place-items-center -left-5 top-10 rounded-full border">{props.id}</h3>
      {/* TOP CHOICE on the top */}
      <div className={`absolute p-2 ${props.topChoice} items-center gap-2 -left-2 -top-5 bg-orange-500 text-white rounded-r-xl border`}><img src={trophyIcon}/><h3>Top Choice</h3></div>
    </section>
  );
};

export default RectangleContainer;
