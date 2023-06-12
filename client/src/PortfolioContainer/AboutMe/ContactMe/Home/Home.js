import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/footer'
import './Home.css'
function Home() {
  return (
    <div className='home-conatiner'>
       <Footer/>
        <Profile/>
        <Home/>
      
    </div>
  )
}

export default Home
