import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import SentimentVeryDissatisfiedTwoTone from "@material-ui/icons/SentimentVeryDissatisfiedTwoTone";

class Bag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bag: [],
        }
    }


    render() {
        const bag = this.state.bag;
        console.log(bag.length);

        if (bag.length === 0 ) {
            return (
                // <Grid container xs={12}>
                <div>
                <h5>Bag</h5>
                <SentimentVeryDissatisfiedTwoTone />
                <h6>Its empty here</h6>
                <Typography>Start shopping to add items to your cart</Typography>
                </div>
                // </Grid>
            )
        } else {
            return (
                <p>there is something</p>
            )
        }
    }
}

export default Bag
