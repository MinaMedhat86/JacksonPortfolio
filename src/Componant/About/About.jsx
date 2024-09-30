import React from 'react'
import style from "./About.module.css"

export default function About() {


 const cardArr = [
  {id : 1 , icon : "fa-regular fa-lightbulb" , color : " text-primary" , text : "Graphic Design " , borderColor : "border-primary"},
  {id : 2 , icon : "fa-solid fa-earth-americas" , color : " text-danger" , text : "Web Design " , borderColor : "border-danger"},
  {id : 3 , icon : "fa-solid fa-database" , color : " text-warning" , text : "Software " , borderColor : "border-warning"},
  {id : 4 , icon : "fa-solid fa-mobile-screen-button" , color : " text-success" , text : "Application" , borderColor : "border-success"},
]

  return <>
  
    <div className={`${style.containerStyle} mt-5`}>

        <p className=' text-body-secondary'> A B O U T &ensp; U S</p>
        <h2 className=' fw-semibold mb-5'> How Am I ?</h2>
        <p className=' text-body-secondary lh-lg mb-4'>
          <span className=' fw-semibold'>Hi Im Jackson Ford </span>
           On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
     <p className=' text-body-secondary lh-lg ' >Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
   
   <div className=' container-fluid'>
    <div className='row'>
      {
        cardArr.map((item)=>{
          return <>
                <div key={item.id} className=' col-md-3'>

<div className="card shadow mt-3 border-bottom-0 " >
<div className={`card-body ${item.borderColor} m-1 border-top-0 border-start-0 border-end-0  border-5`}>
<i className={`${item.icon} card-title ${item.color}  h2 my-3`}></i>
<h5 className="card-text mb-5 mt-2 ">
{item.text}
</h5>
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
