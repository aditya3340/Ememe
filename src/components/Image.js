import React from "react";
import axios from "axios";

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      flage: false,
    };
    this.fileSelectorHandler = this.fileSelectorHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  fileSelectorHandler(event) {
    this.setState({
      selectedFile: event.target.files[0],
      flage: true,
    });
  }

  fileUploadHandler() {
    //this will use to upload file on a server

    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios.post("url", fd).then((res) => console.log(res));
  }

  componentDidUpdate() {
    console.log(this.state.selectedFile.name);
  }

  render() {
    return (
      <div>
        <label for="file-upload" class="custom-file-upload">
          Your Image here
        </label>
        <input
          type="file"
          id="file-upload"
          
          onChange={this.fileSelectorHandler}
        />
        <div className="hero-btn">
        <button onClick={this.fileUploadHandler}>UPLOAD</button>
      </div>
        
        {this.state.flage && <img src="" alt="image" />}
      </div>
    );
  }
}

export default Image;
