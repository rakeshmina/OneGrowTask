import React from 'react'
import ReactDOM from 'react-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
/* 

function selectImageHandler(event) {
  console.log(event.target.files[0]);
  console.log("file url", URL.createObjectURL(event.target.files[0]));
  return;
}
 */


const ImageUpload = (props) => {
  const history = useHistory();
  function submitImage(){
    history.push("showImage");
    return;
  }

  function sendImageData(event){
    var img = new Image();
    img.src = URL.createObjectURL(event.target.files[0]);
    img.width = 380;
    img.height = 380;
    // console.log("upload function",event);
    // console.log(img);
    props.changeImage(img);
  }

  function goToCameraPage() {
    history.push("captureImage");
    return;
  }
  return (
    <section className="section-input" style={{overflowX:"hidden"}}>
      <span className="text-center text-muted"><p>Please choose a file and upload it.</p></span>

      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <form onSubmit={submitImage}>
            <div className="custom-file mb-3">
              <input type="file" className="custom-file-input" id="customFileLang" onChange={sendImageData} required />
              <label className="custom-file-label" for="customFileLang">Choose File</label>
            </div>
            <div className="form-group" style={{ width: "100%" }}>
              <input className="btn btn-primary btn-lg btn-block" type="submit" value="submit" />
            </div>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
      <div className="text-center">Want to test by capturing image with camera? then click <a href="" onClick={goToCameraPage}>here</a></div>
    </section>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    changeImage: (img) => { dispatch({ type: "CHANGE_IMAGE", payload: img }) }
  }
}

// D8NXD-KF4BG-FX3WG-9YW4J-RX8WB
export default connect(null, mapDispatchToProps)(ImageUpload)