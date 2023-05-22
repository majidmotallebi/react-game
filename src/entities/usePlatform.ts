import platform from '../data/platforms'
import { useQuery } from '@tanstack/react-query';
import ApiClient from '../assets/services/api-client';
import { fetchDataRespone } from "../assets/services/api-client";
import platforms from '../data/platforms';
import ms from 'ms';
import { PlatformItem } from '../hooks/PlatformItem';


const apiClient = new ApiClient<PlatformItem>('/plaforms/lists/parents');

export const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData:{count:platforms.length,results:platforms,next:null}
});
export default usePlatform;
