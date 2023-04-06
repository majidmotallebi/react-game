import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../assets/services/api-client';

export const useGennrList = () => {
    interface Geners{
     id:number,
        name:string,
       
    }
    interface fetchGenersRespone{
        count:number,
        results:Geners[]
    }

    const [geners,setGeners]= useState<Geners[]>([]);
    const [error,setError] = useState('');
    const [isLoading,setLoading] = useState(false);
   
    useEffect(()=>{
        setLoading(true);
        const controller = new AbortController();

        apiClient.get<fetchGenersRespone>("/genres",{signal:controller.signal})
        .then(res=>{setGeners(res.data.results);
        setLoading(false)})
        .catch(err => { 
            if(err instanceof CanceledError ) return;
            setError(err.message)
            setLoading(false);
        })

        return ()=> controller.abort();
    },[])

    return {error,geners,isLoading};

}
export default useGennrList;
