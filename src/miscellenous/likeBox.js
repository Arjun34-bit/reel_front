import "./likeBox.css";

import React, { useRef, useState } from "react";
import CommentButton from "../buttons/commentButton/commentButton";
import LikeButton from "../buttons/likeButton/likeButton";
import ShareBtn from "../buttons/shareButton/shareBtn";
import SaveBtn from "../buttons/saveBtn/saveBtn";

import reel1 from "../images/reelSrc/sample_reel.mp4";
import UserName from "../buttons/userName/userName";
import MusicLabel from "../components/music_label/musicLabel";

const LikeBox = ({ reel }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <>
      <div className="rounded-tl-xl rounded-br-xl p-5 border border-solid border-black video-box">
        <div onClick={handlePlay}>
          <video ref={videoRef} className="reel-container" autoPlay loop>
            <source src={reel} type="video/mp4" />
          </video>
        </div>
        <div className="block icon-container">
          {/* Like Button Behaviuor */}
          <LikeButton />
          {/* Comment Button Behaviuor */}
          <CommentButton />
          {/* Share Button Behaviuor */}
          <ShareBtn />
          {/* Save button Behaviuor */}
          <SaveBtn />
        </div>

        <UserName />
        <div className="absolute mt-16">
          <MusicLabel />
        </div>
      </div>
    </>
  );
};

export default LikeBox;
