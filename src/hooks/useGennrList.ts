import useData from './useData';

export interface Geners{
         id:number,
        name:string,
        image_background:string
       
    }

export const useGennrList = () => useData<Geners>('/genres');
export default useGennrList;
