import { Heading, Spinner, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom';
import DefinitionItem from '../components/DefinitionItem';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import { Metacritic } from '../components/Metacritic';
import useGame from '../hooks/useGame';

 const GameDetailPage = () => {

    const {slug}= useParams();
     const {data:game,isLoading,error} = useGame(slug!);
 
     if(isLoading) return <Spinner />

     if(error || !game) throw error;
  return (
     <>
     <Heading>{game.name}</Heading>
    <ExpandableText>{game.description_raw}</ExpandableText>
     <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id}/>
    </>
   
  )
}
export default GameDetailPage;