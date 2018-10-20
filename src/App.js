import React, { Component } from "react";
import Landing from "./Landing";
import Template from "./Template";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: "landing",
      acceptedFiles: [],
      url: ""
    };
    this.setFiles = this.setFiles.bind(this);
  }

  setFiles(acceptedFiles, url) {
    this.setState({
      acceptedFiles,
      url,
      showPage: "template"
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.state.showPage === "landing" ? (
            <Landing setFiles={this.setFiles} />
          ) : (
            <Template />
          )}
        </div>
      </div>
    );
  }
}

export default App;
