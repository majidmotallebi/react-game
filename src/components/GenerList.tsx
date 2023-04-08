import { Button, HStack, List, ListItem, Spinner } from '@chakra-ui/react';
import React from 'react'
import useData from '../hooks/useData';
import { Geners, useGennrList } from '../hooks/useGennrList';
import { Image ,Text} from '@chakra-ui/react';
import getImageCroppedUrl from '../assets/services/image-url';

interface Props{
  onSelectGenre : (genre:Geners) => void
}



export const GenerList = ({onSelectGenre}:Props) => {

    const {error,data,isLoading }= useGennrList();

    if(error) return null;

    if(isLoading) return <Spinner/>
    
  return (
    <>
    <List paddingY={4} paddingX={2}>
        {data.map((gener)=><ListItem key={gener.id}>
          <HStack>
           <Image boxSize='30px' borderRadius='8px' src={getImageCroppedUrl(gener.image_background)} />
            <Button fontSize='lg' onClick={()=>onSelectGenre(gener)} variant='link'>{gener.name}</Button>
          </HStack>
          </ListItem>)}
    </List>
    </>
  )
}
