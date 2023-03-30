import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from '../src/navegacion/Navbar'
import Episodio from './paginas/Episodio'
import Inicio from './paginas/Inicio'
import Personaje from './paginas/Personaje'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='./Personaje' element={<Personaje/>}/>
          <Route path='./Episodio' element={<Episodio/>}/>
        </Routes>


      </Router>
     
    </div>
  );
}

export default App;
