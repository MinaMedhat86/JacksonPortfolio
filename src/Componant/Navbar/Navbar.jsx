import React from 'react'
import style from "./Navbar.module.css"
import { Link } from "react-router-dom";

import mainPic from "../../project-assets/mainPic.png"


export default function Navbar() {
  return <>


  
  <button className={`btn ${style.barStyle} position-fixed  z-3 ms-3 mt-2 mb-3`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  <i className="fa-solid fa-bars"></i>
    </button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header ">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div className="offcanvas-body">
    <div className=' d-flex align-items-center flex-column'>
    <img src={mainPic} className=' w-50'/>
    <h2 className='my-4'>Jackson Ford</h2>
    <p><span className=' text-primary fw-semibold'>UI/UX/Design</span> In Spain</p>
    <Link to="/JacksonPortfolio" className={`fw-medium mt-4 mb-2 ${style.linkStyle}`}>Home</Link>
    <Link to="/about" className={`fw-medium mb-2 ${style.linkStyle}`}>About</Link>
    <Link to="/skills" className={`fw-medium mb-2 ${style.linkStyle}`}>Skills</Link>
    <Link to="/experience" className={`fw-medium mb-2 ${style.linkStyle}`}>Experience</Link>
    <Link to="/work" className={`fw-medium mb-2 ${style.linkStyle}`}>Work</Link>
    </div>
  </div>
</div>
  </>
}
