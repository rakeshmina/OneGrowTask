import React from 'react'
import ReactDOM  from 'react-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {connect} from  'react-redux'

import { useHistory } from "react-router-dom";


const ShowImage = function(props){
    console.log("this is props in showImage component",props);
    const history = useHistory();

    function  goToCamera() {
        history.push("captureImage");
        return;
    }
    return (
        <div className="text-center" style={{overflowX:"hidden"}}>
            <h1>Image Preview Page</h1>
            <br></br>
            <br></br>
            {props.srclink=="" ? 
            <h4>Please first capture image <a href="" onClick={goToCamera}>here</a>. Then you will be able to see the image preview.</h4> : 
            <div><h4>ImageLink: { props.srclink  }</h4>
            <h4>ImageHeight: {props.srcheight}</h4>
            <h4>ImageWidth: {props.srcwidth}</h4></div>}
            <br></br>
            <br></br>
            <img  src={props.srclink} style={{borderRadius:"50%"}}/>
        </div>
    )
}

const mapStateToProps = (state) =>{
    if(state.selectedFile==null){
        return {
            srclink:"",
            srcwidth:0,
            srcheight:0
        }
    }
    return {
        srclink:state.selectedFile.src,
        srcwidth:state.selectedFile.width,
        srcheight:state.selectedFile.height
    }
}


export default connect(mapStateToProps)(ShowImage)