import './App.css'
import {Routes, Route, useLocation} from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar></Navbar>
      <AnimatePresence mode="wait">
        <Routes location = {location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home></Home></PageWrapper>}></Route>
          <Route path="/about" element={<PageWrapper><About></About></PageWrapper>}></Route>
          <Route path="/projects" element={<PageWrapper><Projects></Projects></PageWrapper>}></Route>
          <Route path="/contact" element={<PageWrapper><Contact></Contact></PageWrapper>}></Route>
        </Routes>
      </AnimatePresence>
      <Footer></Footer>
    </>
  );
}

function PageWrapper({children} : {children : React.ReactNode}) {
  return(
    <motion.div initial= {{opacity: 0, y: 15}} animate={{opacity: 1, y:0}} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="min-h-screen">
      {children}
    </motion.div>
  );
}

export default App
