import React, { Component } from "react";
import Landing from "./Landing";
import Template from "./Template";
import Download from "./Download";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: "landing",
      acceptedFiles: [],
      url: "",
      templNo: 1
    };
    this.setFiles = this.setFiles.bind(this);
    this.setTemplate = this.setTemplate.bind(this);
  }

  setFiles(acceptedFiles, url) {
    this.setState({
      acceptedFiles,
      url,
      showPage: "template"
    });
  }

  setTemplate(index) {
    this.setState({
      templNo: index,
      showPage: "download"
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.state.showPage !== "landing" ? (
            this.state.showPage !== "template" ? (
              <Landing setFiles={this.setFiles} />
            ) : (
              <Template setTemplate={this.setTemplate} />
            )
          ) : (
            <Download />
          )}
        </div>
      </div>
    );
  }
}

export default App;
