import React from "react";
import "./Goals.css";

const Goals = () => {
  return (
    <div className="menu">
      <div className="l-items">
        <h1>MY GOALS</h1>
        <hr /><br/>
        <h2>GOAL 1:</h2>
        <div className="text1">
          <h3>Goal 1: Mobility</h3>
          <span>I want to be able to wipe my burn.</span>
          <h4>MOTIVATION</h4>
          <span>To be more independent and take care of myself</span>
        </div>
      </div>
      <br />
      <hr />
      <br />

      <div className="l-items">
        <h2>GOAL 2:</h2>
        <div className="text1">
          <h3>Goal 2: Relaxation</h3>
          <span>To improve my relationship with my family.</span>
          <h4>Next Checkup:</h4>
          <span>May 4, 2021</span>
        </div>
      </div>
    </div>
  );
};

export default Goals;
