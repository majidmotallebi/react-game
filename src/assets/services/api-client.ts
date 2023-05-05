import axios from "axios";

export  interface fetchDataRespone<T>{
        count:number,
        results:T[]
    }

export default axios.create({
     baseURL:"https://api.rawg.io/api",
    params:{
    key: "a2eb131a416b4d43bde0c4dd960f2852"
    }
})