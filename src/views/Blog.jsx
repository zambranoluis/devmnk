import NavBarBlog from "../components/NavBarBlog"
import Footer from "../components/Footer"

import { useEffect, useRef } from 'react';
// import {animate} from '../assets/js/Blog'

import DarkNatureBackground from "../assets/blog/DarkNatureBackground.jpg"
import WhiteForestBackgroundPic from "../assets/blog/WhiteForestBackground.jpg"
import WhiteForestBackgroundVid from "../assets/blog/WhiteForestBackground.mp4"

const Blog = () => {
  
  return (
    <>
      <NavBarBlog />

      <main className="min-w-screen min-h-screen bg-cover bg-no-repeat "  style={{ backgroundImage: `url(${WhiteForestBackgroundPic})` }} >
        <div className="w-[90vw] h-[90vh] bg-white/40 backdrop-blur-sm">
          {/* <h1>Title</h1> */}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Blog;