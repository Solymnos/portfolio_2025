import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <div className='fixed top-0 left-0 h-screen w-screen z-0 bg-[url(/img/Background.jpg)] bg-center'>

      </div>
      <div className='relative z-10 h-screen overflow-y-scroll'>
        <Home />
        <Profile />
      </div>
    </>
    
  )
}

export default App