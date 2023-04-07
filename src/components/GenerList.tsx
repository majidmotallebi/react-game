import React from 'react'
import useData from '../hooks/useData';
import { Geners, useGennrList } from '../hooks/useGennrList';



export const GenerList = () => {

    const {error,data }= useGennrList();
    
  return (
    <>
    <ul>
        {data.map((gener)=><li key={gener.id}>{gener.name}</li>)}
    </ul>
    </>
  )
}
