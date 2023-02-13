import React from "react";
import Button from "./Button";

// use scrollable button list for more buttons
const ButtonList = () => {
  const buttonList = [
    "All",
    "JavaScript",
    "React JS",
    "Music",
    "Comedy",
    "Gaming",
    "TED Talks",
    "Entertainment",
    "Rocket Science",
    "India",
    "Electinos",
    "World",
  ];
  return (
    <div className="ml-36">
      {buttonList.map((item, index) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
