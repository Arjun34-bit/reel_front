import "./commentSection.css";

import React from "react";

import backIcon from "../../images/comment/backIcon.svg";

const CommentSection = ({ setIsComment }) => {
  const handleCloseComment = () => {
    setIsComment(false);
  };

  return (
    <>
      <div className="sticky flex gap-20 text-black ml-5 mt-1 comment-box">
        <img
          src={backIcon}
          alt="back-icon"
          className="size-6 cursor-pointer"
          onClick={handleCloseComment}
        />
        <span>Comments</span>
      </div>
      <div className="flex justify-center items-center text-black h-full shadow-2xl">
        <span>No Comments</span>
      </div>
    </>
  );
};

export default CommentSection;
