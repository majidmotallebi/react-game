import { Heading } from '@chakra-ui/react';
import useGennrList from '../hooks/useGennrList';
import usePlatform from '../entities/usePlatform';
import useGameQueryStore from '../store';



export const GameHeading = () => {
const {data:genres} = useGennrList();


  const generId = useGameQueryStore(s=>s.gameQuery.generId);
  const genre = genres?.results.find(g=>g.id === generId);
  
  const platformId = useGameQueryStore(s=>s.gameQuery.platformId);



const {data:platforms} = usePlatform();
const platform = platforms?.results.find(g=>g.id === platformId);

    const heding = `${platform?.name ||''} ${genre?.name ||''} Games` 
  return (
    <Heading marginY={5} fontSize='5xl' as='h1'> 
              {heding}
    </Heading> 
  )
}
