import React from 'react'
import { gameQuery } from '../App';
import { Heading } from '@chakra-ui/react';
import useGennrList from '../hooks/useGennrList';
import { Platform } from './Platform';
import usePlatform from '../hooks/usePlatform';

interface Props{
    gameQuery:gameQuery;
}

export const GameHeading = ({gameQuery}:Props) => {
const {data:genres} = useGennrList();
const genre = genres?.results.find(g=>g.id === gameQuery.generId);

const {data:platforms} = usePlatform();
const platform = platforms?.results.find(g=>g.id === gameQuery.platformId);

    const heding = `${platform?.name ||''} ${genre?.name ||''} Games` 
  return (
    <Heading marginY={5} fontSize='5xl' as='h1'> 
              {heding}
    </Heading> 
  )
}
