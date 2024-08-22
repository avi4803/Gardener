import React from "react";
function Background() {
  return (
    <div className='absolute border z-[2] w-screen h-screen  bg-[url("/src/assets/green.png")]  object-fit flex justify-center ' >
      <div className="flex justify-center items-center text-[60px] md:text-[80px] absolute top-0 w-full md:py-12 font-semibold text-green-950">
        Soil Details
      </div>

      <h1 className="fixed self-center text-[90px] md:text-[250px] leading-none  font-semibold ">
        Gardener
      </h1>
    </div>
  );
}

export default Background;
