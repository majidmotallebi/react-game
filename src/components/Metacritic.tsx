import { Badge } from '@chakra-ui/react'


 interface Props{
     metacritic:number
}

export const Metacritic = ({metacritic}: Props ) => {

    let color = metacritic > 75 ? 'green' : metacritic > 60 ? 'yellow' : '';
    console.log(color);
  return (
         <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='10px'>{metacritic}</Badge>
  )
}
