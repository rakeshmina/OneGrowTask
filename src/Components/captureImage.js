import React from 'react'
// import '../App.css'

import ReactDOM  from 'react-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

function CaptureImage(props) {
    const history = useHistory();

    var cameraStream = null;
    navigator.getMedia = navigator.getUserMedia; //|| navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
    navigator.getMedia({
        video: true,
        audio: false
    }, function (stream) {
        let video = document.getElementById('videoElement');
        if (video) {
            // const vendorUrl = window.URL || window.webkitURL;
            cameraStream = stream;
            video.srcObject = stream;
            video.play();
        }
    }, function (err) {
        console.log(err);
    })

    function takescreenshot() {
        const canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.drawImage(document.getElementById('videoElement'), 0, 0, canvas.width, canvas.height);
        console.log("canvas = ", context);
        var img = new Image();
        img.src = canvas.toDataURL('image/png');
        img.width = canvas.width;
        img.height = canvas.height;
        console.log("this the img object:", img);
        props.changeImage(img)
        history.push("showImage");
        var track = cameraStream.getTracks()[0];
        track.stop();
    }

    function goToImageUploadPage() {
        history.push("/");
        return;
    }

    return (
        <section className="text-center" >

            <h1 className="mb-4">Camera page</h1>

            <div className="row">
                <div className="col-sm-3"></div>
                <div className=" col-sm-6 text-center" style={{ overflowX: "hidden" }}>
                    <video width="90%" height="380px" id="videoElement" ></video>
                    <button onClick={takescreenshot} className="btn btn-primary btn-lg btn-block" id="capture">Take Photo</button>
                    <canvas id="canvas" width="380px" height="380px" style={{ display: "none" }}></canvas>
                </div>
                <div className="col-sm-3"></div>
            </div>

            <br></br>
            
            <div className="text-center">Want to test by uploading image from device? Then click <a href="" onClick={goToImageUploadPage}>here</a></div>
        </section>
    );
}



const mapDispatchToProps = (dispatch) => {
    return {
        changeImage: (imageData) => { dispatch({ type: "CHANGE_IMAGE", payload: imageData }) }
    }
}


export default connect(null, mapDispatchToProps)(CaptureImage)