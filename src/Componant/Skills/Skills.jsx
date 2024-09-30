import React from 'react'
import style from "./Skills.module.css"

export default function Skills() {


  const progressArr = [
    {
      title : "Photoshop" ,  number : "75%" , color : "bg-primary" , width : "w-75"
    },
    {
      title : "jQuery" ,  number : "60%" , color : "bg-danger" , width : "w-60"
    },
    {
      title : "HTML5" ,  number : "80%" , color : "bg-warning" , width : "w-80"
    },
    {
      title : "CSS3" , number : "90%" , color : "bg-secondary" , width : "w-96"
    },
    {
      title : "Wordpress" , number : "70%" , color : "bg-success" , width : "w-72"
    },
    {
      title : "SEO" , number : "80%" , color : "bg-info" , width : "w-80"
    }
  ]

  return <>
  
  <div className={`${style.containerStyle}`}>

<p className=' text-body-secondary'> M Y &ensp; S P E C I A L T Y</p>
<h2 className=' fw-semibold mb-4'> My Skiils</h2>
<p className='text-body-secondary lh-lg mb-4'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>


<div className=' container-fluid'>
  <div className="row">

{
  progressArr.map((item)=>{
    return <>
    
    <div className="col-md-6">
      <h5> {item.title}</h5>

  <div className="progress mb-4" role="progressbar" aria-label="Default striped example" aria-valuenow="" aria-valuemin="0" aria-valuemax="100">
  <div className={`progress-bar pt-1 ${item.color} progress-bar-striped ${item.width}  fw-semibold  rounded-end-3`}>
  {item.number}
  </div>
</div>

    </div>
    </>
  })
}


  </div>
</div>
</div>
  </>
}
