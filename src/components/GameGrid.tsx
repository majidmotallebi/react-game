
import useGames from '../hooks/useGames';
import { Box, Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { GameCards } from './GameCards';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContiner } from './GameCardContiner';
import { gameQuery } from '../App';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props{
  gameQuery:gameQuery
  
}

export const GameGrid = ({gameQuery}:Props) => {

  const{error,data,isLoading,isFetchingNextPage,fetchNextPage,hasNextPage} = useGames(gameQuery);
   const skeletons = [1,2,3,4,5,6];

   if(error) return <Text>{error.message}</Text>

   const fetchGameCount = data?.pages.reduce((total,page)=> total+ page.results.length,0) || 0;
  
  return (
    // <Box padding='10px'>
      <InfiniteScroll dataLength={fetchGameCount}
       hasMore={!!hasNextPage}
        next={()=>fetchNextPage()}
        loader={<Spinner/>}>
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding='10px'   spacing={6}  >
          {isLoading && skeletons.map((selecton)=>
        (<GameCardContiner  key={selecton}>
            <GameCardSkeleton/>
          </GameCardContiner> 
          ))}

          {data?.pages.map((page,index) =>
          <React.Fragment key={index}>
            {page?.results.map((game) =>
            (
                <GameCardContiner key={game.id}>
                  <GameCards  game={game} />
                </GameCardContiner>
                
                ))}
          </React.Fragment>
          )}
        </SimpleGrid>
       </InfiniteScroll>
    // {/* {<Button onClick={()=>fetchNextPage()} marginY={5}>
    //    {isFetchingNextPage ? 'Loading...':'Load More'}
    //    </Button>} */}
    // {/* </Box> */}

  
  )
}
