 
 import './App.css';
 import Navbar from './commponents/Navbar';
import TextForm from './commponents/TextForm';

function App() {
  return (
    <>
  {/* <Navbar title="TextUtils" aboutTexts="About Text" /> */}
  {/* <Navbar /> */}
  <Navbar title="TextAnalyzer" />
  <div className="container">
    <TextForm heading="Enter the text to analyze"/>
    {/* <TextForm /> */}
  </div>
    </>
  );
}

export default App;
