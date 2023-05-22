import React from 'react'
import { useQuery } from '@tanstack/react-query';
import ApiClient from '../assets/services/api-client';
import { Game } from "../entities/Game";


const api = new ApiClient<Game>('/games');
 const useGame = (slug:string) =>useQuery({
  queryKey:['games',slug],
  queryFn:()=> api.get(slug)
})
export default useGame;