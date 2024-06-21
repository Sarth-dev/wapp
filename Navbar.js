/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full  h-full">
        <div id="wlogo" className="w-full  h-[5rem] flex">
          <img
            className="w-[10rem] h-8 ml-5 mt-6"
            src="./Images and videos/whatsapp logo.png"
            alt="Whatsapp logo"
          />
          <div className="ml-auto flex">
            <ul id="li" className="flex px-8 py-7">
              <li>
                <a className="ml-9" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="ml-9" href="#">
                  About
                </a>
              </li>
              <li>
                {" "}
                <a className="ml-9" href="#">
                  Contact
                </a>
              </li>

              <div class="dropdown">
                <button
                  className="ml-9 font-bold"
                  class="btn btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="ri-menu-3-fill"></i>
                </button>
                <ul id="dropli" class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
