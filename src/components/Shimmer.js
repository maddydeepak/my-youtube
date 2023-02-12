import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((index) => (
          <div
            className="bg-gray-200 border border-gray-300 shadow-xl p-2 m-2 h-60 w-72 rounded-md"
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
