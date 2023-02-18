import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-100 hover:bg-black hover:text-white rounded-md text-sm font-semibold m-2 p-2">
      {name}
    </button>
  );
};

export default Button;
