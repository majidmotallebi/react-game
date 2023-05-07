import { fetchDataRespone } from "../assets/services/api-client";
import { gameQuery } from '../App';
import { useQuery } from '@tanstack/react-query';
import ApiClient from "../assets/services/api-client";
import { PlatformItem } from "./usePlatform";


const apiClient = new ApiClient<Game>('/games');

export interface Game{
        id:number,
        name:string,
        background_image:string,
        parent_platforms:{platform:PlatformItem}[],
        metacritic:number,
        rating_top:number,
    }
   
// const useGames=(gameQuery:gameQuery)=> useData<Game>('/games',
//         {params:
//             {genres:gameQuery.gener?.id,
//                 platforms:gameQuery.platform?.id,
//                 ordering:gameQuery.sortOrder,
//                 search:gameQuery.searchText
//             }},
//                 [gameQuery]
//                 );

const useGames=(gameQuery:gameQuery)=>useQuery<fetchDataRespone<Game>,Error>({
    queryKey:['games',gameQuery],
    queryFn: ()=>apiClient.getAll( 
        {params:
            {
                genres:gameQuery.gener?.id,
                parent_platforms:gameQuery.platform?.id,
                ordering:gameQuery.sortOrder,
                search:gameQuery.searchText
            },
           }), 

})
export default useGames;