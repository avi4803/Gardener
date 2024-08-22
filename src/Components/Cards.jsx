import React from "react";

function Cards({ title, description, tempData, url }) {
  return (
    <div className="p-10 flex items-center">
      <div className=" relative shadow-2xl drop-shadow-lg  rounded-[20px] text-white  p-10  bg-green-900/70  overflow-hidden ">
        <h2 className="text-[2rem] text-center font-bold ">
          {title}{" "}
        </h2>

        <div className="img flex justify-center ">
          <img className="h-30 w-40 p-3 " src={url} alt="" />
        </div>

        <h2 className="text-[3rem] text-center font-bold ">{tempData} </h2>

        <p className="text-sm mt-5 font-semibold leading-tight">
          {description}
        </p>
        <div className="data flex items-center  mt-5 justify-between "></div>
      </div>
    </div>
  );
}

export default Cards;
