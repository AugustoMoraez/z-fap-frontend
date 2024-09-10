import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const redirectToAuth = () => {
    const nav = useNavigate();
    useEffect(()=>{
        nav("/auth/login")
    })
    return(
        <div>Carregando...</div>
    )
}