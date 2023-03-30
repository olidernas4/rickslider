import React from 'react'
import Carousel from '../components/Carousel'

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <div className='container mb-5'>
        <h1 className='text-black p-2 bg-green'>RICK AND MORTY</h1>
        <figure>
          <blockquote className='blockquote'>
         <p className='text-center mt-3'>
            Richard «Rick» Sánchez2​ es uno de los dos protagonistas homónimos de la serie de televisión animada de Adult Swim, Rick y Morty. Creado por Justin Roiland y Dan Harmon, Sánchez es un científico alcohólico misántropo conocido por su comportamiento temerario, nihilista y su personalidad pesimista, el personaje ha sido bien recibido. Es un científico loco sociopático que parece conocer todo en el universo y por lo tanto encuentra la vida una experiencia traumática y sin sentido. Sin embargo, a pesar de asumir que es la persona más inteligente del universo, ha habido momentos en los que se ha equivocado. El desarrollo del personaje fue inspirado en Emmett «Doc» Brown de Back to the Future y por el Sr. Fantástico de Marvel Comics.
            El Consejo transdimensional de Ricks se refiere formalmente a él como Rick Sánchez C-137, en referencia a «C-137», su universo original. Tanto Rick como Morty tienen la voz de Roiland. El volumen 1 de la serie de cómics de Rick y Morty sigue a los protagonistas de la dimensión C-132, mientras que la mayoría de los episodios de las siguientes entregas siguen a Rick y Morty de «C-137»; el videojuego Pocket Mortys sigue a Rick y Morty de C-123.3​
        </p>
          </blockquote>
          <figcaption className='blockquote-footer'> informacion</figcaption>
        </figure>

        <h2 className='bg-green text-black mb-5'> TRAILER</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kkEdpbznHAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



      </div>
      
      </div>
  )
}

export default Inicio