import useData from './useData';

export interface PlatformItem{
         id:number,
        name:string,
        slug:string
       
    }

export const usePlatform = () => useData<PlatformItem>('/platforms/lists/parents');
export default usePlatform;
