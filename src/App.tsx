import { Grid, GridItem, Show } from "@chakra-ui/react"
import { GameGrid } from "./components/GameGrid"
import { GenerList } from "./components/GenerList"
import { NavBar } from "./components/NavBar"
import { useState } from 'react';
import { Geners } from "./hooks/useGennrList";





function App() {


  const [selectedGenre,setSelectedGenre]=useState<Geners|null>(null);
  const [selectedPlarform,setSelectedPlatform]=useState<PlatformItem|null>(null)
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
        <GenerList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
      </Show>
      <GridItem area="main">
        <Platform selectedPlarform={selectedPlarform}  onSelectedPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <GameGrid selectedGenre={selectedGenre} selectedPlarform={selectedPlarform}/>
      </GridItem>

  </Grid>
 
}
import { PlatformItem } from "./hooks/usePlatform";
import { Platform } from "./components/Platform";

export default App
