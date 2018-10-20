import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">Slydok</div>
        <div className="title">
          Convert your docs into stunning presentations
        </div>
        <style jsx>
          {`
            .navbar {
              font-size: 3.5em;
              padding: 25px;
              padding-bottom: 10px;
              font-family: "Righteous", cursive;
            }
            .title {
              margin-bottom: 30px;
              font-size: 25px;
              color: #b9b9b9;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Navbar;
