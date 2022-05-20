import logo from '../image/logo.jpg' 
import '../styling/header.css'
import React from 'react'
 
 export default function header() {
   return (
       <>
      <div className="header">
     <div className='logo'>
         <img src={logo} alt="" />
         
     </div>
     <div className="flexcol">
        <div className="titdesc">
            <p className='title'>YOUR SPOTTABL TEAM</p>
            <p className="description">Spottabl supports you all throughout</p>
        </div>
     </div>
     </div>
     </>
   )
 }
 