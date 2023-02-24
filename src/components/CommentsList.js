import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div className="p-2">
      {comments.comments.map((comment) => (
        <Comment data={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentsList;
