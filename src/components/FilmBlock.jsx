import React from 'react'

function FilmBlock({film}) {
  return (
        <div className='film block'>
        <p>Название:{film.title}</p>
        <p>Дата выхода:{film.release_date}</p> 
        <p>Режиссер:{film.director}</p>
        <p>Продюсеры:{film.producer}</p>
        </div>                               
    
  )
}

export default FilmBlock