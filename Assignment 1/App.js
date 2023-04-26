import React from 'react';
import  ReactDOM  from 'react-dom/client';
const App = () => {
  return "hello";
};

const heading = React.createElement("h1", {className:"kshitij"}, "hello from Kshitij");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
