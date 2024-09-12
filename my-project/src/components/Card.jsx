import React from 'react'
import movieData from '../api/dataapi.json'
import Movieinfo from './Movieinfo'

export const Card=()=> {
  return (
   <ul className='grid grid-three-col'>
    {movieData.map((myData,i)=><Movieinfo data={myData} key={myData.id}/>
    )}
   </ul>
  )
}

