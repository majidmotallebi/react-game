import { Card, CardBody, Heading, Image,Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import { PlatformListIcons } from './PlatformListIcons'


interface Props{
    game:Game

}
export const GameCards = ({game}:Props) => {
  return (
         <Card borderRadius={10} fontSize='2xl' overflow='hidden'>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading>
                    {game.name}

                    <PlatformListIcons platform={game.parent_platforms.map(p=>p.platform)} />
                </Heading>
            </CardBody>
         </Card>
  )
}
