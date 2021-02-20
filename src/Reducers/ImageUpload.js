// define the initial state 
const iState = {
    selectedFile: null
}

const reducer = (state=iState, action) =>{
    console.log(action)
    if(action.type === "CHANGE_IMAGE"){
        return {selectedFile:action.payload}
    }
    return state;
}

export default reducer