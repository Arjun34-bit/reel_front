import "./userName.css";
import React, { useState } from "react";

import addUser from "../../images/user-icon/addUser.svg";
import removeUser from "../../images/user-icon/removeUser.svg";
import MusicLabel from "../../components/music_label/musicLabel";

const UserName = () => {
  const [isFollow, setIsFollow] = useState(false);
  return (
    <>
      <div className="user_name_container">
        <div className="name_tag">
          <span>user_name</span>
          {isFollow ? (
            <div
              onClick={() => setIsFollow(!isFollow)}
              alt="Share Icon"
              className="size-7"
            >
              <img src={addUser} alt="Follow Icon" className="size-6" />
            </div>
          ) : (
            <div onClick={() => setIsFollow(!isFollow)}>
              <img src={removeUser} alt="Unfollow Icon" className="size-6" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserName;
