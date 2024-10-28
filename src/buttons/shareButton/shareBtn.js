import React from "react";
import ShareIcon from "../../images/share/share.svg";

const ShareBtn = () => {
  const handleShare = () => {};
  return (
    <>
      <div
        className="cursor-pointer flex justify-end mt-2 mb-2"
        onClick={handleShare}
      >
        <img src={ShareIcon} alt="Share Icon" className="size-7" />
      </div>
    </>
  );
};

export default ShareBtn;
