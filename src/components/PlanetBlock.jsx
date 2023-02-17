import React from 'react'


function PlanetBlock({ planet }) {

 return (
    <div>
        <div className='block'>
        <p>Название:{planet.name}</p>
        <p>Диаметр:{planet.diameter}</p> 
        <p>Население:{planet.population} особей</p>
        <p>Поверхность:{planet.terrain}</p>
        </div>    
    </div>
  )
}

export default PlanetBlock