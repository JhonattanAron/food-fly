export default function CardMenu(props) {
  return (
    <div class="xl:w-[25rem] h-[16rem] flex  overflow-hidden drop-shadow-2xl bg-white rounded-lg shadow-lg">
      <div class="w-1/3 bg-cover flex justify-center align-middle ">
        <img
          src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imgPortada"
          className="w-auto h-auto"
        ></img>
      </div>
      <div class="w-2/3 p-4">
        <h1 class="text-2xl font-bold text-gray-900">{props.name}</h1>
        <p class="mt-2 text-sm text-gray-600">{props.description}</p>
        <div class="flex mt-2 item-center">
          <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
          <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
          <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
          <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
          <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
        </div>
        <div class="xl:flex flex-col justify-between mt-3 item-center">
          <h1 class="text-xl font-bold text-gray-700">${props.price}</h1>
          <button class="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}
