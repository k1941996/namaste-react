import React, { useState } from "react";
import useFetchData from "../utils/useFetchData";

const Home = () => {
  const [name, setName] = useState("");

  const { data, loading } = useFetchData(name);

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div>title : {loading ? `Loading` : data?.title}</div>
      </div>
    </div>
  );
};

export default Home;
