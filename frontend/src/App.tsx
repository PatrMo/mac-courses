import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Nav/Navbar'
import Topbar from './Components/Topbar/Topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-[0px] w-[100vw] h-[100vh] flex flex-col">
       <Topbar/>
       <Navbar/> 
       <Outlet />
    </div>
  )
}

export default App
