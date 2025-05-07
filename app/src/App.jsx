import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'
import Career from './components/Career'
import Competences from './components/Competences'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='fixed top-0 left-0 h-screen w-screen z-0 bg-[url(/img/Background.jpg)] bg-center'>

      </div>
      <div className='relative z-10 h-screen overflow-y-scroll custom-scroll'>
        <Home />
        <Profile />
        <Career />
        <Competences />
        <Projects />
        <Contact />
        <Footer />
        {/*
        <Projects />
        <Contact />
        <Footer />*/}
      </div>
    </>
    
  )
}

export default App