import platform from '../data/platforms'

export interface PlatformItem{
         id:number,
        name:string,
        slug:string
       
    }

export const usePlatform = () => ({data:platform,isLoading:false,error:null});
export default usePlatform;
