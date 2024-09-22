import axios from "axios";
import { useEffect, useState } from "react";



export const url_base = "https://z-fap.onrender.com";

export const useFetch = <T = unknown>(key:string) => {
    const[data,setData] = useState<T | null>(null);

    useEffect(()=>{
        axios.get(url_base+key)
            .then((res) =>{
                setData(res.data)
            })

    },[])

    return {data}
}