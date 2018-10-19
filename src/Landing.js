import React, { Component } from 'react';
import './App.css';

class Landing extends Component {

  constructor(props) {
    super(props)
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(event) {
    let file = event.target.files[0];
    console.log(file);

    if (file) {
      let data = new FormData();
      data.append('file', file);
      console.log(data);
      // axios.post('/files', data)...
    }
  }

  render() {
    return (
      <div className="outer--main">
        <div className="outer">
          <div className="navbar">
            Slydok
          </div>
          <div className="content">
            <div className="title">
              Convert your docs into stunning presentations
            </div>
            <span>
              <input type="file"
                name="myFile"
                onChange={this.uploadFile} />
            </span>
          </div>
        </div>
        <style jsx>{`
          .navbar {
            font-size: 3.5em;
            padding: 25px;
            font-family: 'Righteous', cursive;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Landing;
