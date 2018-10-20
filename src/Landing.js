import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Navbar from "./Navbar";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptedFiles: [],
      rejectedFiles: [],
      url: ""
    };
    this.urlChanged = this.urlChanged.bind(this);
    this.sendUpdate = this.sendUpdate.bind(this);
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

  sendUpdate() {
    if (this.state.acceptedFiles.length <= 0 && this.state.url == "") {
      alert("No file has been chosen");
    } else {
      this.props.setFiles(this.state.acceptedFiles, this.state.url);
    }
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
          <Navbar />
          <div className="content">
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
            <div>
              <button onClick={this.sendUpdate} className="submit-btn">
                Continue
              </button>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .content {
              display: flex;
              flex-direction: column;
            }
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

export default Landing;
