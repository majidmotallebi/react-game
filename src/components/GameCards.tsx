import { Card, CardBody, Heading, HStack, Image,Text } from '@chakra-ui/react'
import { Game } from "../entities/Game";
import { PlatformListIcons } from './PlatformListIcons'
import getImageCroppedUrl from '../assets/services/image-url';
import { Emoji } from './Emoji';
import { Metacritic } from './Metacritic';
import { Link } from 'react-router-dom';
import { transform } from 'framer-motion';


interface Props{
    game:Game

}
export const GameCards = ({game}:Props) => {

  
  return (

   
         <Card >
            <Image src={ getImageCroppedUrl(game.background_image) }/>
            <CardBody>
                
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformListIcons platform={game.parent_platforms.map(p=>p.platform)} />
                    <Metacritic metacritic={game.metacritic} />
                </HStack>
                    
               <Heading fontSize='2xl'>

                 <Link to={'/games/' + game.slug}>{game.name} </Link>   
                    
                    <Emoji rating={game.rating_top}/> </Heading>
            </CardBody>
         </Card>
  )
}
