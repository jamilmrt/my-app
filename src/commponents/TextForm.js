import React, { useState } from "react";

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleUpclick = () => {
        console.log("Uppercase was clicked");
        setText("you have clicked the on handleeupclick event");
        setText(Text.toUpperCase());
        props.showAlert("Converted to UpperCase!","success");
    };
    const handleLowerclick = () => {
        console.log("Lowercase was clicked");
        setText("you have clicked the on handleLowerclick event");
        setText(Text.toLowerCase());
        props.showAlert("Converted to lowerCase!","warning");

    };
    const handleClearClick = () => {
        console.log("Clear was clicked");
        let newText = " ";
        setText(newText);
        props.showAlert("Text is cleared! ","danger");

    };
    const handleCopyClick = () => {
        console.log("Copy was clicked");
        navigator.clipboard.writeText(Text);
        props.showAlert("Copy to Clipboard!","info");

    };
    const handleRemoveExtraSpaceoClick = () => {
        console.log("Remove Extra Space was clicked");
        setText(Text.replace(/\s+/g, " "));
        props.showAlert("The text is removed extra space!","primary");

    };
    const [Text, setText] = useState("Ener text here");
    return (
        <>
            <div
                className="container"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label btn-outline-info">
                        <u>Example textarea</u>
                    </label>
                    <textarea
                        className="form-control"
                        value={Text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#042743" : "white",
                            color: props.mode === "dark" ? "white" : "#042743",
                        }}
                        id="myBox"
                        rows="10"
                    >
                        {props.Textarea}
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclick}>
                    Convert to Upper Case
                </button>
                <button className="btn btn-secondary mx-1" onClick={handleLowerclick}>
                    Convert to Lower Case
                </button>
                <button
                    className="btn btn-outline-warning mx-1"
                    onClick={handleClearClick}
                >
                    Clear Text
                </button>
                <button className="btn btn-danger mx-1" onClick={handleCopyClick}>
                    Copi Text
                </button>
                <button
                    className="btn btn-success mx-1"
                    onClick={handleRemoveExtraSpaceoClick}
                >
                    Remove Extra Space
                </button>
            </div>

            <div
                className="container"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            >
                <h2>Text Summary:</h2>
                <p>
                    {Text.split(" ").filter((word) => word !== "").length} words and{" "}
                    {Text.length} characters.
                </p>
                <p>
                    {0.008 * Text.split(" ").filter((word) => word !== "").length} of
                    words are less than 3 characters long.
                </p>
                <h2>Frequency of each letter:</h2>
                <di v className="frequency">
                    {Text.split("")
                        .filter((char, index) => {
                            return index === Text.indexOf(char);
                        })
                        .map((char) => (
                            <span key={char}>
                                {char}: {Text.split(char).length - 1}{" "}
                            </span>
                        ))}
                </di>
                <h2>Most frequent letter:</h2>
                <p>
                    {Text.split("").reduce((acc, char) => {
                        // Your code here
                        return acc;
                        // return char;
                    })}
                </p>
                <u>
                    ------------------------------------------------------------------------------------------------------
                </u>
                <h2>
                    <u>Preview Text</u>
                </h2>
                <p>{Text.length > 0 ? Text : "Enter something to previeew here"}</p>
            </div>
        </>
    );
}
