
import React,{useState} from 'react'



export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpclick = () => {
        console.log("Uppercase was clicked");
        setText("you have clicked the on handleeupclick event")
        setText(Text.toUpperCase())
    }
    const handleLowerclick = () => {
        console.log("Lowercase was clicked");
        setText("you have clicked the on handleLowerclick event")
        setText(Text.toLowerCase())
    }
    const [Text, setText] = useState('Ener text here');
  return (
    <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label btn-outline-info" ><u>Example textarea</u></label>
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="10">{props.Textarea}</textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpclick} >Convert to Upper Case</button>
    <button className="btn btn-secondary mx-2" onClick={handleLowerclick} >Convert to Lower Case</button>
    <div className="container">
        <h2>Text Summary:</h2>
        <p>{Text.split(' ').filter((word) => word !== '').length} words and {Text.length} characters.</p>
        <p>{0.008 * Text.split(' ').filter((word) => word !== '').length} of words are less than 3 characters long.</p>
        <h2>Frequency of each letter:</h2>
        <div className="frequency">
            {
                Text.split('').filter((char, index) => {
                    return index === Text.indexOf(char);
                }).map((char) => (
                    <span key={char}>{char}: {Text.split(char).length - 1} </span>
                ))
            }
        </div>
        <h2>Most frequent letter:</h2>
            <p>{Text.split('').reduce((acc, char) => {
                // Your code here
                return acc;
            
            })}</p>
    </div>
    </>
  )
}


