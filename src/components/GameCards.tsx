import { Card, CardBody, Heading, HStack, Image,Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import { Metacritic } from './metacritic'
import { PlatformListIcons } from './PlatformListIcons'
import getImageCroppedUrl from '../assets/services/image-url';


interface Props{
    game:Game

}
export const GameCards = ({game}:Props) => {

  
  return (

   
         <Card width='300px' borderRadius={10} overflow='hidden'>
            <Image src={ getImageCroppedUrl(game.background_image) }/>
            <CardBody>
                <Heading fontSize='2xl'>
                    {game.name}
                <HStack justifyContent='space-between'>
                    <PlatformListIcons platform={game.parent_platforms.map(p=>p.platform)} />
                    <Metacritic metacritic={game.metacritic} />
                </HStack>
                    
                </Heading>
            </CardBody>
         </Card>
  )
}
