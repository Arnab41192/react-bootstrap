import React from "react"
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import SideBar from "./components/SideBar";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";


function App() {

  const myfunc = () => {
    alert("Hi there")
  }
  return (
    <div className="App">
  
      {/* <SideBar/> */}
      {/* <Grid/> */}
       <Navbar/>
     
    </div>
  );
}

export default App;
