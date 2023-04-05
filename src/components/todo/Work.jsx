import React, { useState } from 'react'
import List from './List/List'
import Form from './Form/Form'
import Footer from './Footer/footer'
import "./style.css";


import PropTypes from "prop-types";
function Work() {
  const [works, setWorks] = useState(
    JSON.parse(localStorage.getItem("works")) || []
    // [
    //   {
      
    //   name: "Taste JavaScript",
    //   isCompleted : true
    // },
    // {
    
    //   name: "Code furiously",
    //   isCompleted: true
    // },
    // {
   
    //   name: "Promote Mavo",
    //   isCompleted: false
    // },
    // {
    //   name: "Give talks",
    //   isCompleted: false
    // },
    // {
    //   name: "Write tutorials",
    //   isCompleted: true
    // },
    // {
    //   name: "Have a life!",
    //   isCompleted: false
    // }
  
  // ]
  );

  const [hide, setHide] = useState("All");  
  return (
    <div className="todoapp">
      {}{}
      <Form addWork = {setWorks} works_list = {works} />
      <List works_list={works} addWork = {setWorks} hide = {hide}/>
      <Footer works_list={works} addWork = {setWorks} setHide = {setHide} />
    </div>
  )
}

export default Work
