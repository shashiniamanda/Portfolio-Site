import React from 'react';
import './App.css';
import About from './Components/about/About';
import Home from './Components/home/Home';
import Sidebar from './Components/sidebar/Sidebar';
import Services from './Components/services/Services';
import Resume from './Components/resume/Resume';
import Contact from './Components/contact/Contact';
import Blog from './Components/blog/Blog';
const App = () => {
  return (

      <><Sidebar /><main className='main'>
      <Home />
      <About/>
      <Services/>
      <Resume/>
      <Blog/>
      <Contact />

    </main></>
  )
}

export default App
