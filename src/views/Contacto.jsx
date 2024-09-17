import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

import {
  socials,
  handleSwipeSocials,
  handleCardGrow
} from "../assets/js/Contacto"

import PersonContact from "../assets/contacto/personContact.png"
import SocialsWallpaper from "../assets/contacto/SocialsWallpaper.jpg"
import SocialsWallpaperNeon from "../assets/contacto/SocialsWallpaperNeon.jpg"
import ArrowRight from "../assets/contacto/ArrowRight.png"

import CardOpen from "../assets/contacto/cardOpen.mp3"
import CardClose from "../assets/contacto/cardClose.mp3"


const Contacto = () => {
  
  return (
    <>
      <NavBar />
      <main className=" flex flex-col w-full justify-center items-center">
        <section className="flex w-[90%]  flex-col justify-center items-center p-2">

          <div className="flex  w-full min-h-[500px] bg-cover bg-center bg-no-repeat max-w-[800px]" style={{ backgroundImage: `url(${SocialsWallpaperNeon})` }} >
            
            <div className="flex bg-black/35 backdrop-blur-sm flex-col justify-center items-center w-full  h-full ">

              <div className="flex p-5 justify-center items-center w-full bg-black/70">
                <h1 className="text-3xl font-bold text-center text-white">Informacion de contacto</h1>
              </div>

              <div id="panelSocials" className="relative flex w-full">
                <audio id="cardOpen"  type="audio/mpeg"  >
                  <source src={CardOpen} />
                  Your browser does not support the audio element.
                </audio>
                <audio id="cardClose" src={CardClose} type="audio/mpeg">
                  <source src={CardClose} />
                  Your browser does not support the audio element.
                </audio>

                <div id="socialsContainerSmall" className="min-[800px]:hidden grid grid-cols-2 py-10 px-5 w-[80%]">
                  
                  <div id="socials1Small" className="divSocials  top-[10px] flex  w-full  flex-col  gap-5 justify-center items-start ">
                    {socials.map((social, index) => (
                      (index < 5) && <div className={`flex relative bg-[${social.bgColor}]/[0.5] backdrop-blur-sm w-[60px]  h-[60px]  rounded-full   justify-between items-center`}  key={`${social.id}_small`} id={`${social.id}_small`}
                      >
                        <div id={`contenedorBotonSmall_${social.id}`} className="flex absolute z-[1] rounded-l-full w-[130px]  justify-self-start ">
                          <label className="flex " htmlFor={`checkboxSmall_${social.id}`} >
                            <img className="w-[60px] h-[60px] rounded-full animate-pulse"   src={social.imagen} alt={social.id} />
                          </label>
                          <input className="hidden" id={`checkboxSmall_${social.id}`} type="checkbox" name={`checkboxSmall_${social.id}`} onClick={(e) => { handleCardGrow( `${social.id}_small`, `checkboxSmall_${social.id}`, `contenedorBotonSmall_${social.id}`, `infoSmall_${social.id}`) }} />
                        </div>
                        <div id={`infoSmall_${social.id}`} className="flex ml-[40px] w-[320px] rounded-r-full h-full  justify-center items-center hidden " >
                          <p className="text-center font-bold text-sm">{social.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div id="socials2Small" className=" max-[800px]:translate-x-[-50%] max-[800px]:translate-y-[50%] max-[800px]:scale-0 top-[10px] flex  w-full  flex-col  gap-5 justify-center items-start ">
                    {socials.map((social, index) => (
                      (index > 4) && <div className={`flex relative bg-[${social.bgColor}]/[0.5] backdrop-blur-sm w-[60px]  h-[60px]  rounded-full   justify-between items-center`}  key={`${social.id}_small`} id={`${social.id}_small`}
                      >
                        <div id={`contenedorBotonSmall_${social.id}`} className="flex absolute z-[1] rounded-l-full w-[130px]  justify-self-start ">
                          <label className="flex " htmlFor={`checkboxSmall_${social.id}`} >
                            <img className="w-[60px] h-[60px] rounded-full animate-pulse"   src={social.imagen} alt={social.id} />
                          </label>
                          <input className="hidden" id={`checkboxSmall_${social.id}`} type="checkbox" name={`checkboxSmall_${social.id}`} onClick={(e) => {handleCardGrow( `${social.id}_small`, `checkboxSmall_${social.id}`, `contenedorBotonSmall_${social.id}`, `infoSmall_${social.id}`) }} />
                        </div>
                        <div id={`infoSmall_${social.id}`} className="flex ml-[40px] w-[320px] rounded-r-full h-full  justify-center items-center hidden " >
                          <p className="text-center font-bold text-sm">{social.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
                <div id="socialsContainerLarge" className="max-[800px]:hidden grid grid-cols-2 py-10 px-5 w-[80%]">
                  
                  <div id="socials1Large" className="divSocials  top-[10px] flex  w-full  flex-col  gap-5 justify-center items-start ">
                    {socials.map((social, index) => (
                      (index < 5) && <div className={`flex relative bg-[${social.bgColor}]/[0.5] backdrop-blur-sm w-[60px]  h-[60px]  rounded-full   justify-between items-center`}  key={`${social.id}_Large`} id={`${social.id}_Large`}
                      >
                        <div id={`contenedorBotonLarge_${social.id}`} className="flex absolute z-[1] rounded-l-full w-[130px]  justify-self-start ">
                          <label className="flex " htmlFor={`checkboxLarge_${social.id}`} >
                            <img className="w-[60px] h-[60px] rounded-full animate-pulse"   src={social.imagen} alt={social.id} />
                          </label>
                          <input className="hidden" id={`checkboxLarge_${social.id}`} type="checkbox" name={`checkboxLarge_${social.id}`} onClick={(e) => { handleCardGrow( `${social.id}_Large`, `checkboxLarge_${social.id}`, `contenedorBotonLarge_${social.id}`, `infoLarge_${social.id}`) }} />
                        </div>
                        <div id={`infoLarge_${social.id}`} className="flex ml-[40px] w-[320px] rounded-r-full h-full  justify-center items-center hidden " >
                          <p className="text-center font-bold text-sm">{social.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div id="socials2Large" className=" max-[800px]:translate-x-[-50%] max-[800px]:translate-y-[50%] max-[800px]:scale-0 top-[10px] flex  w-full  flex-col  gap-5 justify-center items-start ">
                    {socials.map((social, index) => (
                      (index > 4) && <div className={`flex relative bg-[${social.bgColor}]/[0.5] backdrop-blur-sm w-[60px]  h-[60px]  rounded-full   justify-between items-center`}  key={`${social.id}_Large`} id={`${social.id}_Large`}
                      >
                        <div id={`contenedorBotonLarge_${social.id}`} className="flex absolute z-[1] rounded-l-full w-[130px]  justify-self-start ">
                          <label className="flex " htmlFor={`checkboxLarge_${social.id}`} >
                            <img className="w-[60px] h-[60px] rounded-full animate-pulse"   src={social.imagen} alt={social.id} />
                          </label>
                          <input className="hidden" id={`checkboxLarge_${social.id}`} type="checkbox" name={`checkboxLarge_${social.id}`} onClick={(e) => {handleCardGrow( `${social.id}_Large`, `checkboxLarge_${social.id}`, `contenedorBotonLarge_${social.id}`, `infoLarge_${social.id}`) }} />
                        </div>
                        <div id={`infoLarge_${social.id}`} className="flex ml-[40px] w-[320px] rounded-r-full h-full  justify-center items-center hidden " >
                          <p className="text-center font-bold text-sm">{social.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="flex w-full flex-col absolute z-[2]  justify-center items-start">
                  <div className="flex absolute right-0 top-[50px] md:hidden rounded-full bg-white p-1  hover:cursor-pointer" onClick={(e) => {e.preventDefault(); handleSwipeSocials()}}>
                    <img className="w-[60px] " src={ArrowRight} alt="MoreSocialsButton" />
                  </div>
                  <div className="flex absolute right-0 top-[114px] ">
                    <img className="w-[160px] " src={PersonContact} alt="PersonContact" />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contacto;