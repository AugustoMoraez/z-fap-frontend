import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAppSelector } from "../../hooks/useAppSelector";
import { Container } from "./style";
import { Header } from "../../components/header";


export const redirectToAuth = () => {
    const user = useAppSelector(state => state.user.CurrentUser)
    const nav = useNavigate();
    useEffect(()=>{
        if(!user){
            nav("/auth/login")
        }
    })
    return(
        <Container>
            <Header/>
            home
        </Container>
    )      
}