import React, { useState } from 'react';

import style from "./Work.module.css"

import pic1 from "../../project-assets/img-1-C4nS0eD8.jpg"
import pic2 from "../../project-assets/img-2-D-4H1m4L.jpg"
import pic3 from "../../project-assets/img-3-pR2ZEVY9.jpg"
import pic4 from "../../project-assets/img-4-tHccITd-.jpg"

import pic5 from "../../project-assets/img-5-lAucr__a.jpg"
import pic6 from "../../project-assets/img-6-DFW03AZ3.jpg"







export default function Work() {

  const picArr =[
    {id : 1 , pic : pic1 },
    {id : 2 , pic : pic2 },
    {id : 3 , pic : pic3 },
    {id : 4 , pic : pic4 }

  ]

  const moreArr = [
    {id : 1 , pic : pic5},
    {id : 2 , pic : pic6}
  ]

  const [showCards, setShowCards] = useState(false);

  const handleClick = () => {
    setShowCards(true); 
  };



  return <>
  
  <div className={`${style.containerStyle}`}>

<p className=' text-body-secondary mt-5'> M Y &ensp; W o r k</p>
<h2 className=' fw-semibold mb-4'>Recent Work</h2>

<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

  <li class="nav-item" role="presentation">

    <button className={`nav-link  fw-semibold ${style.buttonStyle} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className={`nav-link fw-semibold ${style.buttonStyle} `} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className={`nav-link fw-semibold ${style.buttonStyle} `} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">

  <div className="tab-pane fade show active" id="pills" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

    <div className=' container-fluid mb-3'>
      <div className="row">
       {
        picArr.map((item)=>{
          return <>
           <div className="col-md-6 gy-4  position-relative" key={item.id}>
          <img src={item.pic} className={`rounded-3 ${style.imgStyle} w-100`} alt="pic" />
          <div className={`bg-primary position-absolute top-0 bottom-0 start-3 end-3 p-4 rounded-3 ${style.backgroundStyle}`}>
            <a href="#" className=' text-white text-decoration-underline my-4'>Work 02</a>
            <p className=' mt-4 text-slate-200 '>   Animation </p>
          <div className=' position-relative top-50 '>
            <span className=' bg-slate-200 cursor-pointer px-2 py-1 rounded-2'>
            <i className="fa-solid fa-share "></i>
            </span>

            <span className=' mx-2 bg-slate-200 cursor-pointer px-2 py-1 rounded-2'>
   
            <i className="fa-regular fa-eye"></i>
            <a href="#" className='text-decoration-underline mt-4'>100</a>
            </span>

            <span className='cursor-pointer  bg-slate-200 px-2 py-1 rounded-2'>
   
            <i class="fa-regular fa-heart"></i>         
               <a href="#" className='text-decoration-underline mt-4'>49</a>
            </span>
</div>

          </div>
        </div>
          
          </>
        })
       }
      </div>
    </div>
    </div>

    {!showCards && <button className=' btn btn-primary px-4 ms-2 py-2' onClick={handleClick}>See More</button>}

    {showCards && <>
    
      <div className=' container-fluid mb-3'>
      <div className="row">
       {
        moreArr.map((item)=>{
          return <>
           <div className="col-md-6 gy-4  position-relative" key={item.id}>
          <img src={item.pic} className={`rounded-3 ${style.imgStyle} w-100`} alt="pic" />
          <div className={`bg-primary position-absolute top-0 bottom-0 start-3 end-3 p-4 rounded-3 ${style.backgroundStyle}`}>
            <a href="#" className=' text-white text-decoration-underline my-4'>Work 02</a>
            <p className=' mt-4 text-slate-200 '>   Animation </p>
          <div className=' position-relative top-50 '>
            <span className=' bg-slate-200 cursor-pointer px-2 py-1 rounded-2'>
            <i className="fa-solid fa-share "></i>
            </span>

            <span className=' mx-2 bg-slate-200 cursor-pointer px-2 py-1 rounded-2'>
   
            <i className="fa-regular fa-eye"></i>
            <a href="#" className='text-decoration-underline mt-4'>100</a>
            </span>

            <span className='cursor-pointer  bg-slate-200 px-2 py-1 rounded-2'>
   
            <i class="fa-regular fa-heart"></i>         
               <a href="#" className='text-decoration-underline mt-4'>49</a>
            </span>
</div>

          </div>
        </div>
          
          </>
        })
       }
      </div>
    </div>
    
    
    </>}

</div>
</div>
  
  
  </>
}
