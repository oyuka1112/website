import React, { useState, Fragment } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Home from "../pages/Home";
import News from "../pages/News";
import User from "../pages/User";
import Signup from "../pages/Signup";
import '../pages/Box.css';

function Header() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Fragment className="goy">
      <AppBar position="static" className = "color">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="News" />
          <Tab label="Login" />

        </Tabs>
      </AppBar>
      {selectedTab === 0 && <Home />}
      {selectedTab === 1 && <News />}   
      {selectedTab === 2 && <Signup />}
    </Fragment>
  );
}

export default Header;
