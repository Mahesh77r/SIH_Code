import React from 'react'
import img from '../images/aazadi.png'
import img1 from '../images/chasma.png'
import img2 from '../images/myasimg.png'
import '../components/Header.css'
import Navbar from '../components/Navbar'


export default function Header() {
  return (
    <div id='header1'>
      <img id='img1' src={img2}/>
      <img id='img2' src={img}/>
      <img id='img3'  src={img1}/>
      <div id="line">
        <h3>Government of India <span>|</span> <span>भारत सरकार</span></h3>  |
    </div>
   
     
    </div>
  )
}
