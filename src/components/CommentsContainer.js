import React from "react";
import CommentsList from "./CommentsList";

const CommentsContainer = (comments) => {
  return (
    <div className="w-auto">
      <h1 className="text-md font-semibold">
        {comments?.comments?.length} Comments
      </h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
