import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import * as App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <HashRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/*" element={<App.NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  ,
)
