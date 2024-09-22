import React, { useState } from "react";

const Folder = ({ dataFile }) => {
  const [isShowNest, setIsShowNest] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setIsShowNest(!isShowNest);
  };

  return (
    <>
      <div>
        {dataFile?.isFolder && (<>
          <div onClick={handleClick}>
            {" "}
            📂 {dataFile.name}
            <div>
              <span onClick={() => setShowInput(!showInput)}>+Folder </span>
              <span>+File</span>
            </div>
          </div>
          <input type="text" placeholder="EnterName" />
          </> )}
        {!dataFile?.isFolder && <p> 🗄 {dataFile.name} </p>}
        {dataFile?.isFolder && dataFile?.items.length > 0 && (
          <div>
            {dataFile.items.map((e) => isShowNest && <Folder dataFile={e} />)}
          </div>
        )}
      </div>
    </>
  );
};
export default Folder;
