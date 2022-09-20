import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './componants/Header';
import Cover from './componants/Cover'
import About from './componants/About';
import Info from './componants/Info'
import Footer from './componants/Footer';
import Slider  from './componants/Slider';
// import Project from './componants/Project'
function App() {
  return (
    
    <Router>
    <div className="App">
     <Routes>
          <Route path="/about" element={<><Header/><About/></>}/>

          <Route path="/info" element={<><Header/><Info/></>}/>

          <Route path="/skill" element={<><Header/><Footer/></>}/>

          <Route path="/" 
          element={ <><Header/><Cover/><About/><Slider/><Info/><Footer/></>
          }/>
     </Routes>
     </div>
    </Router>

  );
}

export default App;
