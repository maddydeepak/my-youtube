import React from "react";
import user from "../assets/img/user.png";
import CommentsList from "./CommentsList";
import { calculateDate } from "../utils/calculateDate";
import like from "../assets/img/like.png";
import dislike from "../assets/img/dislike.png";

const Comment = ({ data }) => {
  return (
    <div className="text-sm mt-2">
      <div className="flex">
        <div className="w-8">
          <img
            src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}
            className="rounded-full"
            alt="user"
          />
        </div>
        <div className="mx-4">
          <span className="font-bold">
            {data.snippet.topLevelComment.snippet.authorDisplayName}
          </span>
          <span className="text-gray-700 text-xs">
            {" " +
              calculateDate(data.snippet.topLevelComment.snippet.publishedAt)}
          </span>
          <div className="text-gray-700">
            {data.snippet.topLevelComment.snippet.textDisplay}
          </div>
          <div className="flex mt-2">
            <img className="w-4 mx-2 hover:shadow-2xl" src={like} />
            {data.snippet.topLevelComment.snippet.likeCount}
            <img className="w-4 mt-1 mx-2 hover:shadow-2xl" src={dislike} />
          </div>
        </div>
      </div>

      {/* {data.data.replies.length !== 0 && (
        <div className="mx-5 border-l-black border-l-2 ">
          <CommentsList comments={data.data.replies} />
        </div>
      )} */}
    </div>
  );
};

export default Comment;
