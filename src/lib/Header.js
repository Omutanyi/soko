// component Imports
import React, { Component } from "react";
// import Login from "./Login.js";
import Home from "./Home.js";
// import Signup from "./Signup";
// import Product from "./Product";
// import Cart from "./Cart";
// import AddBouquet from "./AddBouquet"
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import image from "/home/javier/final_Project/soko/soko/src/assets/index.jpeg"
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LockOpen from "@material-ui/icons/LockOpen";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Homeicon from "@material-ui/icons/Home";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Create from "@material-ui/icons/Create";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalFlorist from "@material-ui/icons/LocalFlorist";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        name: "COMPANY NAME",
        address: "Charm towers, Nkuruma Road",
        image: "/home/javier/final_Project/soko/soko/src/assets/index.jpeg",
      },
    };
  }
  render() {
    return (
      <Router>
        <div className="headerTop">
        <div className="headerTopContainer">
          <Typography
            className="txtHeader"
            variant="button"
          >
            STORE MADE WITH SOKO
          </Typography>
          </div>
        </div>

        <div className="headerBottom">
          <Paper
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div className="container">
              <img
                src={image}
                alt={this.state.company.name}
                className="companyImage"
              />
              <div className="companyDesc">
                <p>{this.state.company.name}</p>
                <p>{this.state.company.address}</p>
              </div>
              <Button className="headerBtn">
                <AccountCircle
                  style={{
                    marginRight: 5,
                  }}
                />
                {/* <Link to="/login" className="headerLink"> */}
                  Account
                {/* </Link> */}
              </Button>
              <Button className="headerBtn">
                <ShoppingBasket
                  style={{
                    marginRight: 5,
                  }}
                />
                {/* <Link to="/login" className="headerLink"> */}
                  Bag
                {/* </Link> */}
              </Button>
            </div>
          </Paper>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Header;
