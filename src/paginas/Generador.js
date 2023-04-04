import React, { useState } from "react";
import "../paginas/Generador.css";

const Characters = () => {
  const [character, setCharacter] = useState({
    id: "",
    name: "",
    gender: "",
    status: "",
    species: "",
    origin: "",
    type: "",
    location: "",
    image: "",
  });
  const [characterList, setCharacterList] = useState([]);
  var [listavacia, setlistavacia] = useState(0);
  var [idsObtenidos, setidsObtenidos] = useState([]);
  const [primeraConsulta, setPrimeraConsulta] = useState(true);

  const generateCharacter = () => {
    console.log("lista vacia " + listavacia);
    setPrimeraConsulta(false);
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        let randomIndex = Math.floor(Math.random() * data.results.length);
        if (idsObtenidos.includes(data.results[randomIndex].id)) {
          randomIndex++;
        }
        setidsObtenidos(idsObtenidos.concat(data.results[randomIndex].id));
        const randomCharacter = data.results[randomIndex];
        setCharacter({
          id: randomCharacter.id,
          name: randomCharacter.name,
          gender: randomCharacter.gender,
          status: randomCharacter.status,
          species: randomCharacter.species,
          origin: randomCharacter.origin.name,
          type: randomCharacter.type,
          location: randomCharacter.location.name,
          image: randomCharacter.image,
        });
      });
    setCharacterList(characterList.concat(character));
    setlistavacia(listavacia + 1);
  };

  return (
    <>
      <div className="mainCharacters">
        <div className="botondiv">
          <button onClick={generateCharacter}>Generate</button>
        </div>
        {primeraConsulta ? (
          <div className="Informacion">
            <h1 className="message">
               click a "Generate" para generar un personaje
              aleatorio
            </h1>
            
          </div>
        ) : (
            <div className="card border-succes mb-3 text-bg-dark mb-3" style={{width: '15rem'}}>
            <img src={character.image}class="card-img-top " alt="rick"/>
            <div className="card-body text-bg-dark mb-3">
              <h5 className="card-title text-bg-dark mb-3">{character.name}</h5>
              
            </div>
            <ul className="list-group list-group-flush text-bg-success mb-3">
            <li className="list-group-item text-bg-success mb-3">Id: {character.id}</li>
              <li className="list-group-item text-bg-success mb-3">Estado: {character.status}</li>
              <li className="list-group-item text-bg-success mb-3">Especie: {character.species}</li>
              <li className="list-group-item text-bg-success mb-3">Genero: {character.gender}</li>
              
            </ul>
            
          </div>
        )}
        
       
            
            
            
            
          
        </div>
      
    </>
  );
};

export default Characters;