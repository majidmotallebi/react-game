import { Grid, GridItem, Show } from "@chakra-ui/react"
import { GameGrid } from "./components/GameGrid"
import { GenerList } from "./components/GenerList"
import { NavBar } from "./components/NavBar"


function App() {

  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "asid main"`
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
      <Show above="lg">
        <GenerList/>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>

  </Grid>
 
}

export default App
