import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [content, setContent] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        // console.log(response.data);
        setContent(response.data[0].name); //because of reactStrict_Mode in index.js it show the console one more time extra
        console.log("APi Called");
      });
  }, [count]);

  return (
    <div>
      <h1>{content}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default UseEffect;
