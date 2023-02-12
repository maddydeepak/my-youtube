import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-100 rounded-md text-sm font-semibold m-2 p-2">
      {name}
    </button>
  );
};

export default Button;
