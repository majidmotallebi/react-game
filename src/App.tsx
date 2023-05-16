import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import { GameGrid } from "./components/GameGrid"
import { GenerList } from "./components/GenerList"
import { NavBar } from "./components/NavBar"
import { Platform } from "./components/Platform";

import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";






function App() {
  
  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "asid main"`

  }}
  templateColumns={{
    base: '1fr',
    lg:'200px 1fr'
  }}>
    <GridItem area="nav">
      <NavBar/>
    </GridItem>
      <Show above="lg">
        <GenerList/>
      </Show>
      <GridItem area="main">

        <Box paddingLeft={2}>
            <GameHeading/>
            <Flex  marginBottom={5}>
              <Box marginRight={2}>
              <Platform />
              </Box>
              <SortSelector />
            </Flex>
        </Box>
       
        <GameGrid/>
      </GridItem>

  </Grid>
 
}


export default App
