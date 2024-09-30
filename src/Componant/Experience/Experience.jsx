import React from 'react'
import style from "./Experience.module.css"

export default function Experience() {

  const feedsArr = [
    {title : "Full Stack Developer" , content : "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may." , color : "bg-primary"},
    {title : "Front End Developer at Google Company " , content : "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar." , color : "bg-danger"},
    {title : "System Analyst" , content : "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar." , color : "bg-warning"},
  ]

  return <>
  
  <div className={`${style.containerStyle} mt-5`}>

<p className=' text-body-secondary'> E X P E R I E N C E</p>
<h2 className=' fw-semibold mb-4'>Work Experience</h2>


<ol class="relative border-s border-gray-200 dark:border-gray-700">  


{
  feedsArr.map((item)=>{
    return <>
    
    <li class="mb-10 ms-6 bg-slate-100 p-4 rounded-4">       

<span className={`absolute flex items-center justify-center w-16 h-16 rounded-circle border-5 border-gray-100  -start-8 ${item.color}`}>
<i className=" fs-4 fa-solid fa-pen text-white "></i>
</span>

<h3 class="flex pt-3 items-center cursor-pointer mb-1 text-lg font-semibold text-gray-900 dark:text-white">
 {item.title}
  <span class=" text-gray-400 ms-4 ">2017-2018</span>
  </h3> 
<p class="mb-2 mt-3 text-base font-normal text-gray-500 dark:text-gray-400 lh-lg">
{item.content}

</p>

</li>
    </>

  })
}




</ol>





</div>
  </>
}
