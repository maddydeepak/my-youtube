import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: randomNameGenerator(5),
          message: randomNameGenerator(25),
        })
      );
    }, 1000);
    return () => {
      clearInterval(i);
    };
  }, []);

  const randomNameGenerator = (num) => {
    let res = "";
    for (let i = 0; i < num; i++) {
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
    }
    return res;
  };

  return (
    <div>
      <div className="mt-4 rounded-md border border-black h-60 p-2 w-96 overflow-scroll flex-col-reverse">
        <div className="text-md font-bold">Live Chat</div>
        {chatMessage?.map((item) => (
          <ChatMessage
            key={item.name}
            name={item.name}
            message={item.message}
          />
        ))}
      </div>
      <form
        className="border border-black my-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Deepak",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="mx-2 px-2"
          type="text"
          value={liveMessage}
          placeholder="Your Message"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="m-2 bg-green-200 text-sm font-bold p-1">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
