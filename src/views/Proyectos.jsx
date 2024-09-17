import { useState, useEffect } from "react"
import {Link} from "react-router-dom"



import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


import TarjetasProyecto from "../components/TarjetasProyecto"

const Proyectos = () => {
  
  return (
    <>
      <NavBar />
      <main className="">
        <h1 className="text-3xl font-bold text-center">Proyectos</h1>
        <section className="mt-8" >
          <TarjetasProyecto />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Proyectos;