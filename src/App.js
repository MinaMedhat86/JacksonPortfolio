import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Componant/Layout/Layout';
import Home from "./Componant/Home/Home"
import About from "./Componant/About/About"
import Work from "./Componant/Work/Work"
import Skills from "./Componant/Skills/Skills"
import Experience from "./Componant/Experience/Experience"
import Notfound from './Componant/Notfound/Notfound';





export default function App() {

  let routers = createBrowserRouter([
    {path : "" , element : <Layout/> , children :[
      {path : "JacksonPortfolio" , element : <Home/>},
      {path : "about" , element : <About/>},
      {path : "work" , element : <Work/>},
      {path : "skills" , element : <Skills/>},
      {path : "experience" , element : <Experience/>},
      {path : "*" , element : <Notfound/>}

    ]}
  ]);

  return <>
  <RouterProvider router={routers}></RouterProvider>
  
  
  </>
}

