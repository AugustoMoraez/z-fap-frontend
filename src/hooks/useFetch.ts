import axios from "axios";
import { useEffect, useState } from "react";



export const url = "https://z-fap.onrender.com";

export const useFetch = <T = unknown>(key:string) => {
    const[data,setData] = useState<T | null>(null);

    useEffect(()=>{
        axios.get(url+key)
            .then((res) =>{
                setData(res.data)
            })

    },[])

    return {data}
}