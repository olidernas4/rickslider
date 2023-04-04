import React from "react";
import {UseFetch} from '../Hooks/UseFetch'

export const Cardrick =({url})=>{
  const estado=UseFetch(url)
  const {cargando,data}=estado

  return(<div>
    {
      cargando
      ?
      <h1>Cargando</h1>
      :
      <div className="card border-succes mb-3 text-bg-dark mb-3" style={{width: '15rem'}}>
  <img src={data.image}class="card-img-top " alt="rick"/>
  <div className="card-body text-bg-dark mb-3">
    <h5 className="card-title text-bg-dark mb-3">{data.name}</h5>
    
  </div>
  <ul className="list-group list-group-flush text-bg-success mb-3">
  <li className="list-group-item text-bg-success mb-3">Id: {data.id}</li>
    <li className="list-group-item text-bg-success mb-3">Estado: {data.status}</li>
    <li className="list-group-item text-bg-success mb-3">Especie: {data.species}</li>
    <li className="list-group-item text-bg-success mb-3">Genero: {data.gender}</li>
    <li className="list-group-item text-bg-success mb-3">Episodio: {data.episode.length}</li>
  </ul>
  
</div>
    }
  </div>)
}

export default Cardrick