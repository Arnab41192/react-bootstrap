import React from "react";
import '../styles/SidebarwithIcons.css';

const SidebarwithIcons = () => {

   
  const showSideBar = () => {
   // let barsEL = document.querySelector('.bars');
    let iconsBarsEL = document.querySelector('.icon-bars');

    iconsBarsEL.classList.toggle('show');
  }



  return (
    <div className="icon-bars show">
      <a href="#" className="active">
        <i className="fa fa-home"></i>
      </a>
      <a href="#">
        <i className="fa fa-search"></i>
      </a>
      <a href="#">
        <i className="fa fa-globe"></i>
      </a>
      <a href="#">
        <i className="fa fa-trash"></i>
      </a>
      <a href="#">
        <i className="fa fa-user"></i>
      </a>
      <a href="#">
        <i className="fa fa-pencil"></i>
      </a>
      <div className="bars" onClick={showSideBar}>
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default SidebarwithIcons;
