import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Blogs from './Components/Blogs/Blogs'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

  const App = () => {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Blogs/>
        <WorkExperience/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
export default App;