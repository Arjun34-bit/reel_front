import React, { useState } from "react";
import Save from "../../images/saveBtn/save.svg";
import UnSave from "../../images/saveBtn/unsave.svg";

const SaveBtn = () => {
  const [isSave, setIsSave] = useState(false);
  return (
    <>
      <div className="cursor-pointer flex justify-end mt-2 mb-2">
        {isSave ? (
          <div className="" onClick={() => setIsSave(!isSave)}>
            <img src={UnSave} alt="Share Icon" className="size-7" />
          </div>
        ) : (
          <div className="" onClick={() => setIsSave(!isSave)}>
            <img src={Save} alt="Share Icon" className="size-7" />
          </div>
        )}
      </div>
    </>
  );
};

export default SaveBtn;
