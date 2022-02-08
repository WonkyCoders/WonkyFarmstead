import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MapSVG from './components/MapSVG';
import ProduceContainer from './components/ProduceContainer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';

//Array of produce for generating produce list
let ProduceArray = [
  {
    id: 1,
    foodType: "BABY CARROTS",
    region:"Taranaki",
  },
  {
    id: 2,
    foodType: "SWEETCORN",
    region:"Auckland"
  },
  {
    id: 3,
    foodType: "BEETROOT",
    region:"Wellington"
  },
  {
    id: 4,
    foodType: "SPINACH",
    region:"Hawke's Bay"
  }
]

//highlighting map regions based on their id
function highlightRegion(id) {
  let others = document.getElementsByClassName("region")
  for (let i = 0; i < others.length; i++) {
    others[i].setAttribute('fill', '#a2e622')
  }
  let desired = document.getElementById(id);
  desired.setAttribute('fill', '#429054')
  document.getElementById('region-name').firstChild.data = desired.id
}

function unhighlightRegion(id) {
  let desired = document.getElementById(id);
  desired.setAttribute('fill', '#a2e622')
}


function App() {
  //handle tap on produce item, highlight corresponding region on svg
  const onClick = (id) => {
    for (let i = 0; i < ProduceArray.length; i++){
      if (ProduceArray[i].region.includes(id)){
        highlightRegion(id);
      }
      else if (!ProduceArray[i].region.includes(id)){
        unhighlightRegion(id);
      }
    }
  }

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <div className="ContentBody">
          <MapSVG />
          <ProduceContainer produceList = {ProduceArray} onClick={onClick}/>
        </div>
        <Home/>
      {/* <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes> */}
      <Footer/>
      </Router>
    </div>
  );
}


export default App;
