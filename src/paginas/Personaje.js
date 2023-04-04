
import React, {useState} from 'react'
import { UseFetch } from '../Hooks/UseFetch'
import {Cards} from '../Hooks/Card'
import '../paginas/Personaje.css'

const Personaje = () => {
  const [url,setUrl]=useState('https://rickandmortyapi.com/api/character')
  const estado= UseFetch(url)
  const {cargando,data}=estado
  

  
  
  
  
  return (
    <div className='espacio'>
     {
      cargando
      ?<h1>Cargando</h1>
      :
      <div>
        <Cards results={data.results}/>
       <div className='container m-auto'>
         <button onClick={()=>setUrl(data.prev)} className='m-2 btn btn-dark'>Anterior</button>
         <button onClick={()=>setUrl(data.next)} className='m-2 btn btn-dark'>Siguiente</button>
         



        </div>
      </div>

      
    }
    
    
    
    </div>
  )
}

export default Personaje