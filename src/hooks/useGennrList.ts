import { useQuery } from '@tanstack/react-query';
import ApiClient from '../assets/services/api-client';
import genres from '../data/genres'
import ms from 'ms';
import  Geners  from '../entities/Geners';


const apiClient = new ApiClient<Geners>('/genres');

export const useGennrList = () => useQuery({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime:ms('24h'), //24h
    initialData:{count:genres.length,results:genres,next:null}
});
export default useGennrList;
