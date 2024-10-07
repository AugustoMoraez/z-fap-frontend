import { useEffect, useState } from "react";
import { BaseApi } from "../libs/requests/axiosConfig";




export const useFetch = <T = unknown>(key:string) => {
    const[data,setData] = useState<T | null>(null);

    useEffect(()=>{
        BaseApi.get(key)
            .then((res) =>{
                setData(res.data)
            })

    },[])

    return {data}
}