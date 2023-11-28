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
    const clearText=()=>{
        setText('')
    }
    const copyText=()=>{
        var text=document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy Text Successful", "success")
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <center><h1 className='my-3'>Text Utils</h1></center>
    <div className="mb-3">
        <label  className="form-label"></label>
        <textarea className="form-control" style={{ backgroundColor:props.mode==='dark'?'rgb(0 88 116)':'white' ,color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="my-box" placeholder='Enter text here' rows="8"></textarea>
    </div>
    
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={toLowercase}>Convert To Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={toUpercase} >Convert To Upercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'grey'}} >    
        <h2>Length of text</h2>
        <p><b>{text.trim() === "" ? 0 : text.trim().split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <h2>Time to read it:</h2>
        <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>
    </>
  )
}
export default TextForm
