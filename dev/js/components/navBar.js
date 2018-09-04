import React from "react";

const navBar = () => (
  <div>
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top transparentNav"
      role="navigation"
    >
      <div className="container-fluid">
        <img
          src="https://vignette.wikia.nocookie.net/riverdalearchie/images/8/82/IMDb_icon.png/revision/latest?cb=20170607175233"
          style={{ width: "50px" }}
        />
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#exCollapsingNavbar"
          style={{ backgroundColor: "black" }}
        >
          &#9776;
        </button>
        <div className="collapse navbar-collapse" id="exCollapsingNavbar">
          <ul
            className="nav navbar-nav Navtabs"
            style={{ marginLeft: "350px", color: "black" }}
          >
            <li className="nav-item">
              <a href="#" className="nav-link">
                MOVIES
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                CELEBS & PHOTOS
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                COMMUNITY
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                NEWS
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
            <li>
              <a className="settingsicon" href="#">
                <span
                  className="fa fa-cog"
                  style={{ fontSize: "21px", padding: "10px" }}
                />
              </a>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Avatar"
                style={{ borderRadius: "50%", width: "50px", height: "40px" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default navBar;
