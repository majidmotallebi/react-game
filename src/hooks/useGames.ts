import { fetchDataRespone } from "../assets/services/api-client";
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import ApiClient from "../assets/services/api-client";
import { PlatformItem } from "./usePlatform";
import useGameQueryStore from '../store';


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

const useGames=()=>{

     const gameQuery =useGameQueryStore(s=>s.gameQuery)
   return useInfiniteQuery<fetchDataRespone<Game>,Error>({
        queryKey:['games',gameQuery],
        queryFn: ({pageParam = 1})=>apiClient.getAll( 
            {params:
                {
                    genres:gameQuery.generId,
                    parent_platforms:gameQuery.platformId,
                    ordering:gameQuery.sortOrder,
                    search:gameQuery.searchText,
                    page:pageParam
                },
            }), 
            getNextPageParam:(lastPage,allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined;
            },
            staleTime:24*60*60*1000

})
}
  
export default useGames;