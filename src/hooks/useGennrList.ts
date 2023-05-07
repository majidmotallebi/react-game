import { useQuery } from '@tanstack/react-query';
import ApiClient from '../assets/services/api-client';
import genres from '../data/genres'


const apiClient = new ApiClient<Geners>('/genres');

export interface Geners{
         id:number,
        name:string,
        image_background:string
       
    }

export const useGennrList = () => useQuery({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime:24*60*60*1000, //24h
    initialData:{count:genres.length,results:genres}
});
export default useGennrList;
