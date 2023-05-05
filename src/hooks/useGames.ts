import { fetchDataRespone } from "../assets/services/api-client";
import { gameQuery } from '../App';
import { useQuery } from '@tanstack/react-query';
import apiClient from "../assets/services/api-client";

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
    queryFn:()=>apiClient
    .get<fetchDataRespone<Game>>('/games',
    {params:
            {genres:gameQuery.gener?.id,
                parent_platforms:gameQuery.platform?.id,
                ordering:gameQuery.sortOrder,
                search:gameQuery.searchText
            },}
                ).then(res=>res.data),
    staleTime:24*60*60*1000, //24h

})
export default useGames;