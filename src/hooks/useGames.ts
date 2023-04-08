import useData from "./useData";
import { Geners } from './useGennrList';
import { PlatformItem } from './usePlatform';

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
    selectedGenre:Geners | null,
    selectedPlarform:PlatformItem|null)=> useData<Game>('/games',
        {params:
            {genres:selectedGenre?.id,
                platforms:selectedPlarform?.id}},
                [selectedGenre?.id,selectedPlarform?.id]
                );
export default useGames;