import React, {useState} from 'react'
const TextForm = (props) => {
    const toUpercase=()=>{
        console.log("UperCase Button is clicked")
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Uper Case","success")
    } 
    const handleOnChange=(event)=>{
        console.log("Text is changed")  
        setText(event.target.value);
    } 
    const toLowercase = () =>{
        console.log("LowerCase Button is clicked")
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
    }
    
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <center><h1>Text Utils</h1></center>
    <div className="mb-3">
        <label  className="form-label"></label>
        <textarea className="form-control" style={{ backgroundColor:props.mode==='dark'?'grey':'white' ,color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" placeholder='Enter text here' rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={toUpercase} >Convert To Upercase</button>
    <button className="btn btn-primary mx-1" onClick={toLowercase}>Convert To Lowercase</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'grey'}} >    
        <h2>Length of text</h2>
        <p><b>{text.trim() === "" ? 0 : text.trim().split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <h2>Time to read it:</h2>
        <p><b>{0.008 * text.split(" ").length}</b> minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in above textbox to preview it here"}</p>
    </div>
    </>
  )
}
export default TextForm
