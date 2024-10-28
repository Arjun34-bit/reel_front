import React, { useState } from "react";
import commentIcon from "../../images/comment/commentIcon.svg";
import CommentSection from "../../components/commentSection/commentSection";

const CommentButton = () => {
  const [isComment, setIsComment] = useState(false);
  const [isSlide, setIsSlide] = useState(false);

  const handleComment = () => {
    setIsComment(true);
  };

  const handleSlide = () => {
    setIsSlide(!isSlide);
  };

  return (
    <>
      <div
        className="cursor-pointer flex justify-end mt-2 mb-2"
        onClick={handleComment}
      >
        <img src={commentIcon} alt="Comment Icon" className="size-7" />
      </div>

      {isComment ? (
        <div
          className="flex justify-center items-center relative"
          onClick={() => {
            setIsComment(!isComment);
          }}
        >
          <div
            className="absolute bg-white h-80 w-80 mt-5 mr-64 rounded-tr-3xl comment-container"
            onClick={handleSlide}
          >
            <CommentSection
              setIsComment={setIsComment}
              setIsSlide={setIsSlide}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CommentButton;
