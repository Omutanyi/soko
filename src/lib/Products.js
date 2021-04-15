import React, { Component } from 'react'
import {productData} from './productData'
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";


class Products extends Component {
    render() {
        return (
            <Grid container xs={12}>
            <h5>ELECTRONICS</h5>

            {productData.map((prod, index) => {
                return (
                    <div className="prodContainer">
                    <img 
                    src={prod.image}
                alt={prod.name}
                className="prodImage"
                    />
                    <div className="prodDesc">
                    <Typography variant="subtitle1">{prod.name}</Typography>
                    <Typography variant="subtitle2">UGX. {prod.price}</Typography>
                    </div>
                    <Button className="addBtn" color="primary"
                variant="outlined"
                aria-label="ADD TO CART">
                <AddShoppingCart
                  style={{
                    marginRight: 5,
                  }}
                />
                {/* <Link to="/login" className="headerLink"> */}
                  Add
                {/* </Link> */}
              </Button>
                    </div>
                )
            })}
                
            </Grid>
        )
    }
}

export default Products
