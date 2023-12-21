import React from "react";
import ProfileButtonMenu from "./buttons/PrfileButton";
import CarButtonMenu from "./buttons/CarButton";
import HeartButtonMenu from "./buttons/HeartButton";
import PopoverNav from "./Popover";

function NavBarTop() {
  return (
    <>
      <div className="z-1 flex flex-wrap">
        <section className="">
          <nav
            style={{ width: "100%", position: "fixed", top: 0, zIndex: 1000 }}
            className="flex justify-between text-white bg-black"
          >
            <div className="py-6 flex w-full items-center">
              <a
                className="text-3xl xl:mx-auto ml-3 font-bold font-heading"
                href="/"
              >
                <img className="h-9" src="logo.png" alt="logo" />
              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-gray-200" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="/menu">
                    Menu
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="/eventos">
                    Contacto para Eventos
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="/contact">
                    Contactanos
                  </a>
                </li>
              </ul>
              <div className="hidden mx-auto xl:flex space-x-5 ml-auto items-center">
                <HeartButtonMenu />
                <CarButtonMenu />
                <ProfileButtonMenu />
              </div>
            </div>
            <a className="xl:hidden flex mr-6 items-center" href="/#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a
              className="relative navbar-burger self-center mr-12 xl:hidden"
              href="/#"
            >
              <PopoverNav />
            </a>
          </nav>
        </section>
      </div>
    </>
  );
}

export default NavBarTop;
