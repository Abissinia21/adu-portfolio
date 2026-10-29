
import { useState } from 'react';
import './App.css';
import  NavBar from './component/navBar'
import  Home from './component/Home'
import  About from './component/about'
import Skills from './component/skills'
import Projects from './component/projects' 
import Education from "./component/education";
import GitHub from "./component/github";
import Contact from "./component/contact";
 function App(){
  return(
    <>
<NavBar />
<Home />
<About />
<Skills />
<Projects />
<Education />
<GitHub/>
<Contact />
    </>
  )
  }
export default App;
