import React from 'react'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import  DashBoard  from './pages/DashBoard'
import  Home  from './pages/Home'
import Login from './pages/Login'
import Pricing from './pages/Pricing'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import About from './pages/About'



const App = () => {
  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/dashboard' element ={<DashBoard/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/signup' element ={<SignUp/>} />
        <Route path='/pricing' element ={<Pricing/>} />
        <Route path='/about' element ={<About/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App