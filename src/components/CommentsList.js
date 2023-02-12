import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div className="p-2">
      {comments.map((comment) => (
        <Comment data={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
