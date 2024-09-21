const CustomizeProduct = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
       <li
        className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-black">
         <div
        className="absolute w-10 h-10 rounded-full ring-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        </li>
       <li
        className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">
        </li>
       <li
        className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-white">
        <div
        className="absolute w-10 h-[2px] bg-green-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li
         className="ring-1 ring-areesha text-areesha rounded-md py-1 px-4 text-sm cursor-pointer">
         Small
         </li>
        <li
         className="ring-1 ring-areesha text-white bg-areesha rounded-md py-1 px-4 text-sm cursor-pointer">
        Medium
         </li>
        <li
         className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
         Large
         </li>
      </ul>
    </div>
  )
}

export default CustomizeProduct
