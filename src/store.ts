import { create } from "zustand";


  
  
  
  interface GameQuery{
  generId?:number;
  platformId?:number;
  sortOrder?:string;
  searchText?:string;
}

interface gameQuertStore{

    gameQuery:GameQuery;
    setSearchText:(searchText:string)=>void;
    setGenerId:(generId:number)=>void;
    setPlatformId:(platformId:number)=>void;
    setSortOrder:(sortOrder:string)=>void

}
const useGameQueryStore = create<gameQuertStore>(set=>({
    gameQuery:{},
  setSearchText: (searchText)=>set(()=>({gameQuery:{searchText}})),
  setGenerId:(generId)=>set(store=>({gameQuery:{...store.gameQuery,generId},})),
  setPlatformId:(platformId)=>set(store=>({gameQuery:{...store.gameQuery,platformId},})),
  setSortOrder:(sortOrder)=>set(store=>({gameQuery:{...store.gameQuery,sortOrder},}))
}))

export default useGameQueryStore;