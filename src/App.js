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
    const data = {
      file: this.state.acceptedFiles[0],
      url: this.state.url,
      templNo: index
    };
    fetch("/", {
      method: "GET",
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.state.showPage !== "landing" ? (
            this.state.showPage !== "template" ? (
              <Download />
            ) : (
              <Template setTemplate={this.setTemplate} />
            )
          ) : (
            <Landing setFiles={this.setFiles} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
