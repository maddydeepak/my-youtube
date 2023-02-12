import React from "react";
import user from "../assets/img/user.png";
import CommentsList from "./CommentsList";

const Comment = (data) => {
  return (
    <div className="">
      <div className="flex">
        <img src={user} className="w-6" />
        <p className="mx-2 font-semibold">{data.data.name}</p>
      </div>
      <h1 className="mx-8 bg-gray-50">{data.data.text}</h1>
      {data.data.replies.length !== 0 && (
        <div className="mx-5 border-l-black border-l-2 ">
          <CommentsList comments={data.data.replies} />
        </div>
      )}
    </div>
  );
};

export default Comment;
