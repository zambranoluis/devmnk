import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

import PanelesMoviles from "../components/PanelesMoviles.jsx"
import DisplayProyectos from "../components/DisplayProyectos.jsx"

const Home = () => {  

  return (
    <>
      <NavBar />
      <main className="flex flex-col py-10 gap-12 gap-5 w-full justify-center items-center ">
        <PanelesMoviles />
        <DisplayProyectos />
      </main>
      <Footer />
    </>
  );
}

export default Home;