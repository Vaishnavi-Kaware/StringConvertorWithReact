import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick=()=>{
    console.log("Upper Case Was Clicked"+ text)
    let newText=text.toUpperCase();
    setText(newText)
    
    
  }

  const handleUpClick1=()=>{
    console.log("Upper Case Was Clicked"+ text)
    let newText=text.toLowerCase();
    setText(newText)
    
    
  }
 const handleOnChange=(event)=>
 {
  console.log("On Change");
  setText(event.target.value);
 }


  const [text,setText]=useState('Enter Text here');

  return (
    <div>


<h3>{props.heading}</h3>
<div className="form-group">

<textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8" ></textarea>

</div>
<a className="btn btn-primary btn-lg active" onClick={handleUpClick} style={{ marginRight: "10px" }} role="button" aria-pressed="true">
  Convert to UpperCase
</a>
<a className="btn btn-primary btn-lg active" onClick={handleUpClick1} role="button" aria-pressed="true">
  Convert to LowerCase
</a>




    </div>
  )
}
