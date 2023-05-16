import platform from '../data/platforms'
import { useQuery } from '@tanstack/react-query';
import ApiClient from '../assets/services/api-client';
import { fetchDataRespone } from "../assets/services/api-client";
import platforms from '../data/platforms';
import ms from 'ms';


const apiClient = new ApiClient<PlatformItem>('/plaforms/lists/parents');

export interface PlatformItem{
         id:number,
        name:string,
        slug:string
       
    }

export const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData:{count:platforms.length,results:platforms,next:null}
});
export default usePlatform;
