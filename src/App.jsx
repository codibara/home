import './index.css'

import { Routes, Route } from "react-router-dom";

import Home from './views/Home/Home.jsx'
import Footer from './shared/Footer/Footer.jsx'
import Policy from './views/Policy/Policy.jsx';



export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </>
  )
}
