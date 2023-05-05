
import './App.css';
import React from 'react'
import Header from'./component/Header'
import Hero from './component/Hero'
import Skills from './component/Skills'
import Education from './component/Education'
import Projects from './component/Projects'
import Contact from './component/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Skills/>
      <Education/> 
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
