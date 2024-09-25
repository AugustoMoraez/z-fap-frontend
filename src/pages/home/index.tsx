import { useNavigate } from "react-router-dom"
import { Header } from "../../components/header"
import { useAppSelector } from "../../hooks/useAppSelector"
import { Container } from "./style"
import { useEffect } from "react"

export const Home = () => {
    const state = useAppSelector(state => state.user.CurrentUser );
    const nav = useNavigate()
    useEffect(()=>{
        if(!state)nav("/auth/login")
    })
    
    return(
       
        <Container>
            <Header/>
            <p>meu id {}</p>
            <p>meu nome é { } e ocupo o cargo de { }</p>
        </Container>
        
    )
}