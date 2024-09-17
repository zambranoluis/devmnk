import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import * as App from './App.jsx'

import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <HashRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/*" element={<App.NotFound />} />
        <Route path="/" element={<App.Home />} />
        <Route path="/blog" element={<App.Blog />} />
        <Route path="/contacto" element={<App.Contacto />} />
        <Route path="/proyectos" element={<App.Proyectos />} />
        <Route path="/productos" element={<App.Productos />} />
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  ,
)
