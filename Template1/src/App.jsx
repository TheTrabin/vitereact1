import { React } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css'

//page imports
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Layout from './component/sidebar.jsx';

function App() {
  return (
    <div className="App">
      <></>
      <Router>
        <Routes> 
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
        </Routes>
      </Router>


      <div className="footer">
        <p>This Vite app was created by &quot;TheTrabin&quot;</p>
      </div>

    </div>
  )
}


export default App;
