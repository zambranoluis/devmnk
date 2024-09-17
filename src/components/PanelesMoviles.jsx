import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

import { GoDotFill } from "react-icons/go";

import {
  handleChangeTool,
  showSubHerramientas,
  tecnologias,
} from "../assets/js/Home"

import {
  GrPrevious,
  GrNext
} from "react-icons/gr";

const PanelesMoviles = () => {


  
  

  return (
    <section id="sectionHerramientas" className="flex  w-[90%] py-10 min-h-[850px] gap-20  flex-col justify-start items-center ">

      <div id="contenedorBotones" className="flex w-full justify-center items-center ">

        <button id="buttonPreviousTool"
          key="previousTool"
          className="flex
            z-[50]
            left-[7%] top-[90px]
            justify-center items-center"
          onClick={(e) => {e.preventDefault();
            handleChangeTool(`toolsLeft`) }}
        >
          <GrPrevious id="arrowPreviousTool" className="w-[50px] h-[100px] " />
        </button>
        <h1 className="bg-black px-7 py-3 text-4xl font-bold text-center">Herramientas</h1>
        <button id="buttonNextTool"
          className="flex
          z-[50]
          right-[7%] top-[90px]
          justify-center items-center"
          onClick={(e) => {e.preventDefault();
            handleChangeTool(`toolsRight`) }}
        >
          <GrNext id="arrowNextTool" className="w-[50px] h-[100px] "/>
        </button>
      </div>
      
      <div id="contenedorHerramientas"
        className="flex flex-col max-w-[600px] relative
        w-full justify-center items-center 
      ">

        <div id="herramientas_frontend"
          className="panelFrontal flex flex-col py-10 bg-none/10
          absolute z-[4]  translate-y-[40px]  
          w-[90%] h-[500px]
          justify-center items-center
          border border-white/70 border-[3px] backdrop-blur-sm
        ">
          <div className="flex h-[10%] justify-center items-center">
            <h2 className="text-3xl font-bold text-center " >Frontend</h2>
          </div>
          <div className="grid grid-cols-2 h-[80%] justify-center items-center px-0  gap-10 ">
            { tecnologias["frontend"].map((tecnologia, index) => (
              ( tecnologia.tipo === "frontend" ) && (
                ( index < 4 )
                  ? (
                    <div key={tecnologia.id} id={tecnologia.id} className="divTech divTech1  w-[120px] flex py-3 px-2 gap-5 flex-col justify-center items-center ">
                      <img  src={tecnologia.imagen} className={`iconTech h-[50px]`} alt={`Icono${tecnologia.nombre}`} />
                      <p className="nameTech px-2 text-center" >{tecnologia.nombre}</p>
                    </div>
                  )
                  : (
                    <div key={tecnologia.id} id={tecnologia.id} className="divTech divTech2 hidden w-[120px] flex py-3 px-2 gap-5 flex-col justify-center items-center ">
                      <img  src={tecnologia.imagen} className={`iconTech h-[50px]`} alt={`Icono${tecnologia.nombre}`} />
                      <p className="nameTech px-2 text-center" >{tecnologia.nombre}</p>
                    </div>
                  )
              )
            ))}
          </div>
          <div className="w-[50%] h-[10%]  gap-3 flex justify-center items-center">
            <GoDotFill id="puntoSelectorSubHerramientas1" className="puntoSelectorSubHerramientas1 cursor-pointer scale-[150%]" onClick={() => showSubHerramientas(`puntoSelectorSubHerramientas1`)} />
            <GoDotFill id="puntoSelectorSubHerramientas2" className="puntoSelectorSubHerramientas2 cursor-pointer" onClick={() => showSubHerramientas("puntoSelectorSubHerramientas2")} />
          </div>
        </div>

      
        <div id="herramientas_backend"
          className="panelDerecho  flex flex-col py-10
          absolute z-[2] translate-x-[32%] translate-y-[-140px]  scale-[50%]
          w-[90%] h-[500px]
          justify-center items-center
          border border-white/70 border-[3px] backdrop-blur-sm
        ">
          <div className="flex h-[10%] justify-center items-center">
            <h2 className="text-3xl font-bold text-center " >Backend</h2>
          </div>

          <div className="grid grid-cols-2 h-[80%]  justify-center items-center px-6  gap-10">
            {tecnologias["backend"].map((tecnologia, index) => (
              (tecnologia.tipo === "backend") && (
                <div key={tecnologia.id} id={tecnologia.id} className="divTech w-[120px] flex py-3 px-2 gap-5 flex-col justify-center items-center" >
                  <img  src={tecnologia.imagen} 
                    className={
                      (tecnologia.id === "tec_python" || tecnologia.id === "tec_nodejs")
                        ? "iconTech h-[60px]"
                        : "iconTech h-[50px]"
                    }
                    alt={`Icono${tecnologia.nombre}`} />
                  <p className="nameTech px-2 text-center">{tecnologia.nombre}</p>
                </div>
              )
            ))}
          </div>
          <div className="w-[50%] h-[10%]  gap-3 flex justify-center items-center">
            <GoDotFill id="puntoSelectorSubHerramientas1" className="puntoSelectorSubHerramientas1 cursor-pointer scale-[150%]" onClick={() => showSubHerramientas(`puntoSelectorSubHerramientas1`)} />
          </div>
        </div>


        
        <div id="herramientas_diseño" 
          className="panelIzquierdo flex flex-col py-10
          absolute z-[3] translate-x-[-32%] translate-y-[-140px]  scale-[50%]
          w-[90%] h-[500px]
          justify-center items-center
          border border-white/70 border-[3px] backdrop-blur-sm
        ">
          <div className="flex h-[10%]  justify-center items-center">
            <h2 className="text-3xl font-bold text-center " >Diseño</h2>
          </div>
          <div className="grid grid-cols-2 h-[80%]  justify-center items-center px-0  gap-10">
            {tecnologias["diseño"].map((tecnologia, index) => (
              (tecnologia.tipo === "diseño") && (
                <div key={tecnologia.id} id={tecnologia.id} className="divTech w-[120px] flex py-3 px-2 gap-5 flex-col justify-center items-center">
                <img  src={tecnologia.imagen} className="iconTech h-[50px]" alt={`Icono${tecnologia.nombre}`} />
                <p className="nameTech px-2 text-center">{tecnologia.nombre}</p>
                </div>
              )
            ))}
          </div>
          <div className="w-[50%] h-[10%]  gap-3 flex justify-center items-center">
            <GoDotFill id="puntoSelectorSubHerramientas1" className="puntoSelectorSubHerramientas1 cursor-pointer scale-[150%]" onClick={() => showSubHerramientas(`puntoSelectorSubHerramientas1`)} />
          </div>
          
        </div>


        <div id="herramientas_profesional" 
          className="
          panelTrasero flex flex-col py-10
          scale-[50%] translate-y-[-190px]
          absolute z-[1]
          w-[90%] h-[500px]
          justify-center items-center
          border border-white/70 border-[3px] backdrop-blur-sm
        ">
          <div className="flex h-[10%]  justify-center items-center">
            <h2 className="text-3xl font-bold text-center " >Profesionales</h2>
          </div>
          <div className="grid grid-cols-2 h-[80%]  justify-center items-center px-0  gap-10">
            {tecnologias["profesional"].map((tecnologia, index) => (
              (tecnologia.tipo === "profesional") && (
                <div key={tecnologia.id} id={tecnologia.id} className="divTech w-[120px] flex py-3 px-2 gap-5 flex-col justify-center items-center">
                <img  src={tecnologia.imagen} className="iconTech h-[50px]" alt={`Icono${tecnologia.nombre}`} />
                <p className="nameTech px-2 text-center">{tecnologia.nombre}</p>
                </div>
              )
            ))}
          </div>
          <div className="w-[50%] h-[10%]  gap-3 flex justify-center items-center">
            <GoDotFill id="puntoSelectorSubHerramientas1" className="puntoSelectorSubHerramientas1 cursor-pointer scale-[150%]" onClick={() => showSubHerramientas(`puntoSelectorSubHerramientas1`)} />
          </div>
          
        </div>

        
        {/* <div id="herramientas_profesional"
          className="panelTrasero flex flex-col py-10
          scale-[50%] translate-y-[-190px]
          absolute z-[1]
          w-[90%] h-[500px]
          justify-center items-center
          border border-white/70 border-[3px] backdrop-blur-sm
          ">
          <div className="flex h-[10%]  justify-center items-center">
            <h2 className="text-3xl font-bold text-center " >Profesionales</h2>
          </div>
          <div className="grid grid-cols-2 h-[80%]  justify-center items-center px-0  gap-10">
            {tecnologias["profesional"].map((tecnologia, index) => (
              (tecnologia.tipo === "profesional") && (
                <div key={tecnologia.id} id={tecnologia.id} className="divTech w-full flex py-3 px-2 gap-5 flex-col justify-center items-center">
                  <img  src={tecnologia.imagen} className="iconTech h-[50px]" alt={`Icono${tecnologia.nombre}`} />
                  <p className="nameTech px-2 text-center">{tecnologia.nombre}</p>
                </div>
              )
            ))}
          </div>
          <div className="w-[50%] h-[10%]  gap-3 flex justify-center items-center">
            <GoDotFill id="puntoSelectorSubHerramientas1" className="puntoSelectorSubHerramientas1 cursor-pointer scale-[150%]" onClick={() => showSubHerramientas(`puntoSelectorSubHerramientas1`)} />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default PanelesMoviles;