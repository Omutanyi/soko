import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: ["Electronics", "Face Masks", "Groceries", "Home", "Kids"],
    };
  }

  _handleClick(menuItem) {
    this.setState({ active: menuItem });
  }
  render() {
    const activeStyle = { backgroundColor: "#e2e0f3" };
    return (
      <div className="menu">
        {this.state.menuItems.map((menuItem) => (
          <div
            className="menuitem"
            style={this.state.active === menuItem ? activeStyle : {}}
          >
            <Link
              onClick={this._handleClick.bind(this, menuItem)}
              className="link"
            >
              {menuItem}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
