import React from "react";
import monitor from "../assets/monitor.png";

const RelatedCard = () => {
  return (
    <div className="mx-1 my-4 p-4 bg-red- text-gray-500 rounded-xl">
      <div className="p-10">
        <img src={monitor} alt="monitor" className="w-40" />
      </div>
      <div className="flex gap-1">
        <p className="py-1 px-2 text-sm text-blue-600 bg-blue-200 rounded-lg">
          20% Off
        </p>
        <p className="py-1 px-2 text-sm text-blue-600 bg-blue-200 rounded-lg">
          Limited time
        </p>
      </div>
      <h4 className="font-semibold">Webbuilder 1</h4>
      <p>Computer Modern clasic with wix</p>
      <p>support</p>
      <div className="my-2 flex items-end gap-2">
        <p className="text-xl">$39.96</p>
        <p className="text-sm text-gray-400">$49.96</p>
        <p className="text-sm text-red-500">(20% Off)</p>
      </div>
      <button className="mt-10 py-2 px-20 bg-blue-500 text-white rounded-lg">
        View Deals
      </button>
    </div>
  );
};

export default RelatedCard;
