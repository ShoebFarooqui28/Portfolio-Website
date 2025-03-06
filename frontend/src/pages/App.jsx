import '../styles/App.css'
import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
