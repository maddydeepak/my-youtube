import React from "react";
import Button from "./Button";

//const buttonList = ["All", "Gaming", "Songs"];
// use scrollable button list for more buttons
const ButtonList = () => {
  return (
    <div>
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
    </div>
  );
};

export default ButtonList;
