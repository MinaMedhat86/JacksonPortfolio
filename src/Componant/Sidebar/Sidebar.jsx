import React from 'react'
import { Link } from 'react-router-dom'
import mainPic from "../../project-assets/mainPic.png"

import style from "./Sidebar.module.css"

export default function Sidebar() {
  return <>

  <div className='  d-flex align-items-center flex-column pt-5'>
    <img src={mainPic} className='pt-4 w-50'/>
    <h2 className='my-4'>Jackson Ford</h2>
    <p><span className=' text-primary fw-semibold'>UI/UX/Design</span> In Spain</p>
    <Link to="/JacksonPortfolio" className={`fw-medium mt-4 mb-2 ${style.linkStyle}`}>Home</Link>
    <Link to="/about" className={`fw-medium mb-2 ${style.linkStyle}`}>About</Link>
    <Link to="/skills" className={`fw-medium mb-2 ${style.linkStyle}`}>Skills</Link>
    <Link to="/experience" className={`fw-medium mb-2 ${style.linkStyle}`}>Experience</Link>
    <Link to="/work" className={`fw-medium mb-2 ${style.linkStyle}`}>Work</Link>
    </div>


  
  </>
}
