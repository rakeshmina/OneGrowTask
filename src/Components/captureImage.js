import React from 'react'
import '../App.css'

import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";

function reloadtonewpage() {
    
}

function CaptureImage(props){
    const history = useHistory();

    navigator.getMedia = navigator.getUserMedia ; //|| navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
	navigator.getMedia({
        video:true,
        audio:false
    }, function(stream){
        let video = document.getElementById('videoElement');
        if (video) {
            // const vendorUrl = window.URL || window.webkitURL;
            video.srcObject = stream;
            video.play();
        }
    }, function(err){
        console.log(err);
    })

    function takescreenshot(){
        const canvas = document.getElementById('canvas');
        var context  =  canvas.getContext('2d');
        // var photo = document.getElementById('photo');
        context.drawImage(document.getElementById('videoElement'), 0 , 0 , 380, 300);
        console.log( "canvas = " ,context );
        // photo.setAttribute('src', canvas.toDataURL('image/png'));
        props.changeImage(canvas.toDataURL('image/png'))
        history.push("showImage");
    }
    
    return (
		<div className="row">
			<div className="app__container">
				<video width="380px" height="300px" id="videoElement" ></video>
                <a href="#" onClick ={takescreenshot} className="captureImage" id="capture">Take Photo</a>
                <canvas id="canvas" width="380px" height="300px" style={{display:"none"}}></canvas>
			</div>
		</div>
	);
}



const mapDispatchToProps = (dispatch) => {
    return {
      changeImage: (url) => { dispatch({ type: "CHANGE_IMAGE", payload: url }) }
    }
  }
  

export default connect(null, mapDispatchToProps)(CaptureImage)