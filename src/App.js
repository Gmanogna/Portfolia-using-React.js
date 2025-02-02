import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/project' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
          
      </Routes>
    </div>
  );
}

export default App;
