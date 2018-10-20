import React, { Component } from "react";
import Navbar from "./Navbar";

const iconPath = process.env.PUBLIC_URL + '/assets/';

function DisplayTemp({index, templNo, update}) {
  // console.log(index);
  return (
    <div className="outer">
      <div className="inner">
        <img src={`${iconPath}template_${index}.jpg`} alt="image_template" className={templNo === index ? "highlight" : ""} onClick={() => update(index)}/>
      </div>
    </div>);
}

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templNo: 1,
      dumbArray: [1, 2, 3, 4]
    }
    this.updateTemplate = this.updateTemplate.bind(this);
  }

  updateTemplate(index) {
    this.setState({
      templNo: index
    });
  }

  render() {
    const tempList = this.state.dumbArray.map(number => {
      return(
        <DisplayTemp
          index={number}
          templNo={this.state.templNo}
          update={this.updateTemplate}
        />
      );
    });
    return (
      <div className="outer--main" >
        <Navbar />
        <div className="content">
          Choose one of the following templates for the presentation
        </div>
        <div className="img-container">
          {
            tempList
          }
        </div>
        <style jsx>{`
          .img-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
          }
          img {
            width: 100%;
            cursor: pointer;
            border-radius: 25px;
          }
          .outer {
            padding: 1.5em;
          }
          .inner {
            max-width: 25em;
          }
          .content {
            font-size: 1.5em;
          }
          .highlight {
            border: 2px solid #7b10ff;
            
          }
        `}
        </style>
      </div>
    );
  }
}

export default Template;
