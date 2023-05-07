import platform from '../data/platforms'
import { useQuery } from '@tanstack/react-query';
import ApiClient from '../assets/services/api-client';
import { fetchDataRespone } from "../assets/services/api-client";
import platforms from '../data/platforms';

const apiClient = new ApiClient<PlatformItem>('/plaforms/lists/parents');

export interface PlatformItem{
         id:number,
        name:string,
        slug:string
       
    }

export const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData:{count:platforms.length,results:platforms}
});
export default usePlatform;
