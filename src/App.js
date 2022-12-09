import React from "react"
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import SideBar from "./components/SideBar";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import BasicTable from "./components/BasicTable";
import Table2 from "./components/Table2";
import ReactBootStrapTableNext from "./components/ReactBootStrapTableNext";
import MySideBar from "./components/MySideBar";
import SidebarwithIcons from "./components/SidebarwithIcons";


function App() {

  const myfunc = () => {
    alert("Hi there")
  }
  return (
    <div>
  
      {/* <SideBar/> */}
      {/* <Grid/> */}
       {/* <Navbar/> */}
         {/* <BasicTable/> */}
      {/* <Table2/> */}
      {/* <ReactBootStrapTableNext/> */}
      {/* <MySideBar/> */}
       <SidebarwithIcons/>

    </div>
  );
}

export default App;
