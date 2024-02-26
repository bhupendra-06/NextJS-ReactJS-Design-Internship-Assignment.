import React from "react";
import RectangleContainer from "./RectangleContainer";

const Main = () => {
  const samples = [
    {
      id: 1,
      topChoice: "flex",
      webBuilder: {
        name: "WixPro 72-Inch Responsive Website Builder-",
        description:
          "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      },
      whatYouGet:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: { point: 9.8, compliment: "Exceptional" },
    },
    {
      id: 2,
      topChoice: "flex",
      webBuilder: {
        name: "SiteCraft 68-Inch Ultimate Web Design Studio",
        description:
          "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      },
      whatYouGet:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: { point: 9.5, compliment: "Excellent" },
    },
    {
      id: 3,
      topChoice: "hidden",
      webBuilder: {
        name: "WixPro 72-Inch Responsive Website Builder-",
        description:
          "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      },
      whatYouGet:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: { point: 9.3, compliment: "Exceptional" },
    },
    {
      id: 3,
      topChoice: "hidden",
      webBuilder: {
        name: "CDK Resposive Builder:",
        description:
          "An extensive library of widgets and apps, and detailed step-by-step guides",
      },
      whatYouGet:
        "[What You Get]: I was trying to make it but the deadline came",
      rating: { point: 9.3, compliment: "Exceptional" },
    },
  ];

  return (
    <main className="mx-auto max-w-[1024px]">
      <h1 className="mt-10 px-6 text-4xl p2">
        Best Website builders in the US
      </h1>
      {/* Update section */}
      <div className="mt-4 mx-3 flex justify-between items-center border-y border-gray-300">
        <div className="flex justify-between gap-5">
          <div className="p-2">
            Last Updated - <span>February 22, 2020</span>
          </div>
          <div className="p-2">
            <div>Advertising Disclosure</div>
          </div>
        </div>
        <div className="flex items-start">
          <div>Top Relevant</div>
          <div className="mx-2 text-xl rotate-90">&#62;</div>
        </div>
      </div>
      {/* Navbar section */}
      <ul className="p-2 hidden md:flex">
        <li className="m-2 py-2 pl-4 pr-6 rounded-2xl bg-gray-100">Tools</li>
        <li className="m-2 py-2 pl-4 pr-6 rounded-2xl bg-gray-100">
          AWS Builder
        </li>
        <li className="m-2 py-2 pl-4 pr-6 rounded-2xl bg-gray-100">
          Start Build
        </li>
        <li className="m-2 py-2 pl-4 pr-6 rounded-2xl bg-gray-100">
          Build Supplies
        </li>
        <li className="m-2 py-2 pl-4 pr-6 rounded-2xl bg-gray-100">Tooling</li>
        <li className="m-2 py-2 pl-4 pr-6 rounded-2xl bg-gray-100">
          BlueHosting
        </li>
      </ul>
      {/* Path section */}
      <div className="m-5 mb-10 flex gap-1 sm:gap-3">
        <p>Home</p>
        <p>&#62;</p>
        <p className="hidden sm:inline-block">Hosting for all</p>
        <p className="hidden sm:inline-block">&#62;</p>
        <p className="hidden sm:inline-block">Hosting</p>
        <p className="hidden sm:inline-block">&#62;</p>
        <p className="hidden sm:inline-block">Hosting6</p>
        <p className="">&#62;</p>
        <p>Hosting5</p>
      </div>

      {/* Rectangle section starts. Here i used map funtion to return all the samples of the RectangleContainer component */}
      {samples.map((sample) => {
        return <RectangleContainer props={sample}/>;
      })}
    </main>
  );
};

export default Main;
