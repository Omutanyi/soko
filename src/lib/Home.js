import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Search from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import LocalShipping from "@material-ui/icons/LocalShipping";
import { Typography } from "@material-ui/core";
import Categories from "./Categories";
import Products from "./Products";
import Bag from "./Bag";

class Home extends Component {
  render() {
    return (
        <>
        <div className="searchDiv">
      <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField id="input-with-icon-grid" variant="standard" label="Search fro products..."  onChange={(e) => this.emailOn(e)} />
          </Grid>
          <Grid item>
            <Search color="primary" />
          </Grid>
        </Grid>
        </div>
        
      <div className="homeContainer">
          <div className="menu">
            <Categories />
          </div>
          <div className="Products">
            <Products />
          </div>
          <div className="Bag">
            <Bag />
          </div>
      </div>

      {/* <div className="topFooter"> */}
      <Grid container xs={12} spacing={3} justify="center" className="topFooter" style={{
                    padding: 40,
                  }}>
      <Grid item xs={3}>
      {/* <LocalShipping fontSize="large"/> */}
      <Typography variant="button" color="secondary">Fast Delivery</Typography>
      </Grid>

      <Grid item xs={3}>
      {/* <LocalShipping fontSize="large"/> */}
      <Typography variant="button" color="secondary">Buyer Protection</Typography>
      </Grid>

      <Grid item xs={3}>
      {/* <LocalShipping fontSize="large"/> */}
      <Typography variant="button" color="secondary">Customer Support</Typography>
      </Grid>
      </Grid>
      {/* </div> */}

      <Grid container justify="center" direction="column" className="footer">
      <div className="footerTxt">
      <Typography variant="button" >STORE DETAILS</Typography>
      </div>
      <div className="footerTxt">
      <Typography variant="button" >COMPANY NAME</Typography>
      </div>
      <div className="footerTxt">
      <Typography variant="button" >Charm towers, Nkuruma Road</Typography>
      </div>

      </Grid>
      </>
    );
  }
}

export default Home;
