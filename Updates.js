/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

function Updates() {
  const [isDivVisible, setIsDivVisible] = useState(true);

  const handleButtonClick = () => {
    setIsDivVisible(false);
  };
  return (
    <>
      {isDivVisible && (
        <>
          <div className="w-full h-screen" id="h1up">
            <button
              className="w-full flex h-28 bg-[#202C33]"
              onClick={handleButtonClick}
            >
              <IoArrowBack className="text-2xl ml-3 mt-[4.2rem] text-white  font-bold" />
              <h3 className="mt-16 ml-5 text-xl font-semibold">Status</h3>
            </button>
            <div id="scrollablediv" className="w-full scroll-m-2 h-full bg-[#111B21]">
              <div className="flex w-full h-auto">
                <img
                  src="./img/amit shah.webp"
                  alt="amit shah"
                  className="w-10 mt-3 ml-3 h-10 rounded-full"
                />
                <div className="flex">
                  <h4 className="ml-3 text-[#ACB6C9] mt-3">My Status</h4>
                  <p className="ml-[-4.3rem] text-[#AEB6C9] mt-[2.3rem] text-xs">
                    No updates
                  </p>
                </div>
              </div>

              <h3 className="text-[#017A65] mt-4 ml-3">RECENT</h3>

              <div id="upd" className="flex w-full px-2 mt-2 py-2 h-auto">
                <div id="statusimg" className=" ml-2 px-1 py-1 rounded-full">
                  <div>
                  <img
                    src="./img/amit shah.webp"
                    alt="amit shah"
                    className="w-12   h-12 mt-0 rounded-full"
                  />
                  </div>
                </div>
                <div id="statusup" className="flex w-full ml-2 ">
                  <h4 className="ml-2 mt-1 text-[#ACB6C9] ">My Status</h4>
                  <p className="ml-[-4.3rem] mb-2 text-[#AEB6C9] mt-4 text-xs">
                    No updates
                  </p>
                </div>
              </div>

              <div id="upd"  className="flex w-full px-2 mt-0 py-2 h-auto">
                <div id="statusimg" className=" ml-2 px-1 py-1 rounded-full">
                  <div>
                  <img
                    src="./img/meloni.webp"
                    alt="Meloni"
                    className="w-12   h-12 mt-0 rounded-full"
                  />
                  </div>
                </div>
                <div id="statusup1" className="flex w-full ml-2 ">
                  <h4 className="ml-2 mt-1 text-[#ACB6C9] ">My Status</h4>
                  <p className="ml-[-4.3rem] mb-2 text-[#AEB6C9] mt-4 text-xs">
                    No updates
                  </p>
                </div>
              </div>

              <div id="upd" className="flex w-full px-2 mt-0 py-2 h-auto">
                <div id="statusimg" className=" ml-2 px-1 py-1 rounded-full">
                  <div>
                  <img
                    src="./img/Joe biden.webp"
                    alt="joe biden"
                    className="w-12   h-12 mt-0 rounded-full"
                  />
                  </div>
                </div>
                <div id="statusup1" className="flex w-full ml-2 ">
                  <h4 className="ml-2 mt-1 text-[#ACB6C9] ">My Status</h4>
                  <p className="ml-[-4.3rem] mb-2 text-[#AEB6C9] mt-4 text-xs">
                    No updates
                  </p>
                </div>
              </div>

              <div id="upd" className="flex w-full px-2 mt-0 py-2 h-auto">
                <div id="statusimg" className=" ml-2 px-1 py-1 rounded-full">
                  <div>
                  <img
                    src="./img/elon musk.webp"
                    alt="joe biden"
                    className="w-12   h-12 mt-0 rounded-full"
                  />
                  </div>
                </div>
                <div id="statusup1" className="flex w-full ml-2 ">
                  <h4 className="ml-2 mt-1 text-[#ACB6C9] ">My Status</h4>
                  <p className="ml-[-4.3rem] mb-2 text-[#AEB6C9] mt-4 text-xs">
                    No updates
                  </p>
                </div>
              </div>


              <div id="upd" className="flex w-full px-2 mt-0 py-2 h-auto">
                <div id="statusimg" className=" ml-2 px-1 py-1 rounded-full">
                  <div>
                  <img
                    src="./img/narendra modi.webp"
                    alt="joe biden"
                    className="w-12   h-12 mt-0 rounded-full"
                  />
                  </div>
                </div>
                <div id="statusup1" className="flex w-full ml-2 ">
                  <h4 className="ml-2 mt-1 text-[#ACB6C9] ">My Status</h4>
                  <p className="ml-[-4.3rem] mb-2 text-[#AEB6C9] mt-4 text-xs">
                    No updates
                  </p>
                </div>
              </div>


              <div id="upd" className="flex w-full px-2 mt-0 py-2 h-auto">
                <div id="statusimg" className=" ml-2 px-1 py-1 rounded-full">
                  <div>
                  <img
                    src="./img/navneet rana.webp"
                    alt="joe biden"
                    className="w-12   h-12 mt-0 rounded-full"
                  />
                  </div>
                </div>
                <div id="statusup1" className="flex w-full ml-2 ">
                  <h4 className="ml-2 mt-1 text-[#ACB6C9] ">My Status</h4>
                  <p className="ml-[-4.3rem] mb-2 text-[#AEB6C9] mt-4 text-xs">
                    No updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Updates;
