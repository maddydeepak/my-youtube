import React from "react";
import CommentsList from "./CommentsList";

const CommentsContainer = ({ comments }) => {
  const commentsData = [
    {
      name: "User 1",
      text: "Comment Goes Here!",
      replies: [
        {
          name: "User 2",
          text: "Comment Goes Here!",
          replies: [
            {
              name: "User 3",
              text: "Comment Goes Here!",
              replies: [],
            },
            {
              name: "User 4",
              text: "Comment Goes Here!",
              replies: [
                {
                  name: "User 5",
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
      name: "User 6",
      text: "Comment Goes Here!",
      replies: [
        {
          name: "User 7",
          text: "Comment Goes Here!",
          replies: [],
        },
        {
          name: "User 8",
          text: "Comment Goes Here!",
          replies: [],
        },
      ],
    },
    {
      name: "User 9",
      text: "Comment Goes Here!",
      replies: [
        {
          name: "User 10",
          text: "Comment Goes Here!",
          replies: [],
        },
        {
          name: "User 11",
          text: "Comment Goes Here!",
          replies: [],
        },
        {
          name: "User 12",
          text: "Comment Goes Here!",
          replies: [],
        },
      ],
    },
  ];
  return (
    <div className="m-6">
      <h1 className="text-xl font-semibold">Comments</h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
