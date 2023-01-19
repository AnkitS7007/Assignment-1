import React from "react";

const Welcome = ({ name }) => {
  return (
    <div className="welcome">
      <h1>Hey! {name}</h1>
      <h2>Welcome to College</h2>
    </div>
  );
};

export default Welcome;
