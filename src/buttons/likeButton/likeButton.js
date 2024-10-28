import React, { useState } from "react";
import Like from "../../images/like";
import Dislike from "../../images/dislike";

const LikeButton = () => {
  const [isLike, setIsLike] = useState(true);

  return (
    <>
      <div className="cursor-pointer flex justify-end mt-2 mb-2">
        {isLike ? (
          <div className="" onClick={() => setIsLike(!isLike)}>
            <Like className="bg-red-700" />
            {/* <span className="text-center">0 Likes</span> */}
          </div>
        ) : (
          <div className="" onClick={() => setIsLike(!isLike)}>
            <Dislike />
          </div>
        )}
      </div>
    </>
  );
};

export default LikeButton;
