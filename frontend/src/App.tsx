import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Nav/Navbar'
import Topbar from './Components/Topbar/Topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-[0px] w-full h-[100vh] flex flex-col">
       <Topbar/>
       <div className="flex flex-row flex-1">
        <Navbar/> 
        <Outlet />
       </div>
    </div>
  )
}

export default App
