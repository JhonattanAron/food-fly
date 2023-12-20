export default function HeaderHome() {
  return (
    <div className="mt-15 pb-10 bg-chef">
      <div class=" pt-4 overflow-hidden relative lg:flex lg:items-center">
        <div class=" pt-10 w-1/2 px-4 lg:py-16 z-0 bg-black-tr rounded-lg m-3">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block text-red-300 text-5xl">
              Gourmeth en Casa , Quito
            </span>
          </h2>
          <p class="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful
            National parks, Bryce national canion park ranks as three of the
            most magnificient &amp; awe inspiring.
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center px-4 p-50 w-1/2 gap-8 z-1">
          <img
            src="https://images.unsplash.com/photo-1598679253544-2c97992403ea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="w-1/2 rounded-lg"
            alt="Tree"
          />
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="mb-8 w-30 rounded-lg"
              alt="Tree"
            />
            <img
              className="h-50"
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="rounded-lg w-30"
              alt="Tree"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
