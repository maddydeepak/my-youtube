import React from "react";
import user from "../assets/img/user.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex bg-gray-50 my-1 rounded-md">
      <img src={user} className="h-6" />
      <span className="mx-1 font-bold">{name}</span>
      <span className="mx-1">{message} 🚀</span>
    </div>
  );
};

export default ChatMessage;
