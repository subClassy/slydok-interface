import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./App.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptedFiles: [],
      rejectedFiles: [],
      url: ""
    };
    this.urlChanged = this.urlChanged.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    this.setState({
      acceptedFiles,
      rejectedFiles
    });
  }

  urlChanged(event) {
    this.setState({
      url: event.target.value
    });
  }

  componentDidUpdate() {
    if (this.state.rejectedFiles.length > 0) {
      alert("Only choose a Doc file");
      this.setState({
        rejectedFiles: []
      });
    }
  }

  render() {
    return (
      <div className="outer--main">
        <div className="outer">
          <div className="navbar">Slydok</div>
          <div className="content">
            <div className="title">
              Convert your docs into stunning presentations
            </div>
            <div className="upload--file">
              <div className="sub-head">
                <span>Upload a File</span>
              </div>
              <span>
                <Dropzone
                  onDrop={this.onDrop.bind(this)}
                  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  disableClick
                  className="drop-zone"
                >
                  {({ open }) => (
                    <React.Fragment>
                      <p>
                        Drag a file here or{" "}
                        <button
                          className="browse--file"
                          type="button"
                          onClick={() => open()}
                        >
                          browse
                        </button>{" "}
                        for a file to upload
                      </p>
                    </React.Fragment>
                  )}
                </Dropzone>
              </span>
              <div className="choosen-file">
                {this.state.acceptedFiles.map(f => (
                  <span key={f.name}>
                    Choosen File - <span className="file--name">{f.name}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="alt-opt">
              <span>or</span>
            </div>
            <div className="sub-head">
              <span>Enter a Google Doc shareable link</span>
            </div>
            <div>
              <input
                value={this.state.url}
                type="text"
                onChange={this.urlChanged}
                className="url-input"
              />
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .navbar {
              font-size: 3.5em;
              padding: 25px;
              padding-bottom: 10px;
              font-family: "Righteous", cursive;
            }
            .content {
              display: flex;
              flex-direction: column;
            }
            .title {
              margin-bottom: 30px;
            }
            .title,
            .alt-opt {
              font-size: 25px;
              color: #b9b9b9;
            }
            .drop-zone {
              padding: 40px;
              min-height: 13vh;
              width: 90vh;
              margin: 0 auto;
              margin-top: 20px;
              border: 1px dashed #ffffff;
              border-radius: 15px;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              opacity: 0.8;
            }
            .browse--file {
              background: none;
              border: none;
              box-shadow: none;
              color: #7b10ff;
              font-family: Montserrat, "sans-serif";
              font-size: 16px;
              margin: 0;
              padding: 0;
              text-decoration: underline;
            }
            .browse--file:focus {
              outline: none;
            }
            .choosen-file {
              margin-top: 25px;
              font-size: 20px;
            }
            .file--name {
              color: #8872fc;
            }
            .sub-head {
              font-size: 25px;
              margin-top: 25px;
            }
            .alt-opt {
              margin-top: 25px;
            }
            .url-input {
              background: none;
              color: white;
              border: none;
              border: 1px solid;
              border-radius: 8px;
              font-family: Montserrat, sans-serif;
              font-size: 20px;
              margin: 20px;
              padding: 10px 20px;
              width: 95vh;
              opacity: 0.8;
              transition: all 0.2s ease-in;
            }
            .url-input:focus {
              outline: none;
              border: 1px solid #7b10ff;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Landing;
