import React, { Component } from "react";
import Navbar from "./Navbar";

class Download extends Component {
  render() {
    return (
      <div className="outer--main">
        <Navbar />
        <div className="inner">
          <span>Your File is Ready</span>
          <button className="submit-btn">Download</button>
        </div>
        <style jsx>
          {`
            .inner {
              font-family: Montserrat, sans-serif;
              font-size: 20px;
              height: 25vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .submit-btn {
              box-shadow: inset 0 0 0 60px #7460d5;
              border: none;
              color: #fff;
              font-family: Montserrat, sans-serif;
              padding: 10px 20px;
              font-size: 20px;
              font-weight: 500;
              border-radius: 4px;
              margin-top: 30px;
              transition: all 0.3s ease-in-out;
            }
            .submit-btn:hover {
              background: transparent;
              box-shadow: inset 0 0 0 2px #7460d5;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Download;
