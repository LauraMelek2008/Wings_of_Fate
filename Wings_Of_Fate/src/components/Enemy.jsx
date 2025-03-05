import React from "react";

const Enemy = ({ x, y }) => {
  return <div className="enemy" style={{ left: x, top: y }} />;
};

export default Enemy;