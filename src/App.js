import './App.css';
import Navbar from './commponents/Navbar';
import TextForm from './commponents/TextForm';
// import About from './commponents/About';
import React, { useState } from 'react';
import Alert from './commponents/Alert';


function App() {

  
  const [mode, setMode] = useState('light'); // Wheather the dak mmode is eenable or not 
  const [alert, setAlert] = useState(null);
  // const toggleMode = () => {
  //   setMode(mode === 'light'? 'dark' : 'light');
  // }
  // const myStyle = {
  //   backgroundColor: mode === 'dark'? '#333' : '#fff',
  //   color: mode === 'dark'? '#fff' : '#333',
  // }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been set", "success");
      document.title = "Text Analyzer Dark Mode"
      // setInterval(() => {
      //   document.title = "Text Analyzer is a Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Text Analyzer now"
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been set","warning");
      document.title = "Text Analyzer Light Mode"
    }

      
  }

  // const [text, setText] = useState('Ener text here');

  // const handleUppercaseClick = () => {
  //   console.log("Uppercase was clicked");
  //   setText(text.toUpperCase())
  // }
  // const handleLowercaseClick = () => {
  //   console.log("Lowercase was clicked");
  //   setText("you have clicked the on handleLowercase event")
  //   setText(text.toLowerCase())
  // }
  // const handleClearClick = () => {
  //   console.log("Clear was clicked");

  

  return (
    <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  {/* <Navbar /> */}
  {/* <Navbar title="TextAnalyzer" /> */}
  {/* <Alert alert={alert}/>
   */}
  <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 
    {/* <TextForm /> */}
    {/* <About /> */}
   </div>
    </>
  );
}

export default App;
