import { useNavigate } from "react-router-dom"
import { Header } from "../../components/header"
import { useAppSelector } from "../../hooks/useAppSelector"
import { Container } from "./style"
import { useEffect } from "react"

export const Setup = () => {
    const user = useAppSelector(state => state.user.CurrentUser?.data );
    const nav = useNavigate()
    useEffect(()=>{
        if(!user)nav("/auth/login")
    })
    
    return(
       
        <Container>
            <Header/>
            <p>meu nome é { user?.name} e ocupo o cargo de { user?.position}</p>
        </Container>
        
    )
}