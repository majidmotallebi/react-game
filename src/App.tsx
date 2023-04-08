import { Grid, GridItem, Show } from "@chakra-ui/react"
import { GameGrid } from "./components/GameGrid"
import { GenerList } from "./components/GenerList"
import { NavBar } from "./components/NavBar"
import { useState } from 'react';
import { Geners } from "./hooks/useGennrList";


function App() {


  const [selectedGenre,setSelectedGenre]=useState<Geners|null>(null)
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
       

        
        <GenerList onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
       
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>

  </Grid>
 
}

export default App
