import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
