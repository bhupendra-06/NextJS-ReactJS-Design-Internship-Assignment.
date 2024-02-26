import React from "react";
import RelatedCard from "./RelatedCard";

const RelatedSection = () => {
  return (
    <div className="mx-auto max-w-[1024px]">
      <h2 className="mt-8 ml-4 text-3xl font-semibold">
        Related deals you might like for
      </h2>
      <div className="flex flex-wrap justify-evenly">
        <RelatedCard />
        <RelatedCard />
        <RelatedCard />
      </div>
      <div className="mx-20 my-10 mt-4 flex justify-between">
        <div className="text-2xl text-gray-500 max-w-64">Sign up and get exclusive special deals</div>
        <div className="h-10 flex border border-gray-300 overflow-hidden rounded-lg">
          <input type="email" className="py-1 px-2 border-none outline-none "/>
          <input type="submit" value={'Sign Up'} className="py-1 px-2 border-none outline-none bg-blue-500 text-white"/>
        </div>
      </div>
    </div>
  );
};

export default RelatedSection;
