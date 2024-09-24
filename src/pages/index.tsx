import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Load } from "../components/loader";

export const redirectToAuth = () => {
    const nav = useNavigate();
    useEffect(()=>{
        nav("/auth/login")
    })
    return(
        <Load/>
    )
}