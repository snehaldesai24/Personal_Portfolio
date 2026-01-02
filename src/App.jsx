import { Route, Routes } from "react-router-dom";
import './App.css'
import React, { useEffect } from "react";
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import Experience from './components/experience/Experience';
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import Certificates from "./components/certificates/Certificates";
import Aos from "aos";
import "aos/dist/aos.css"
import Contact from "./components/contact/Contact";


function App() {

    useEffect(() => {
     Aos.init();
     
    }, [])
  
  return (
    <div>
      <NavBar/>
      <div className="container">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/experience"} element={<Experience />} /> 
        <Route path={"/skill"} element={<Skill />} />  
        <Route path={"/project"} element={<Project />} /> 
        <Route path={"/certificates"} element={<Certificates />} />  
        <Route path={"/contact"} element={<Contact />} />   

      </Routes>
      
      </div>
    </div>
  )
}

export default App
