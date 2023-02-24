import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap ml-36">
      {Array(10)
        .fill("")
        .map((index) => (
          <div
            className="bg-gray-200 animate-pulse border border-gray-300 shadow-xl p-2 m-2 w-64 h-64 rounded-md"
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
