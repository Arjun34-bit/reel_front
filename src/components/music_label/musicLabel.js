import React from "react";
import musicIcon from "../../images/user-icon/music-icon.svg";

const MusicLabel = () => {
  return (
    <div className="label_container flex justify-between md:gap-10 gap-20">
      <div className="label_name">
        <marquee className="text-white">Vaathi Raid, Anirudh, Arivu</marquee>
      </div>
      <div className="music_icon">
        <img src={musicIcon} alt="music" className="size-6" />
      </div>
    </div>
  );
};

export default MusicLabel;
