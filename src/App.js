import React, { useState } from "react";
import { explorer } from "./Data/myData";
import Folder from "./components/Folder";
import NewFolder from "./components/NewFolder";

const App = () => {
  const [data, setData] = useState(explorer);

  return (
    <>
      {/* <Folder dataFile={data} /> */}
      <NewFolder data={data} />
    </>
  );
};

export default App;
