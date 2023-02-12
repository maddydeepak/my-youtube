import React from "react";
import CommentsList from "./CommentsList";
import Comment from "./Comment";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Maddy",
      text: "Comment Goes Here!",
      replies: [
        {
          name: "Maddy",
          text: "Comment Goes Here!",
          replies: [
            {
              name: "Maddy",
              text: "Comment Goes Here!",
              replies: [],
            },
            {
              name: "Maddy",
              text: "Comment Goes Here!",
              replies: [
                {
                  name: "Maddy",
                  text: "Comment Goes Here!",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Maddy",
      text: "Comment Goes Here!",
      replies: [
        {
          name: "Maddy",
          text: "Comment Goes Here!",
          replies: [],
        },
        {
          name: "Maddy",
          text: "Comment Goes Here!",
          replies: [],
        },
      ],
    },
    {
      name: "Maddy",
      text: "Comment Goes Here!",
      replies: [
        {
          name: "Maddy",
          text: "Comment Goes Here!",
          replies: [],
        },
        {
          name: "Maddy",
          text: "Comment Goes Here!",
          replies: [],
        },
        {
          name: "Maddy",
          text: "Comment Goes Here!",
          replies: [],
        },
      ],
    },
  ];
  return (
    <div className="m-6">
      <h1 className="text-xl font-semibold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
