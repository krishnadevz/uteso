import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Jumborton from './components/Jumborton';
import Social from "./components/social";
import Projects from "./components/projects";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
    <Jumborton/>
    <Projects/>
    <Social/>
    <Footer/>
    </div>
  );
}

export default App;
