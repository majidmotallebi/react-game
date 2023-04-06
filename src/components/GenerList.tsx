import React from 'react'
import { useGennrList } from '../hooks/useGennrList';



export const GenerList = () => {

    const {error,geners }= useGennrList();
    
  return (
    <>
    <ul>
        {geners.map((gener)=><li key={gener.id}>{gener.name}</li>)}
    </ul>
    </>
  )
}
