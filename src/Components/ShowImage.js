import React from 'react'
import ReactDOM  from 'react-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {connect} from  'react-redux'

const ShowImage = function(props){
    console.log(props);
    return (
        <div className="text-center">
            <h1>Link: {props.srclink}</h1>
            <img  src={props.srclink} />
            {/* <button onClick={()=>{props.changeName("https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300")}}>change the name</button> */}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        srclink:state.selectedFile
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         changeName : (url) => {dispatch({type:"CHANGE_IMAGE", payload:url})}
//     }
// }

export default connect(mapStateToProps)(ShowImage)