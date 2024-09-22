import logo from './logo.svg';
import './App.css';
import Navbar2 from './component/Navbar2';
import TextForm from './component/TextForm';

function App() {
  return (
    <div className="App">
   <>
<Navbar2 hometext="Home About " Link="Links"/>   
{/* <Navbar2/> */}

<div className="container mb-3">
<TextForm heading="Enter the text to analyze below"/>
</div>



   </>

    </div>
  );
}

export default App;
