/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineTrackChanges } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { VscSearch } from "react-icons/vsc";
import { MdOutlineFilterList } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";
import Chat from "./Chat";
import Chat1 from "./Chat1";
import Chat2 from "./Chat2";
import Chat3 from "./Chat3";
import Chat4 from "./Chat4";
import Chat5 from "./Chat5";
import Chat6 from "./Chat6";
import Newgroup from "./dropdown/Newgroup";
import Newcontact from "./dropdown/Newcontact";
import Home from "../Component/Home";
import Community from "./Navcomp.js/Community";
import Updates from "./Navcomp.js/Updates";
import Search from "./Sear2ch";
import Sear2ch from "./Sear2ch";

function Nav() {
  const [a, b] = useState(false);
  const [c, d] = useState(false);
  const [e, f] = useState(false);
  const [g, h] = useState(false);
  const [i, j] = useState(false);
  const [k, l] = useState(false);
  const [m, n] = useState(false);

  const [y, z] = useState(false);
  const [p, r] = useState(false);
  const [s, t] = useState(false);

  const [pq, qr] = useState(false);
  const [u,v] = useState(false);

  return (
    <>
      <div id="navjs" className="w-full h-full bg-red-400">
        <div id="navdiv" className="flex w-full absolute h-full">
          <div id="p11" className="w-[40%] h-[100%]  bg-[#111B21]">
            <div
              id="profiletab"
              className="w-full scroll-m-1 flex static h-20 justify-between border-1  bg-[#222E35]"
            >
              <button
                id="profilebtn"
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"
              >
                <img
                  className="w-14 h-14 rounded-full ml-1 mt-1 "
                  src="./iage/amit shah.webp"
                  alt="amit shah"
                />
              </button>

              <div
                class="offcanvas offcanvas-start"
                data-bs-backdrop="static"
                tabindex="-1"
                id="staticBackdrop"
                aria-labelledby="staticBackdropLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="staticBackdropLabel">
                    My profile
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                    <img
                      src="./iage/amit shah.webp"
                      className="aspect-square px-2 py-2 rounded-full"
                      alt="amit shah"
                    />
                    <div className="flex flex-col">
                      <span className="mt-2">Phone number</span>
                      <input
                        type="number"
                        className="border  bg-[#17191E] px-2 py-2 mt-1"
                        name="number"
                        id="number"
                        placeholder="+91 9675347285"
                      />
                      <span className="mt-2">About</span>
                      <input
                        type="number"
                        className="border bg-[#17191E] px-2 py-2 mt-1"
                        name="number"
                        id="number"
                        placeholder="MP of Gandhinagar, Politician"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 px-2 py-4">
                <div id="functpro" className="flex gap-3 px-0 py-0">
                  <button
                    onClick={() => qr(!pq)}
                    onDoubleClick={() => qr({})}
                    className="w-full px-1 py-1 h-auto"
                  >
                    <button
                      class="btn btn"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasWithBothOptions"
                      aria-controls="offcanvasWithBothOptions"
                    >
                      <MdOutlineGroups className="font-bold text-4xl w-7 h-7  text-white " />
                    </button>
                    <div
                      class="offcanvas offcanvas-start"
                      data-bs-scroll="true"
                      tabindex="-1"
                      id="offcanvasWithBothOptions"
                      aria-labelledby="offcanvasWithBothOptionsLabel"
                    >
                      <div id="iab" class="offcanvas-header">
                      <IoArrowBack className="font-bold text-2xl"/>
                        <h5
                          class="offcanvas-title"
                          id="offcanvasWithBothOptionsLabel"
                        >
                         Communities
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="offcanvas-body">
                        <div className="w-full  h-screen bg-[#0C1317]">
                          <div className="flex px-2 py-2 mb-2  bg-[#111B21]">
                            <IoIosPeople className="font-bold bg-[#00A884] rounded-lg text-5xl" />
                            <p className="ml-2 mt-2 font-semibold">
                              New Community
                            </p>
                          </div>
                          <hr className="border-2 border-transparent" />
                          <div className="w-full h-[4.5rem] bg-[#111B21]">
                            <div className="w-full flex h-fit">
                              <img
                                src="./iage/google.webp"
                                className="rounded-full w-16 ml-1  px-2 py-2 h-16"
                                alt=""
                              />
                              <p className="ml-2 mt-3">GDSC MIT</p>
                            </div>
                          </div>
                          <hr />
                          <div className="w-full h-[6rem] bg-[#111B21]">
                            <div className="w-full flex  h-[4.5rem]">
                              <IoIosNotifications className="text-5xl bg-[#00A884] rounded-lg ml-2 font-bold mt-4" />
                              <div className="w-full flex-col ml-4 h-auto mt-1 ">
                                <div id="cborder" className="">
                                <p className="ml-0 text-start  mt-2">GDSC MIT</p>
                                <p className="text-start mb-1 text-[#7E8E98] ">New groups and 4 more in community </p>
                                </div>
                                
                                <div className="ml-[29vw] -mt-6">
                                  <FaCircle className="text-[#00A884] w-2 h-2" />
                                </div>
                                <div className="w-full h-7 mt-3 ">
                                  <h3 className="text-start px-1 py-1 text-[#42C7B8]">
                                    View all
                                  </h3>
                                </div>
                              </div>
                              
                            </div>
                          </div>

                          {/* 2nd part */}
                          <hr className="border-2 border-transparent"  />
                          <div className="w-full h-[4.5rem] bg-[#111B21]">
                            <div className="w-full flex h-fit">
                              <img
                                src="./iage/loksatta.webp"
                                className="rounded-full w-16 ml-1  px-2 py-2 h-16"
                                alt=""
                              />
                              <p className="ml-2 mt-3">Loksattalive Official</p>
                            </div>
                          </div>
                          <hr />
                          <div className="w-full h-[6rem] bg-[#111B21]">
                            <div className="w-full flex  h-[4.5rem]">
                              <HiOutlineSpeakerphone className="text-5xl bg-[#00A884] rounded-lg ml-2 font-bold mt-4"  />
                              <div className="w-full flex-col ml-4 h-auto mt-1 ">
                                <div id="cborder" className="">
                                <p className="ml-0 text-start  mt-2">Announcements</p>
                                <p className="text-start mb-1 text-[#7E8E98] ">~Loksatta.com : Morning news</p>
                                </div>
                                
                                <div className="ml-[29vw] -mt-6">
                                  <FaCircle className="text-[#00A884] w-2 h-2" />
                                </div>
                                <div className="w-full h-7 mt-3 ">
                                  <h3 className="text-start px-1 py-1 text-[#42C7B8]">
                                    View all
                                  </h3>
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* updates */}
                  <button onClick={() => v(!u)}
                    className="w-full px-1 py-1  mt-1 -ml-3 h-auto">
                    <h1 className="text-white">
                      <MdOutlineTrackChanges className="w-7 h-7 px-1 py-1" />
                    </h1>
                  </button>
                

                  {/* channels */}
                  

                  {/*new chat */}
                 


                  
                  
                </div>
                <div id="dropdo" class="dropdown">
                  <a
                    id="navdropa"
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CiMenuKebab className="font-bold text-3xl mt-1 text-white" />
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item">
                        <button
                          onClick={() => z(!y)}
                          onDoubleClick={() => z({})}
                          className="w-full h-auto"
                        >
                          New Group
                        </button>
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        <button
                          onClick={() => r(!p)}
                          onDoubleClick={() => r({})}
                          className="w-full h-auto"
                        >
                          New Contact
                        </button>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <button
                          onClick={() => t(!s)}
                          onDoubleClick={() => t({})}
                          className="w-full h-auto"
                        >
                          Logout
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" w-full  h-3 mt-2 rounded-full ">
              <form action="form.php">
               <Sear2ch/>
                <VscSearch id="searchicon" />
              </form>
              <MdOutlineFilterList
                id="filter"
                className="text-white text-2xl ml-[30rem] -mt-5 cursor-pointer "
              />
            </div>
            {/* chat part */}
            {/* first chat :Navneet rana */}

            <button
              onClick={() => b(!a)}
              onDoubleClick={() => b({})}
              className="w-full h-auto"
            >
              <div
                id="chatp"
                className="flex w-full h-[4.5rem] bg-[#222E35] mt-3"
              >
                <div id="c1" className="w-1/6 h-fit ">
                  <button
                    class="btn btn-primary"
                    className="w-full h-full "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <img
                      src="./iage/navneet rana.webp"
                      id="proid"
                      className="w-16 h-16 rounded-full ml-1 mt-1"
                      alt="Navneet Rana"
                    />
                  </button>

                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Navneet Rana
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="text-center" class="offcanvas-body">
                      <img
                        src="./iage/navneet rana.webp"
                        className="aspect-square rounded-full"
                        alt="Navneet rana"
                      />
                      <p>Politician,MP of Yawatmal</p>
                      <p>Phone Number : 565787686</p>
                      <p>About : Actress</p>
                    </div>
                  </div>
                </div>
                <div
                  id="c2"
                  className="w-[72%]  text-white max-w-full bg-[#222E35] h-auto"
                >
                  <h4 className="text-white  w-full h-fit max-w-full ml-[-9rem]">
                    Navneet Rana
                  </h4>
                  <p className="text-white text-xs  w-full h-fit max-w-full ml-[-8rem]">
                    porm gh dgbdj lorem gc
                  </p>
                </div>
                <div
                  id="c3"
                  className="w-[12%] bg-[#222E35] text-white mt-1 -ml-1"
                >
                  <p className="text-xs text-end">12:42 PM</p>
                </div>
              </div>
            </button>

            {/* second chat: Mark zukerberg */}

            <button
              onClick={() => d(!c)}
              onDoubleClick={() => d({})}
              className="w-full h-auto"
            >
              <div
                id="chatp"
                className="flex w-full h-[4.5rem] bg-[#222E35] mt-0"
              >
                <div id="c1" className="w-1/6 h-fit ">
                  <button
                    class="btn btn-primary"
                    className="w-full h-full "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <img
                      src="./iage/mark.webp"
                      id="proid"
                      className="w-16 h-16 rounded-full ml-1 mt-1"
                      alt="Mark Zukerberg"
                    />
                  </button>

                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="0"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Mark Zukerberg
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="text-center" class="offcanvas-body">
                      <img
                        src="./iage/mark.webp"
                        className="aspect-square rounded-full"
                        alt="Mark Zukerberg"
                      />
                      <p>Founder and CEO of Facebook,Meta</p>
                      <p>Phone Number : 8767565275</p>
                      <p>About : Businessman</p>
                    </div>
                  </div>
                </div>
                <div
                  id="c2"
                  className="w-[72%]  text-white max-w-full bg-[#222E35] h-auto"
                >
                  <h4 className="text-white  w-full h-fit max-w-full ml-[-9rem]">
                    Mark Zukerberg
                  </h4>
                  <p className="text-white text-xs  w-full h-fit max-w-full ml-[-4.2rem]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div
                  id="c3"
                  className="w-[12%] bg-[#222E35] text-white mt-1 -ml-1"
                >
                  <p className="text-xs text-end">01:15 PM</p>
                </div>
              </div>
            </button>

            {/* Third chat : Giorgia Meloni */}

            <button
              onClick={() => f(!e)}
              onDoubleClick={() => f({})}
              className="w-full h-auto"
            >
              <div
                id="chatp"
                className="flex w-full h-[4.5rem] bg-[#222E35] mt-0"
              >
                <div id="c1" className="w-1/6 h-fit ">
                  <button
                    class="btn btn-primary"
                    className="w-full h-full "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <img
                      src="./iage/meloni.webp"
                      id="proid"
                      className="w-16 h-16 rounded-full ml-1 mt-1"
                      alt="Giorgia Meloni"
                    />
                  </button>

                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Giorgia Meloni
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="text-center" class="offcanvas-body">
                      <img
                        src="./iage/meloni.webp"
                        className="aspect-square rounded-full"
                        alt="Giorgia Meloni"
                      />
                      <p>Prime Minister Of Italy</p>
                      <p>Phone Number : 9867525275</p>
                      <p>About : Politician</p>
                    </div>
                  </div>
                </div>
                <div
                  id="c2"
                  className="w-[72%]  text-white max-w-full bg-[#222E35] h-auto"
                >
                  <h4 className="text-white  w-full h-fit max-w-full ml-[-9rem]">
                    Giorgia Meloni
                  </h4>
                  <p className="text-white text-xs  w-full h-fit max-w-full ml-[-5rem]">
                    ipsum dolor sit condefr yugiuhef jkj n chnn.
                  </p>
                </div>
                <div
                  id="c3"
                  className="w-[12%] bg-[#222E35] text-white mt-1 -ml-1"
                >
                  <p className="text-xs text-end">04:15 PM</p>
                </div>
              </div>
            </button>

            {/* Fourth Chat : Narendra Modi */}
            <button
              onClick={() => h(!g)}
              onDoubleClick={() => h({})}
              className="w-full h-auto"
            >
              <div
                id="chatp"
                className="flex w-full h-[4.5rem] bg-[#222E35] mt-0"
              >
                <div id="c1" className="w-1/6 h-fit ">
                  <button
                    class="btn btn-primary"
                    className="w-full h-full"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <img
                      src="./iage/narendra modi.webp"
                      id="proid"
                      className="w-16 h-16 rounded-full ml-1 mt-1"
                      alt="Narendra Modi"
                    />
                  </button>

                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="2"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Narendra Modi
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="text-center" class="offcanvas-body">
                      <img
                        src="./iage/narendra modi.webp"
                        className="aspect-square rounded-full"
                        alt="Narendra Modi"
                      />
                      <p>Prime Minister Of India</p>
                      <p>Phone Number : 875525275</p>
                      <p>About : Politician</p>
                    </div>
                  </div>
                </div>
                <div
                  id="c2"
                  className="w-[72%]  text-white max-w-full bg-[#222E35] h-auto"
                >
                  <h4 className="text-white  w-full h-fit max-w-full ml-[-9rem]">
                    Narendra Modi
                  </h4>
                  <p className="text-white text-xs  w-full h-fit max-w-full ml-[-5rem]">
                    ipsum Lorem, ipsum dolor,sit condefr.
                  </p>
                </div>
                <div
                  id="c3"
                  className="w-[12%] bg-[#222E35] text-white mt-1 -ml-1"
                >
                  <p className="text-xs text-end">04:56 PM</p>
                </div>
              </div>
            </button>

            {/* Fifth chat: Sheikh Mohammad*/}
            <button
              onClick={() => j(!i)}
              onDoubleClick={() => j({})}
              className="w-full h-auto"
            >
              <div
                id="chatp"
                className="flex w-full h-[4.5rem] bg-[#222E35] mt-0"
              >
                <div id="c1" className="w-1/6 h-fit ">
                  <button
                    class="btn btn-primary"
                    className="w-full h-full "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <img
                      src="./iage/sheikh-mohammed.webp"
                      id="proid"
                      className="w-16 h-16 rounded-full ml-1 mt-1"
                      alt="Sheikh Mohammad"
                    />
                  </button>

                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="2"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Sheikh Mohammad Rashid Khan
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="text-center" class="offcanvas-body">
                      <img
                        src="./iage/sheikh-mohammed.webp"
                        className="aspect-square rounded-full"
                        alt="Sheikh mohammad"
                      />
                      <p>Ruler of Dubai</p>
                      <p>Phone Number : 9055245175</p>
                      <p>About : King</p>
                    </div>
                  </div>
                </div>
                <div
                  id="c2"
                  className="w-[72%]  text-white max-w-full bg-[#222E35] h-auto"
                >
                  <h4 className="text-white  w-full h-fit max-w-full ml-[-4rem]">
                    Sheikh mohammad Bin al-makhtum
                  </h4>
                  <p className="text-white text-xs  w-full h-fit max-w-full ml-[-7rem]">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div
                  id="c3"
                  className="w-[12%] bg-[#222E35] text-white mt-1 -ml-1"
                >
                  <p className="text-xs text-end">05:16 PM</p>
                </div>
              </div>
            </button>

            {/* Sixth chat:  Joe biden */}
            <button
              onClick={() => l(!k)}
              onDoubleClick={() => l({})}
              className="w-full h-auto"
            >
              <div
                id="chatp"
                className="flex w-full h-[4.5rem] bg-[#222E35] mt-0"
              >
                <div id="c1" className="w-1/6 h-fit ">
                  <button
                    class="btn btn-primary"
                    className="w-full h-full "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <img
                      src="./iage/Joe biden.webp"
                      id="proid"
                      className="w-16 h-16 rounded-full ml-1 mt-1"
                      alt="Joe Biden"
                    />
                  </button>

                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="2"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Joe Biden
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="text-center" class="offcanvas-body">
                      <img
                        src="./iage/sheikh-mohammed.webp"
                        className="aspect-square rounded-full"
                        alt="Sheikh mohammad"
                      />
                      <p>President Of United States</p>
                      <p>Phone Number : 8965162018</p>
                      <p>About : Politician</p>
                    </div>
                  </div>
                </div>
                <div
                  id="c2"
                  className="w-[72%]  text-white max-w-full bg-[#222E35] h-auto"
                >
                  <h4 className="text-white  w-full h-fit max-w-full ml-[-9.3rem]">
                    Joe Biden
                  </h4>
                  <p className="text-white text-xs  w-full h-fit max-w-full ml-[-7rem]">
                    ipsum dolor lorem amet sit.
                  </p>
                </div>
                <div
                  id="c3"
                  className="w-[12%] bg-[#222E35] text-white mt-1 -ml-1"
                >
                  <p className="text-xs text-end">05:30 PM</p>
                </div>
              </div>
            </button>

            {/* Seventh Chat: elon musk */}
            <button
              onClick={() => n(!m)}
              onDoubleClick={() => n({})}
              className="w-full h-auto"
            >
              <div
                id="chatp"
                className="flex w-full h-[4.5rem] bg-[#222E35] mt-0"
              >
                <div id="c1" className="w-1/6 h-fit ">
                  <button
                    class="btn btn-primary"
                    className="w-full h-full "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <img
                      src="./iage/elon musk.webp"
                      id="proid"
                      className="w-16 h-16 rounded-full ml-1 mt-1"
                      alt="Elon musk"
                    />
                  </button>

                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="2"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Elon musk
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="text-center" class="offcanvas-body">
                      <img
                        src="./iage/elon musk.webp"
                        className="aspect-square rounded-full"
                        alt="Elon musk"
                      />
                      <p>Founder of Tesla</p>
                      <p>Phone Number : 342562018</p>
                      <p>About : Businessman</p>
                    </div>
                  </div>
                </div>
                <div
                  id="c2"
                  className="w-[72%]  text-white max-w-full bg-[#222E35] h-auto"
                >
                  <h4 className="text-white  w-full h-fit max-w-full ml-[-9.3rem]">
                    Elon Musk
                  </h4>
                  <p className="text-white text-xs  w-full h-fit max-w-full ml-[-7rem]">
                    amet sit ipsum dolor lorem.
                  </p>
                </div>
                <div
                  id="c3"
                  className="w-[12%] bg-[#222E35] text-white mt-1 -ml-1"
                >
                  <p className="text-xs text-end">05:50 PM</p>
                </div>
              </div>
            </button>

            {/* dropdown element */}
            {/* New group  */}

            <button
              onClick={() => z(!y)}
              onDoubleClick={() => z({})}
              className="w-full h-auto"
            ></button>
            {/* new contact */}
            <button
              onClick={() => r(!p)}
              onDoubleClick={() => r({})}
              className="w-full h-auto"
            ></button>

            {/* logout */}
            <button
              onClick={() => t(!s)}
              onDoubleClick={() => t({})}
              className="w-full h-auto"
            ></button>
          </div>

          

          <div id="p2" className="relative h-full bg-[#222E35] ">
            <h1 className="text-white">{a === true ? <Chat /> : ""}</h1>
            <h1>{c === true ? <Chat1 /> : ""}</h1>
            <h1>{e === true ? <Chat2 /> : ""}</h1>
            <h1>{g === true ? <Chat3 /> : ""}</h1>
            <h1>{i === true ? <Chat4 /> : ""}</h1>
            <h1>{k === true ? <Chat5 /> : ""}</h1>
            <h1>{m === true ? <Chat6 /> : ""}</h1>
            {/* dropdown desktop */}
            <h1 id="p2md" className="text-white">
              {y === true ? <Newgroup /> : ""}
            </h1>
            <h1 id="p2md1" className="text-white">
              {p === true ? <Newcontact /> : ""}
            </h1>
            <h1  className="text-white">{u === true ? <Updates/> : "" }</h1>

           
          </div>

          <div id="p2m" className="relative bg-[#222E35]">
            {/* dropdown mobile  */}
            <h1 className="text-white">{y === true ? <Newgroup /> : ""}</h1>
            <h1 className="text-white">{p === true ? <Newcontact /> : ""}</h1>
            <h1 className="p2mmw">{s === true ? <Home /> : ""}</h1>

            {/* navbar components */}
            <h1 className="text-white">{pq === true ? <Community /> : ""}</h1>
          </div>
            
        </div>
        <h1 id="p2md2w">{s === true ? <Home /> : ""}</h1>
      </div>
    </>
  );
}

export default Nav;
