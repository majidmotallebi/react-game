import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import { GameGrid } from "./components/GameGrid"
import { GenerList } from "./components/GenerList"
import { NavBar } from "./components/NavBar"
import { useState } from 'react';
import { Geners } from "./hooks/useGennrList";
import { PlatformItem } from "./hooks/usePlatform";
import { Platform } from "./components/Platform";
import { SortSelector } from "./components/sortSelector";


 export interface gameQuery{
  gener:Geners|null;
  platform:PlatformItem|null;
  sortOrder:string;
}

function App() {


  // const [selectedGenre,setSelectedGenre]=useState<Geners|null>(null);
  // const [selectedPlarform,setSelectedPlatform]=useState<PlatformItem|null>(null)
  const [gameQuery,setGameQuery] = useState<gameQuery>({} as gameQuery);
  
  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "asid main"`

  }}
  templateColumns={{
    base: '1fr',
    lg:'200px 1fr'
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
      <Show above="lg">
        <GenerList selectedGenre={gameQuery.gener} onSelectGenre={(gener)=>setGameQuery({...gameQuery, gener})}/>
      </Show>
      <GridItem area="main">
        <Flex  paddingLeft={2} marginBottom={5}>
          <Box marginRight={2}>
           <Platform selectedPlarform={gameQuery.platform}  onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
          </Box>
          <SortSelector selectedOrder={gameQuery.sortOrder} onSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})} />
        </Flex>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>

  </Grid>
 
}


export default App
