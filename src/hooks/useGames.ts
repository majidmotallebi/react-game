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
        metacritic:number,
        rating_top:number,
    }
   
const useGames=(
    gameQuery:gameQuery)=> useData<Game>('/games',
        {params:
            {genres:gameQuery.gener?.id,
                platforms:gameQuery.platform?.id,
                ordering:gameQuery.sortOrder,
                search:gameQuery.searchText
            }},
                [gameQuery]
                );
export default useGames;