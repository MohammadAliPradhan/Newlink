import logo from './logo.svg';
import Home from "./component/Home.js"
import './App.css';
import NavBar from './component/NavBar.js';
import MainSec1 from './component/MainSec1';
import CardBox from './component/CardBox';


function App() {
  return (
    <>
    <div>
    <NavBar />
    <Home />
    <MainSec1 />
    <CardBox />
    </div>
    </>

  );
}

export default App;
