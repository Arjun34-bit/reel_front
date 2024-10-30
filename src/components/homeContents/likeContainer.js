import React, { useEffect, useRef, useState } from "react";

import sample_reel from "../../images/reelSrc/sample_reel.mp4";
import sample_reel_2 from "../../images/reelSrc/sample_reel_2.mp4";
import sample_reel_3 from "../../images/reelSrc/story.mp4";
import sample_reel_4 from "../../images/reelSrc/walking.mp4";

import LikeBox from "../../miscellenous/likeBox";

const LikeMainContainer = () => {
  const reelSrcs = [
    { id: 1, reelName: sample_reel },
    { id: 2, reelName: sample_reel_2 },
    { id: 3, reelName: sample_reel_3 },
    { id: 4, reelName: sample_reel_4 },
  ];

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0); // Tracks the currently active LikeBox
  const refsArray = useRef([]); // Array to store refs for each LikeBox component

  // Detect scroll direction and navigate to the next/previous reel accordingly

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    // Debounce logic to reduce the number of calls
    if (Math.abs(currentScrollTop - lastScrollTop) < 5) return; // Ignore small movements

    if (currentScrollTop > lastScrollTop) {
      scrollToNextLikeBox();
    } else if (currentScrollTop < lastScrollTop) {
      scrollToPrevLikeBox();
    }

    // Update the last scroll position
    lastScrollTop = currentScrollTop;
  };

  // Scroll to the next LikeBox
  const scrollToNextLikeBox = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = Math.min(prevIndex + 1, refsArray.current.length - 1);
      scrollToLikeBox(nextIndex);
      return nextIndex;
    });
  };

  // Scroll to the previous LikeBox
  const scrollToPrevLikeBox = () => {
    setActiveIndex((prevIndex) => {
      const prevIndexUpdated = Math.max(prevIndex - 1, 0);
      scrollToLikeBox(prevIndexUpdated);
      return prevIndexUpdated;
    });
  };

  // Scroll to a specific LikeBox based on its index
  const scrollToLikeBox = (index) => {
    if (refsArray.current[index]) {
      refsArray.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    playCurrentVideo(index);
  };

  // Function to play the current active video and pause others
  const playCurrentVideo = (index) => {
    refsArray.current.forEach((ref, idx) => {
      const videoElement = ref.querySelector("video"); // Assuming LikeBox contains a <video> tag
      console.log(videoElement);
      if (videoElement) {
        if (idx === index) {
          videoElement.play();
        } else {
          videoElement.pause();
          videoElement.currentTime = 0; // Reset video when paused
        }
      }
    });
  };

  // Handle scroll and key events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKey);
    };
  }, [lastScrollTop]);

  // Handle keypress events (up/down arrow keys)
  const handleKey = (event) => {
    if (event.key === "ArrowDown") {
      scrollToNextLikeBox();
    } else if (event.key === "ArrowUp") {
      scrollToPrevLikeBox();
    }
  };

  return (
    <div className="block grid place-items-center gap-10 md:mt-8 mt-4 scrollable-video-box overflow-hidden h-[75vh]">
      {reelSrcs.map((r, index) => (
        <div
          key={r?.id}
          ref={(el) => (refsArray.current[index] = el)} // Store ref for each LikeBox component
        >
          <LikeBox reel={r.reelName} />
        </div>
      ))}
    </div>
  );
};

export default LikeMainContainer;
