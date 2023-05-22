import axios, { AxiosRequestConfig } from "axios";

export  interface fetchDataRespone<T>{
        count:number;
        next : string|null;
        results:T[]
    }

const axiosInstant= axios.create({
     baseURL:"https://api.rawg.io/api",
    params:{
    key: "a2eb131a416b4d43bde0c4dd960f2852"
    }
})
class ApiClient<T>{

     endpoint : string;
     constructor(endpoint:string){
        this.endpoint =endpoint;
     }

     getAll = (config:AxiosRequestConfig) => {
      return  axiosInstant.get<fetchDataRespone<T>>(this.endpoint,config)
      .then(res=>res.data);
     }

     get=(id:number | string)=>{
        return axiosInstant.get<T>(this.endpoint + '/'+ id)
        .then(res=>res.data)
     }

}
export default ApiClient;