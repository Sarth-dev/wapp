/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FiVideo } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import { BsEmojiSmile } from "react-icons/bs";
import { GrFormAttachment } from "react-icons/gr";
import { MdKeyboardVoice } from "react-icons/md";
import ModalDialog from "./ModalDialogue";
import { IoChevronBack } from "react-icons/io5";

function Chat1() {
  const [show, setShow] = useState(false);
  const [showw, setShoww] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(true);

  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsDivVisible(false);
    setIsVisible(false);
  };
  return (
    <>
      {isDivVisible && (
        <div id="p2chat" className="w-full text-white h-screen bg-slate-600">
          <div id="p2c1" className="w-full flex h-[10vh]  bg-[#222E35]">
            <button onClick={handleButtonClick}>
              <IoChevronBack className="text-lg mt-2 font-bold" />
            </button>
            <img
              src="./iage/mark.webp"
              className="w-12 h-12 ml-1 mt-0 px-1 rounded-full py-2"
              alt="Navneet Rana"
            />
            <div id="p2c11" className="w-[70%] h-full bg-[#222E35]">
              <h2 className="mt-2 text-md ml-1">Mark Zukerberg</h2>
              <p className="text-sm ml-1">last seen today at 01:14PM ..</p>
            </div>
            <div id="p2c12" className="w-[30%] flex h-full ">
              <div className="w-[80%] h-full ">
                <div className="w-[70%] border rounded bg-[#4C5C66]  flex h-[50%]  mt-2 ml-6">
                  <FiVideo
                    id="p2video"
                    className="w-[50%] h-auto cursor-pointer mt-1 ml-2 border-1 px-1 py-1"
                  />
                  <button className="w-[50%] h-auto mt-1 cursor-pointer px-2 py-1 ml-1">
                    <IoCallOutline id="p2call" />
                  </button>
                </div>
              </div>
              <div className="w-[20%] h-full ">
                <VscSearch className="w-[60%] cursor-pointer h-auto font-bold mt-3 ml-1" />
              </div>
            </div>
          </div>
          <div id="p2c2" className="w-full h-[80vh] bg-[#222E35]">
            <ModalDialog className="w-full  h-full" isOpen={show}>
              <img
                src="./iage/mark.webp"
                className="w-28 rounded h-28 ml-80"
                alt="Navneet rana"
              />
              <p className="text-md text-center font-medium mt-4 ">
                Hello There!
              </p>
              <p className="text-md text-center font-medium ">
                Mark Elliot Zuckerberg (Born on May 14, 1984) is an American
                businessman. He co-founded the social media service Facebook,
                along with his Harvard roommates in 2004, and its parent company
                Meta Platforms (formerly Facebook, Inc.), of which he is
                chairman, chief executive officer
              </p>
              <br />
              <button
                onClick={() => {
                  setShow(false);
                }}
              >
                {" "}
                <p className="text-md font-medium ml-[22.5rem]">Close</p>{" "}
              </button>
            </ModalDialog>
          </div>
          <div id="p2c3" className="w-full flex h-[10vh] bg-slate-800">
            <BsEmojiSmile className="w-8 h-8 px-1 cursor-pointer py-1 mt-3 ml-2" />
            <GrFormAttachment className="w-8 h-8 px-0 cursor-pointer py-0 mt-3 ml-2" />
            <div className="w-[80%] h-full ">
              <button
                className="w-[100%] border rounded mt-3 text-start h-8"
                onClick={() => setShow(true)}
              >
                Type a Message
              </button>
            </div>
            <MdKeyboardVoice className="w-8 h-8 px-1 py-1 mt-3 cursor-pointer ml-2" />
          </div>
        </div>
      )}

      {isVisible && (
        <div id="p2chat1" className="w-full h-screen bg-slate-600">
          <div id="p2c1" className="w-full flex h-[10vh]  bg-[#222E35]">
            <button onClick={handleButtonClick}>
              <IoChevronBack className="text-lg mt-2 font-bold" />
            </button>

            <img
              src="./iage/mark.webp"
              className="w-12 h-12 ml-1 mt-0 px-1 rounded-full py-2"
              alt="Mark Zukerberg"
            />
            <div id="p2c11" className="w-[70%] h-full bg-[#222E35]">
              <h2 className="mt-2 text-md ml-1">Mark Zukerberg</h2>
              <p className="text-sm ml-1">last seen today at 10:44PM ..</p>
            </div>
            <div id="p2c12" className="w-[30%] flex h-full ">
              <div className="w-[80%] h-full ">
                <div className="w-[70%] border rounded bg-[#4C5C66]  flex h-[50%]  mt-2 ml-6">
                  <FiVideo
                    id="p2video"
                    className="w-[50%] h-auto cursor-pointer mt-1 ml-2 border-1 px-1 py-1"
                  />
                  <button className="w-[50%] h-auto mt-1 cursor-pointer px-2 py-1 ml-1">
                    <IoCallOutline id="p2call" />
                  </button>
                </div>
              </div>
              <div className="w-[20%] h-full ">
                <VscSearch
                  id="vscrach"
                  className="w-[60%] cursor-pointer h-auto font-bold mt-3 ml-1"
                />
              </div>
            </div>
          </div>
          <div id="p2c2" className="w-full h-[80vh] bg-[#222E35]">
            <ModalDialog
              id="Modaldialogue"
              className="w-full  h-full"
              isOpen={showw}
            >
              <img
                src="./iage/mark.webp"
                className="w-28 h-28 ml-80"
                alt="Mark Zukerberg"
              />
              <p className="text-md text-center font-medium mt-4 ">
                Hello There!
              </p>
              <p className="text-md text-center font-medium ">
                Mark Elliot Zuckerberg (Born on May 14, 1984) is an American
                businessman. He co-founded the social media service Facebook,
                along with his Harvard roommates in 2004, and its parent company
                Meta Platforms (formerly Facebook, Inc.), of which he is
                chairman, chief executive officer
              </p>
              <br />
              <button
                onClick={() => {
                  setShoww(false);
                }}
              >
                <p id="close" className="text-md font-medium ml-[22.5rem]">
                  Close
                </p>
              </button>
            </ModalDialog>
          </div>
          <div id="p2c3" className="w-full flex h-[10vh] bg-slate-800">
            <BsEmojiSmile className="w-8 h-8 px-1 cursor-pointer py-1 mt-3 ml-2" />
            <GrFormAttachment className="w-8 h-8 px-0 cursor-pointer py-0 mt-3 ml-2" />
            <div className="w-[80%] h-full ">
              <button
                className="w-[100%] border rounded mt-3 text-start h-8"
                onClick={() => setShoww(true)}
              >
                Type a Message
              </button>
            </div>
            <MdKeyboardVoice className="w-8 h-8 px-1 py-1 mt-3 cursor-pointer ml-2" />
          </div>
        </div>
      )}
    </>
  );
}

export default Chat1;
