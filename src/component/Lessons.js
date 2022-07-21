import React from "react";
import "./Lessons.css";
const Lessons = () => {
  return (
    <div className="menu">
      <h1>MY LESSONS</h1>
      <hr />
      <h2>PAIN 101</h2>
      <div className="l-items">
        <div className="text">
          <h3>Setting Achievable Goals</h3>
          <span>6 minutes</span>
        </div>
      </div>
      <br />

      <hr />
      <h2>STRETCHING</h2>
      <div className="l-items">
        <div className="text">
          <h3>Upper body stretching</h3>
          <span>4 minutes</span>
        </div>
      </div>
      <br />

      <div className="l-items">
        <div className="text">
          <h3>Lower body stretching</h3>
          <span>4 minutes</span>
        </div>
      </div>
      <br />
      <hr />

      <h2 className="sleep">SLEEP</h2>
      <div className="l-items">
        <div className="text">
          <h3>Pain and sleep</h3>
          <span>6 minutes</span>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
