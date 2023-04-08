
import useGames from '../hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameCards } from './GameCards';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContiner } from './GameCardContiner';
import { Geners } from '../hooks/useGennrList';

interface Props{
  selectedGenre:Geners|null
}

export const GameGrid = ({selectedGenre}:Props) => {

  const{error,data,isLoading} = useGames(selectedGenre);
   const skeletons = [1,2,3,4,5,6];
  
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}}  padding='10px'  spacing={3}  >
      {isLoading && skeletons.map((selecton)=>
     (<GameCardContiner  key={selecton}>
         <GameCardSkeleton/>
      </GameCardContiner> 
      ))}
        {data.map((game) =>
         (
        <GameCardContiner key={game.id}>
          <GameCards  game={game} />
         </GameCardContiner>
         
         ))}
    </SimpleGrid>
    </>
  )
}
