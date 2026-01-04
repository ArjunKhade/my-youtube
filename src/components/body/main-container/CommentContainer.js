import React from "react";
import { COMMENTS } from "../../../utils/commentsData";
import { USER_AVATAR } from "../../../constant/constant";

const CommentContainer = () => {
  const Comment = ({ commentData }) => {
    const { name, comment} = commentData;
    return (
      <div className="flex items-center mt-2 p-2 bg-gray-100 shadow-sm">
        <img className="w-[36px] h-[36px]" src={USER_AVATAR} alt="icon" />
        <div className="ml-4">
          <p>{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return (
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <Comment commentData={comment} />
            <div className="ml-8">
              <CommentList key={index} comments={comment.replies}></CommentList>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={COMMENTS} />
    </div>
  );
};

export default CommentContainer;
