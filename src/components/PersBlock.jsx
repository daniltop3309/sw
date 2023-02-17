import React from 'react'

function PersBlock({ pers }) {

 return (
    <div>
        <div className='block'>
        <p>Имя:{pers.name}</p>
        <p>Пол:{pers.gender}</p>
        <p>Рост:{pers.height}см</p> 
        <p>Год рождения:{pers.birth_year}</p>
        </div>    
    </div>
  )
}

export default PersBlock