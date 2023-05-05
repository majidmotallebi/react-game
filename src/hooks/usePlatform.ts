import platform from '../data/platforms'
import { useQuery } from '@tanstack/react-query';
import apiClient from '../assets/services/api-client';
import { fetchDataRespone } from "../assets/services/api-client";
import platforms from '../data/platforms';

export interface PlatformItem{
         id:number,
        name:string,
        slug:string
       
    }

export const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: ()=>apiClient
    .get<fetchDataRespone<PlatformItem>>('/plaforms/lists/parents').then(res=>res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData:{count:platforms.length,results:platforms}
});
export default usePlatform;
