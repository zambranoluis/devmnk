import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

import LaptopAbiertaTransparente from "../assets/home/LaptopAbiertaTransparente.png"
import Marco from "../assets/home/Marco.mp4"
import WWW from "../assets/home/www.png"

import {
  proyectos
} from "../assets/js/Home"

import {
  GrPrevious,
  GrNext
} from "react-icons/gr";

const DisplayProyectos = () => {

  const [currentPage, setCurrentPage] = useState(0)

  function handlePageNavigation(id) {
    switch (id) {
      case "previousPage":
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1)
        } else if (currentPage < 0) {
          setCurrentPage(0)
        } else if (currentPage === 0) {
          setCurrentPage(proyectos.length -1)
        } 
        break
      case "nextPage":
        if (currentPage < proyectos.length - 1) {
          setCurrentPage(currentPage + 1)
        } else if (currentPage === proyectos.length - 1) {
          setCurrentPage(0)
        } else if (currentPage > proyectos.length - 1) {
          setCurrentPage(proyectos.length - 1)
        } 
        break
      default:
        break
    }
    
  }

  return (
    <section id="sectionDisplayProyectos"
        className="flex  flex-col w-full justify-center items-center gap-[20px]"
      >
        <div id="contenedorProyectos"
          className=" relative flex flex-col justify-center items-center rounded-2xl w-full"
        >
          <div id="contenedorBotones" className="flex w-full justify-center items-center ">
            <button id="buttonPreviousPage"
              key="previousPage"
              className="flex
                z-[50]
                left-[7%] top-[90px]
                justify-center items-center"
              onClick={(e) => {e.preventDefault();
                console.log("Clic en el botón:", e.target.id);
                handlePageNavigation(`previousPage`) }}
            >
              <GrPrevious id="arrowPreviousPage" className="w-[50px] h-[100px] " />
            </button>
            <h1 className="bg-black px-7 py-3 text-4xl font-bold text-center">Proyectos</h1>
            <button id="buttonNextPage"
              className="flex
              z-[50]
              right-[7%] top-[90px]
              justify-center items-center"
              onClick={(e) => {e.preventDefault();
                console.log("Clic en el botón:", e.target.id);
                handlePageNavigation(`nextPage`) }}
            >
              <GrNext id="arrowNextPage" className="w-[50px] h-[100px] "/>
            </button>
          </div>
          <h1 className=" bg-black/80 rounded-md text-white  text-center text-xl font-bold min-[500px]:text-2xl sm:text-3xl md:text-4xl lg:text-6xl">{proyectos[currentPage].nombre}</h1>
          <div id="contenedorMarcoyVideo"
            className="">
            <div id="videoMarco"
              className=" h-full max-h-[600px] w-full justify-center items-center"
            >
              <video src={Marco}
                className="
                z-[0]
                h-full max-h-[600px]  "
                autoPlay loop muted
              ></video>
            </div>
            <div className="flex pt-[50px] 
            flex-col 
            w-full justify-center items-center ">
              <div className="flex  
                z-20
              
              justify-center items-center 
              ">
                
              </div>
              <div className="flex absolute
              top-[12%]
              justify-center items-center 
                z-10
                "
              >
                <img src={LaptopAbiertaTransparente}
                  className="
                  w-[65%] min-[550px]:w-[65%] md:w-[75%] min-[850px]:w-[80%] lg:w-[90%] xl:w-full
                  z-20 
                  "
                  alt=""
                />
                <div className="top-[13px] absolute justify-center items-center
                  top-[9px] min-[500px]:top-[14px] sm:top-[12px] md:top-[17px] min-[860px]:top-[20px] xl:top-[22px] 
                  flex  z-[10]
                  w-[41%] min-[550px]:w-[42%] md:w-[48%] min-[850px]:w-[51%] lg:w-[59%] xl:w-[64%]
                  "
                >
                  <video src={proyectos[currentPage].video} 
                    className="w-full"
                    autoPlay loop muted 
                  ></video>
                </div>
              </div>
            </div>
          </div>

          <div id="contenedorDescripcion">
            <div id="contenedorTexto" className="flex flex-col px-10">
              <p className="pt-[30px] text-justify md:text-xl lg:text-3xl" >{proyectos[currentPage].descripcion}</p>
              {(proyectos[currentPage].descripcion2 !== "")
                ?
                  <p className="pt-[30px] text-justify md:text-xl lg:text-3xl" >{proyectos[currentPage].descripcion2}</p>
                :
                  null
              }
            </div>
            <div id="contenedorVisitarProyecto"
            className="flex pt-[40px] flex-col justify-center items-center">
              <p className="text-2xl font-bold">Visitar el proyecto:</p>
              <Link to={proyectos[currentPage].url} target="_blank" className="flex justify-center items-center p-2 hover:animate-pulse" >
                <img src={WWW} alt="" className="w-[80px] "  />
              </Link>
            </div>
            <div id="contenedorCaptura"
            className="flex  pt-[40px] flex-col justify-center items-center  ">
              <p className="text-md ">Captura del proyecto:</p>
              <img src={proyectos[currentPage].imagen} alt="" className=" w-full md:w-[70%] min-[850px]:w-[70%] lg:w-[60%] xl:w-[50%]" />
            </div>
          </div>
        </div>
      </section>
  );
}

export default DisplayProyectos;