import genres from '../data/genres'

export interface Geners{
         id:number,
        name:string,
        image_background:string
       
    }

export const useGennrList = () => ({data:genres,isLoading:false,error:null});
export default useGennrList;
