import meh from '../assets/meh.webp'
import thumbs from '../assets/thumbs-up.webp'
import bulls from '../assets/bulls-eye.webp'
import { Image, ImageProps } from '@chakra-ui/react'

interface Porps{
    rating : number
}

export const Emoji = ({rating}:Porps) => {
    if(rating <3) return null;
    const emojiMap :{[key:number] : ImageProps} ={
        3:{src:meh,alt:'meh',boxSize:'25px'},
        4:{src:thumbs,alt:'recommended', boxSize:'25px'},
        5:{src:bulls,alt:'exceptial',boxSize:'35px'}
    }
  return (
  

       <Image {...emojiMap[rating]} marginTop={1}/>
  )
}
