import React from "react";
import UserList from "../containers/user-list";
import UserDetails from "../containers/user-detail";
/* require("../../scss/style.scss"); */
import NavBar from "../components/navBar";
import Slider from "./Slider";
import Fliter from "./Filter";

const App = () => (
  <div>
    <NavBar />
    <Slider />

    <div className="container">
      <Fliter />
      <div>
        <div className="">
          <UserList />
          <hr />

          <UserDetails />
        </div>
      </div>
    </div>
  </div>
);

export default App;
