import { Card, CardBody, Heading, HStack, Image,Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import { PlatformListIcons } from './PlatformListIcons'
import getImageCroppedUrl from '../assets/services/image-url';
import { Emoji } from './Emoji';
import { Metacritic } from './Metacritic';


interface Props{
    game:Game

}
export const GameCards = ({game}:Props) => {

  
  return (

   
         <Card>
            <Image src={ getImageCroppedUrl(game.background_image) }/>
            <CardBody>
                
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformListIcons platform={game.parent_platforms.map(p=>p.platform)} />
                    <Metacritic metacritic={game.metacritic} />
                </HStack>
                    
               <Heading fontSize='2xl'>
                    {game.name} <Emoji rating={game.rating_top}/> </Heading>
            </CardBody>
         </Card>
  )
}
