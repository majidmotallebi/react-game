import React from 'react'
import { gameQuery } from '../App';
import { Heading } from '@chakra-ui/react';

interface Props{
    gameQuery:gameQuery;
}

export const GameHeading = ({gameQuery}:Props) => {
    const heding = `${gameQuery.platform?.name ||''} ${gameQuery.gener?.name ||''} Games` 
  return (
    <Heading marginY={5} fontSize='5xl' as='h1'> 
              {heding}
    </Heading> 
  )
}
