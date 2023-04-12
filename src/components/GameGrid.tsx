
import useGames from '../hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameCards } from './GameCards';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContiner } from './GameCardContiner';
import { Geners } from '../hooks/useGennrList';
import { PlatformItem } from '../hooks/usePlatform';
import { gameQuery } from '../App';

interface Props{
  gameQuery:gameQuery
  
}

export const GameGrid = ({gameQuery}:Props) => {

  const{error,data,isLoading} = useGames(gameQuery);
   const skeletons = [1,2,3,4,5,6];

   if(error) return <Text>{error}</Text>
  
  return (
    
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}}  padding='10px'  spacing={6}  >
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
  
  )
}
