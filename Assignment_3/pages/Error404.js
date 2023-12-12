import React from "react";
import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const err = useRouteError();
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <div>{err.status}</div>
      <div>:</div>
      <div>{err.statusText}</div>
    </div>
  );
};

export default Error404;
