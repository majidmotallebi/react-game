import useData from './useData';

export interface Geners{
     id:number,
        name:string,
       
    }
 

export const useGennrList = () => useData<Geners>('/genres');
export default useGennrList;
