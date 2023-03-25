import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {

  return (

    <Router>
    <Navbar/>
    <Routes>
      <Route path="/"  element={<Home />}/>

      <Route path="/about" element={<About />}/>

      <Route path="/projects" element={<Projects/>}/>

      <Route path="/contact" element={<Contact />}/> 

    </Routes> 

    <Footer/>
    </Router>
  )
}

export default App;