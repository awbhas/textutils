import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        let newTxt = text.toUpperCase();
        setText(newTxt);
    }
    const handleLoClick = ()=>{
        let newTxt = text.toLowerCase();
        setText(newTxt);
    }

  return (
    <>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#31363c':'white', color: props.mode==='dark'?'#999999':'black'}} id="myform" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower</button>

        <p className='my-2 mx-2'>{text.split('').length} words and {text.length} characters</p>
    </div>

    </>
  )
}

TextForm.prototypes = {
    heading: PropTypes.string};