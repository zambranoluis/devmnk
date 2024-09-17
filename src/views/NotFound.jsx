import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import { Link } from "react-router-dom"

import NotFoundVideo from "../assets/notfound/NotFoundDevMnkLarge.mp4"
import NotFoundWallpaper from "../assets/notfound/NotFoundWallpaper.jpg"
const NotFound = () => {
  return (
    <>
      <NavBar />
      <main className="w-full ">
        <div className="flex relative  flex-col justify-start items-center h-[80vh] ">
          <div className="flex gap-10 flex-col w-[90%] mt-48 absolute z-[2] justify-center items-center bg-black/20 p-10 border border-white/30 border-[3px] rounded-lg  backdrop-blur-sm">
            <div>
              <h1 className="text-2xl font-bold text-center" >+ Dev Mnk +</h1>
              <h1 className="text-2xl font-bold text-center">404 Page Not Found</h1>
              <h2 className="text-2xl font-bold text-center">The site you are looking for does not exist yet.</h2>
              <h3 className="text-2xl font-bold text-center">Please check the Web URL and try again!</h3> 
            </div>
            <div>
              <Link to="/" className="flex rounded-full bg-black/50 px-3 py-2 hover:bg-white/50 hover:text-black">
                <p>Go Back to Home</p>
              </Link>
            </div>
          </div>
          <div className="flex w-full h-full " >
            <video className=" object-cover w-full h-full" src={NotFoundVideo} autoPlay loop muted ></video>
          </div>
        </div>
      </main>
      <Footer />
    </>
    
  );
}

export default NotFound;