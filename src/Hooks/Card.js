import React from 'react'
import { Cardrick } from '../Hooks/Cardclass'
import '../Hooks/CARDS.css'
import '../paginas/Personaje'
export const Cards = ({results}) => {
  return (
    <div className='container'> 
    <ul className='cards'>
        {
            results.map(p=>(
                <li className='card-item' key={p.name}>
                    <Cardrick url={p.url}/>
                </li>
            ))
        }
    </ul>
    
    
    
    </div>
  )
}

export default Cards