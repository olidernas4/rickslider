import React from 'react'
import {Link} from 'react-router-dom'
import Logor from  '../assets/logorick.png'

const Footer = () => {
  return (
    <div>
      <footer className='text-white py-4 bg-dark'>
        <div className='container'>
          <nav className='row'>
            <Link to='/' className='col-12 col-md-3 d-flex align-items-center justyfy-content-center'>
            <img src= {Logor} className='mx-2' height= '60'/>
            </Link>
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='font-weight-bold mb-2 '> <h3>Rick and Morty</h3></li>
              <li className='text-center'>Encontraras todo sobre rick and morty</li>
            </ul>
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='font-weight-bold mb-2'> paginas</li>
              <li> 
                <Link to ='/Personaje'>Personaje</Link>
              </li>
              
            </ul>
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='font-weight-bold mb-2'> ME PUEDEN SEGUIR</li>
              <li className='d-flex justify-content-between'>
              <a href="#"><i class="bi bi-facebook"></i></a>
                <li className='bi bi-instagram'/>
                <a href="https://github.com/olidernas4"><i class="bi bi-github"></i></a>

                
              </li>
            </ul>
            <div className='container'>
              <p className='text-center '>Hecho por Andres Olider Narvaez</p>
            </div>

          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer


/*430 */



