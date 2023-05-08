import { Button, Heading, HStack, List, ListItem, Spinner } from '@chakra-ui/react';
import { Geners, useGennrList } from '../hooks/useGennrList';
import { Image} from '@chakra-ui/react';
import getImageCroppedUrl from '../assets/services/image-url';

interface Props{
  onSelectGenre : (genre:Geners) => void,
  selectedGenreId?:number
}



export const GenerList = ({selectedGenreId,onSelectGenre}:Props) => {

    const {error,data,isLoading }= useGennrList();

    if(error) return null;

    if(isLoading) return <Spinner/>
    
  return (
    <>
      {/* <Heading fontSize='2xl' marginBottom={3}>Geners</Heading> */}
    <List paddingY={4} paddingX={2}>
        {data?.results.map((gener)=><ListItem key={gener.id}>
          <HStack>
           <Image objectFit='cover' marginY={1} boxSize='30px' borderRadius='8px' src={getImageCroppedUrl(gener.image_background)} />
            <Button textAlign='left' whiteSpace='normal' fontSize='lg' fontWeight={gener.id === selectedGenreId ? 'bold':'normal'} onClick={()=>onSelectGenre(gener)} variant='link'>{gener.name}</Button>
          </HStack>
          </ListItem>)}
    </List>
    </>
  )
}
