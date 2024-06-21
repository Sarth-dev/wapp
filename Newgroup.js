/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { useState } from "react";
import Search from "./Search";
import { IoChevronBack } from "react-icons/io5";

function Newgroup() {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div id="ngm" className="w-full h-screen">
          <div className="w-[100vw] h-full bg-[#222E35] ml-[-99vw]">
            <button onClick={handleButtonClick}>
              <IoChevronBack className="text-lg mt-2 font-bold" />
            </button>

            <Search className="ml-6" />
            <span className="font-semibold">Frequently Searched</span>
            <p className="px-2 py-2 bg-[#17191E] mt-2 text-white border rounded-lg">
              Giorgia Meloni
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 text-white border rounded-lg">
              Narendra Modi
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 text-white border rounded-lg">
              Elon Musk
            </p>

            <span className="font-semibold ml-1">All Contact</span>
            <p className="px-2 py-2 bg-[#17191E] mt-2 ml-1 text-white border rounded-lg">
              Nitin Gadkari
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Chirag Paswan
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Elon Musk
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Vijay Setupati
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Rahul Gandhi
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Y S jagan Reddy
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Pawan Kalyan
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Bajrang Sonwane
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Pankja Munde
            </p>
          </div>
        </div>
      )}


      {isVisible && (
        <div id="ngd"  className="w-full h-screen">
          <div className="w-[59vw] h-full bg-[#222E35] ">
            <button onClick={handleButtonClick}>
              <IoChevronBack className="text-lg mt-2 font-bold" />
            </button>

            <Search className="ml-6" />
            <span className="font-semibold ml-1">Frequently Searched</span>
            <p className="px-2 py-2 bg-[#17191E] mt-2 ml-1 text-white border rounded-lg">
              Giorgia Meloni
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Narendra Modi
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Elon Musk
            </p>

            <span className="font-semibold ml-1">All Contact</span>
            <p className="px-2 py-2 bg-[#17191E] mt-2 ml-1 text-white border rounded-lg">
              Nitin Gadkari
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Chirag Paswan
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Elon Musk
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Vijay Setupati
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Rahul Gandhi
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Y S jagan Reddy
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Pawan Kalyan
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Bajrang Sonwane
            </p>
            <p className="px-2 py-2 bg-[#17191E] mt-1 ml-1 text-white border rounded-lg">
              Pankja Munde
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Newgroup;
