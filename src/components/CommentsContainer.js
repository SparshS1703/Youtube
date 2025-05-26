import React from "react";
import Comment from "./Comment";
const commentsData = [
  {
    name: "sparsh",
    text: "amazing video ver nice oka bye",
    replies: [
      {
        name: "sparsh",
        text: "amazing video ver nice oka bye",
        replies: [
          {
            name: "sparsh",
            text: "amazing video ver nice oka bye",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "sparsh",
    text: "amazing video ver nice oka bye",
    replies: [
      {
        name: "sparsh",
        text: "amazing video ver nice oka bye",
        replies: [
          {
            name: "sparsh",
            text: "amazing video ver nice oka bye",
            replies: [
              {
                name: "sparsh",
                text: "amazing video ver nice oka bye",
                replies: [
                  {
                    name: "sparsh",
                    text: "amazing video ver nice oka bye",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "sparsh",
    text: "amazing video ver nice oka bye",
    replies: [
      {
        name: "sparsh",
        text: "amazing video ver nice oka bye",
        replies: [],
      },
    ],
  },
  {
    name: "sparsh",
    text: "amazing video ver nice oka bye",
    replies: [
      {
        name: "sparsh",
        text: "amazing video ver nice oka bye",
        replies: [
          {
            name: "sparsh",
            text: "amazing video ver nice oka bye",
            replies: [],
          },
        ],
      },
    ],
  },
];
const CommentList = ({ comments }) => {
  return comments.map((c, index) => (
    <div>
      <Comment key={index} data={c} />
      <div className="ml-5 p-2 border border-l-black">
        <CommentList comments={c.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="px-5">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
