import React from "react";
import Cursor from './components/common/Cursor'
import Home from './slides/Home'
import About from './slides/About'
import Skills  from './slides/Skills'
import Works from './slides/Works'
import Contact from './slides/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
        <ToastContainer/>
        <Cursor />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
    </>
  );
}

export default App;
