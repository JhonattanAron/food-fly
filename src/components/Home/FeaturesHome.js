import React from "react";
import { Typewriter } from "react-simple-typewriter";

function FeaturesHome() {
  return (
    <div class="relative p-4 px-4 w-auto bg-black sm:px-6 lg:px-8 py-26">
      <div class="relative">
        <div class="lg:grid lg:grid-flow-row-dense lg:mt-8 lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
            <p class="text-7xl mb-10 font-bold  text-red-400 uppercase">
              Quito Food Fly
            </p>
            <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
              Te Ofrecemos{" "}
              <span className="text-3xl text-red-300 font-extrabold">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Con el mejor Sabor",
                    "A lo comodidad de Tu Casa",
                    "Pide y nosotros te lo llevamos",
                    "Solo en Quito Food Fly",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h4>
            <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Experiencia Gastronómica Única
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Atención al Cliente Excepcional
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Ofertas y Promociones Atractivas
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Desde la Comodidad de tu Casa
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div class="relative space-y-4">
              <div class="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  class="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="1"
                />
                <img
                  class="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src="https://images.unsplash.com/photo-1626663011519-b42e5ee10056?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="2"
                />
              </div>
              <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  class="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="3"
                />
                <img
                  class="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesHome;
