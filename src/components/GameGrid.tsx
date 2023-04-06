
import useGames from '../hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameCards } from './GameCards';
import { GameCardSkeleton } from './GameCardSkeleton';

export const GameGrid = () => {

  const{error,games,isLoading} = useGames();
   const skeletons = [1,2,3,4,5,6];
  
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}}  padding='10px'  spacing={10}  >
      {isLoading && skeletons.map((selecton)=><GameCardSkeleton key={selecton}/>)}
        {games.map((game) =>
         (<GameCards key={game.id} game={game} />))}
    </SimpleGrid>
    </>
  )
}
