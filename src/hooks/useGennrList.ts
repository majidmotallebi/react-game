import { useQuery } from '@tanstack/react-query';
import apiClient from '../assets/services/api-client';
import genres from '../data/genres'
import { fetchDataRespone } from "../assets/services/api-client";


export interface Geners{
         id:number,
        name:string,
        image_background:string
       
    }

export const useGennrList = () => useQuery({
    queryKey:['genres'],
    queryFn:()=>apiClient
    .get<fetchDataRespone<Geners>>('/genres').then(res=>res.data),
    staleTime:24*60*60*1000, //24h
    initialData:{count:genres.length,results:genres}
});
export default useGennrList;
