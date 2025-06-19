import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Chatbot from "./components/Chatbot.jsx"
import Footer from "./components/Footer.jsx"
function App() {
  return (
    <>
      <div className="pt-22">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pricing" element={<div>Pricing Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/demo" element={<div>Book a Demo Page</div>} />
        </Routes>
        <Chatbot />
        <Footer/>
      </div>
    </>
  )
}

export default App
