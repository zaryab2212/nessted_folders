import React, { useState } from "react";

const NewFolder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [InputFeildOPen, setInputFeildOPen] = useState({
    open: false,
    isFolder: false,
  });

  const handleAdd = (e, id, inputVal, isFolder) => {
    if (e.keyCode === 13) {
      if (data.id === id) {
        data.items.push({
          name: inputVal,
          isFolder: InputFeildOPen.isFolder,
          id: Date.now(),
          items: [],
        });
        setIsOpen(true);
        setInputFeildOPen({ ...InputFeildOPen, open: false });
      }
    }
  };

  return (
    <>
      <div>
        <span onClick={() => setIsOpen((pre) => !pre)}>
          {data.isFolder ? (
            <>
              {" "}
              📁 {data.name}
              <button
                onClick={() =>
                  setInputFeildOPen({ open: true, isFolder: false })
                }
              >
                add file
              </button>
              <button
                onClick={() =>
                  setInputFeildOPen({ open: true, isFolder: true })
                }
              >
                add folder
              </button>
              <div>
                {" "}
                {InputFeildOPen.open && (
                  <input
                    type="text"
                    onChange={(e) => setInputVal(e.target.value)}
                    value={inputVal}
                    placeholder="write name"
                    onBlur={() => setInputFeildOPen(false)}
                    autoFocus
                    onKeyDown={(e) =>
                      handleAdd(e, data.id, inputVal, data.isFolder)
                    }
                  />
                )}
              </div>
            </>
          ) : (
            "🗄 " + data.name
          )}
        </span>
      </div>
      {data.items &&
        data.items.length > 0 &&
        data.items.map((item) => (
          <div style={{ marginLeft: ".6rem" }}>
            {isOpen && !InputFeildOPen.open && <NewFolder data={item} />}{" "}
          </div>
        ))}
    </>
  );
};

export default NewFolder;
