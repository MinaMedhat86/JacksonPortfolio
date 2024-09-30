import React from 'react'
import style from "./Home.module.css"
import Slider from "react-slick";

import pic1 from "../../project-assets/img_bg_2-DzCs5o-0.jpg"
import pic2 from "../../project-assets/img_bg_1-PzvG2r05.jpg"

export default function Home() {

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows : false,
  };

  const sliderArr = [
    {
     id : 1 , title1:"Hi! ", title2: "Iam Jackson", buttonText : "Download CV " , icon : "fa-solid fa-download" , img : pic1

    },
    {
      id : 2 , title1:"I am", title2: "a Designer", buttonText : "View Portfolio" , icon : "fa-solid fa-briefcase" , img : pic2
 
     }
  ]

  return <>
  
  <div className="slider-container">



      <Slider {...settings}>

        {
          sliderArr.map((item)=>{
            return <>
                        <div key={item.id} className=' '>
            <img src={item.img} className=" w-100 position-relative vh-100" alt={item.title2} />
  
            <div className={`d-flex flex-column position-absolute top-50 translate-middle-y ${style.positionStyle} z-3`}>
              <h1 className=' display-4 fw-bolder'> {item.title1} <br/> {item.title2} </h1>
              <p>100% html5 bootstrap templates Made</p>
              <b> By <a href="https://minamedhat86.github.io/Mina-Portfolio/" className=' text-primary border-bottom border-primary'> Mina Portfolio </a></b>
              <button className=' btn btn-outline-dark mt-3'>{item.buttonText}
              <i className={`ms-2 ${item.icon}`}></i>
              </button>
            </div>
          </div>
            
            </>

          })
        }
{/* 
        <div>
          <img src={pic2} className="vh-100" alt='pic2'/>
        </div> */}

      </Slider>
    </div>  </>
}
