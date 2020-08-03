import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/project';
import Adventure from './components/adventures';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Adventure></Adventure>
      <Footer></Footer>
    </div>
  );
}

export default App;
