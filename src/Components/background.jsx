import React from "react";
function Background() {
  return (
    <div className='absolute border z-[2] w-full h-full  bg-[url("/src/assets/green.png")]  object-fit flex justify-center ' >
      <div className="flex justify-center items-center text-[5vw] absolute top-0 w-full py-6 font-semibold text-green-950">
        Soil Details
      </div>

      <h1 className="absolute m-[40vh] text-[12vw] leading-none tracking-tighter font-semibold ">
        Gardener
      </h1>
    </div>
  );
}

export default Background;
