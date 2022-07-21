import React, { useState } from "react";
const SideMenu = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div>
          <a className="logo" href="/">
            LOGO
          </a>
        </div>
        <div
          onClick={() => {
            setInactive(!inactive);
          }}
          className="toggle-menu-btn"
        >
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="main-menu">
        <ul>
          <li>
            <div className="menu-items">
              <div className="menu-icon">
                <i class="bi bi-flower2"></i>
              </div>
              {/* <span>My Lessons</span> */}
              <a href="/Lessons">My Lessons</a>
            </div>
          </li>
          <br />

          <li>
            <div className="menu-items">
              <div className="menu-icon">
                <i class="bi bi-flag-fill"></i>
              </div>
              <a href="/Goals">My Goals</a>
            </div>
          </li>
          <br />

          <li>
            <div className="menu-items">
              <div className="menu-icon">
                <i class="bi bi-people-fill"></i>
              </div>
              <a href="/Groups">My Groups</a>
            </div>
          </li>
          <br />

          <li>
            <div className="menu-items">
              <div className="menu-icon">
                <i class="bi bi-graph-up-arrow"></i>
              </div>
              <span>My Trendings</span>
            </div>
          </li>
          <br />
          <hr />
          <br />
          <li>
            <div className="menu-items">
              <div className="menu-icon">
                <i class="bi bi-bell-fill"></i>
              </div>
              <span>notifications</span>
            </div>
          </li>
          <br />

          <li>
            <div className="menu-items">
              <div className="menu-icon">
                <i class="bi bi-calendar-week-fill"></i>
              </div>
              <span>calendar</span>
            </div>
          </li>
          <br />

          <li>
            <div className="menu-items">
              <div className="menu-icon">
                <i class="bi bi-telephone-fill"></i>
              </div>
              <span>resources</span>
            </div>
          </li>
          <br />

          <li>
            <div className="menu-items">
              <div className="menu-icon">
                <i class="bi bi-gear-fill"></i>
              </div>
              <span>settings</span>
            </div>
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
