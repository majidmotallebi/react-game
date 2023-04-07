import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../assets/services/api-client";

export interface Platform{
    id:number,
    name:string,
    slug:string
}


    interface fetchDataRespone<T>{
        count:number,
        results:T[]
    }
const useData=<T>(endpoint:string)=>{
    const [data,setData]= useState<T[]>([]);
    const [error,setError] = useState('');
    const [isLoading,setLoading] = useState(false);
   
    useEffect(()=>{
        setLoading(true);
        const controller = new AbortController();

        apiClient.get<fetchDataRespone<T>>(endpoint,{signal:controller.signal})
        .then(res=>{setData(res.data.results);
        setLoading(false)})
        .catch(err => { 
            if(err instanceof CanceledError ) return;
            setError(err.message)
            setLoading(false);
        })

        return ()=> controller.abort();
    },[])

    return {error,data,isLoading};

}

export default useData;