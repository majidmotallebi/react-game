import useData from "./useData";
import { Geners } from './useGennrList';
import { PlatformItem } from './usePlatform';
import { gameQuery } from '../App';

export interface Platform{
    id:number,
    name:string,
    slug:string
}

export interface Game{
        id:number,
        name:string,
        background_image:string,
        parent_platforms:{platform:Platform}[],
        metacritic:number
    }
   
const useGames=(
    gameQuery:gameQuery)=> useData<Game>('/games',
        {params:
            {genres:gameQuery.gener?.id,
                platforms:gameQuery.platform?.id}},
                [gameQuery]
                );
export default useGames;