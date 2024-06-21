/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

function Newcontact() {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };
 
    const showAlert = () => {
      alert('Contact Saved!');
    };

  
  return (
    <>
      {isVisible && (
        <div id="ncd" className="w-full h-screen bg-[#222E35]">
          <button onClick={handleButtonClick}>
            <IoChevronBack className="text-lg mt-2 font-bold" />
          </button>
          <IoIosContact className="font-bold text-white ml-80 w-20 h-20"/>
          <div className="w-full h-auto flex-col">
            <div id="ncinput" className="w-full mt-6   h-auto ">
              <input
                type="text"
                className="h-9  border"
                placeholder="First name"
              />
              <input
                type="text"
                className="mt-2 border h-9"
                placeholder="Last name"
              />
            </div>

            <div className="w-full h-auto">
              <div
                id="ncinpu2"
                className="flex rounded-md w-[70%] ml-[8vw] mt-4 border bg-[#17191E] text-white"
              >
                <span className="mt-[1.5vh] ml-1">Phone</span>
                <input
                  type="text"
                  name="Text"
                  id="Country"
                  defaultValue={"India"}
                />
              </div>
              <div
                id="ncinpu2"
                className="flex rounded-md w-[70%] ml-[8vw] mt-2 border bg-[#17191E] text-white"
              >
                <span className="mt-[1.5vh] ml-1 text-[#22E335]">mobile</span>
               <input className="border h-7 rounded" type="number" name="number" id="number" placeholder="+91" min={1} max={10} />
              </div>
            </div>

            <button id="savebtn" onClick={showAlert} className="px-4 font-semibold ml-80 mt-5 py-2 border rounded">Save</button>
          </div>
        </div>
      )}

      {isVisible && (
        <div id="ncm" className="w-full h-screen bg-[#222E35]">
          <button onClick={handleButtonClick}>
            <IoChevronBack className="text-lg mt-2 font-bold" />
          </button>
          <IoIosContact id="ioiocontact" className="font-bold text-white ml-56 w-20 h-20"/>
          <div id="ncm1" className="w-full h-auto flex-col">
            <div id="ncinput" className="w-[80%] mt-6   h-auto ">
              <input
                type="text"
                id="ncinp1"
                className="h-9  border"
                placeholder="First name"
              />
              <input
                type="text"
                id="ncinp1"
                className="mt-2 w-[80%] border h-9"
                placeholder="Last name"
              />
            </div>

            <div className="w-full h-auto">
              <div
                id="ncinpu2"
                className="flex rounded-md w-[80%] px-2 py-1 ml-[8vw] mt-4 border bg-[#17191E] text-white"
              >
                <span className="mt-[3vh] ml-1">Phone</span>
                <input
                  type="text"
                  id="ncinp1"
                  name="Text"
                  defaultValue={"India"}
                />
              </div>
              <div
                id="ncinpu2"
                className="flex rounded-md w-[80%] ml-[8vw] mt-2 border px-2 py-1 bg-[#17191E] text-white"
              >
                <span className="mt-[3vh] px-1 py-1 ml-1 text-[#22E335]">Mobile</span>
               <input  className="border px-1 py-1 rounded" type="number" name="number" id="ncinp1" placeholder="+91" min={1} max={10} />
              </div>
            </div>

            <button id="savebtn" onClick={showAlert} className="px-4 font-semibold ml-80 mt-5 py-2 border rounded">Save</button>
          </div>
        </div>
      )}
    </>
  );
}


export default Newcontact;
