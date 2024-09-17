{/* <div id="individiual">
              <img src="https://i.ibb.co/0qzKQxK/Proyectos.png" alt="proyecto1"  />
              <div>
                <h3>Proyecto 1</h3>
                <p>Descripción del proyecto1</p>
                <div id="contenedorVisitarProyecto" className="">
                  <p className="">Visitar el proyecto:</p>
                  <Link to="/proyectos/proyecto1" target="_blank" className="" >
                    <img src="" alt="visitarproyecto1" className=""  />
                  </Link>
                </div>
              </div>
            </div> */}




import { useState, useEffect } from "react"
import {Link} from "react-router-dom"


import {
  proyectos,
  tecnologias
} from "../assets/js/Home"


// const bgColor = {
//   ""
// }


import {FadeText} from "../assets/js/Proyectos"

import WWW from "../assets/home/www.png"

import iconProject from "../assets/proyectos/iconProject.png"

import LaptopAbiertaTransparente from "../assets/home/LaptopAbiertaTransparente.png"



const TarjetasProyecto = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="contenedor" className=" grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center lg:p-[40px] gap-[50px]">
      {proyectos.map((proyecto, index) => (
        <div id={`proyecto${index}`} key={`proyecto${index}`} className="relative min-h-[550px] max-w-[600px] flex w-full flex-col justify-between items-center p-2">
          <div id={`contenedorImgProyecto${index}`} className="  h-[280px]  rounded-sm" onMouseEnter={() => setIsHovered(`contenedorImgProyecto${index}`) }
          onMouseLeave={() => setIsHovered(false)} onFocus={() => setIsHovered(`contenedorImgProyecto${index}`)}
          >
            <img id={`imgProyecto${index}`} src={proyecto.imagen} style={{display: (isHovered === `contenedorImgProyecto${index}`) ? "none" : "block"}}  
            className="" alt="proyecto1"  />
            <div className="flex relative ">
              <img className=" left-0   min-w-[350px] min-[500px]:w-[490px] lg:w-[400px] xl:w-[550px]" style={{display: (isHovered === `contenedorImgProyecto${index}`) ? "block" : "none"}}  src={LaptopAbiertaTransparente} alt="marcoLaptop" />
              <video tabIndex={0}  src={proyecto.video} style={{display: (isHovered === `contenedorImgProyecto${index}`) ? "block" : "none"}} 
              className="h-[65%] left-[67px] top-[14px] min-[500px]:left-[84px] min-[500px]:top-[16px] lg:left-[70px] lg:top-[15px] lg:h-[160px] xl:h-[220px] xl:left-[97px] xl:top-[20px]   absolute   " autoPlay muted controls ></video>
            </div>
          </div>
          <div id={`contenedorInfoProyecto${index}`} style={{ opacity: (isHovered === `contenedorImgProyecto${index}`) ? 0.1 : 1 }} className=" absolute  top-[50%] flex flex-col justify-between items-center bg-black/70 w-full rounded-md  backdrop-blur-sm">
            {
              (proyecto.icon2 != null) ?
              <div className="  flex absolute top-[-40px] left-[10px] min-h-[30px] flex-row justify-center items-center gap-2 bg-black backdrop-blur-sm px-4 py-4 rounded-lg place-self-start">
                <img src={(proyecto.icon1 != null) ? proyecto.icon1 : ""} className="h-[40px]" alt="icon1" />
                <img src={proyecto.icon2 != null ? proyecto.icon2 : ""} className="h-[40px]" alt="icon2" />
                <h3 className="text-center  text-xl font-bold">{proyecto.nombre}</h3>
              </div>
              :
              <div className=" flex h-[20%] absolute top-[-40px] left-[10px] min-h-[70px] flex-row  justify-center items-center  bg-black backdrop-blur-sm borderwhite border[1px] gap-2 px-4 py-4 rounded-lg place-self-start">
                <img src={(proyecto.icon1 != null) ? proyecto.icon1 : iconProject} className="h-[40px]" alt="icon1" />
                <h3 className="text-center text-xl font-bold">{proyecto.nombre}</h3>
              </div>
            }
            <div className="flex mt-[30px] flex-col justify-center items-center p-2">
              <p className="text-center h-max-[200px] ">{proyecto.descripcion}</p>
            </div>
            <div id={`contenedorVisitarProyecto${index}`} className="h-[30%] p-2  flex flex-col justify-center ">
              <p className="text-sm font-bold text-center ">Visitar el proyecto...</p>
              <Link to={proyecto.url} target="_blank" className="flex justify-center items-center  rounded-lg " >
                <img src={WWW} className="h-[40px]" alt="visitarproyecto1"   />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TarjetasProyecto;