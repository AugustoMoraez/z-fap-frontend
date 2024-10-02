import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAppSelector } from "../../hooks/useAppSelector";
import { Container } from "./style";


export const Home = () => {
    const user = useAppSelector(state => state.user.CurrentUser)
    const nav = useNavigate();
    useEffect(()=>{
        if(!user){
            nav("/auth/login")
        }
    })
    return(
        <Container>
            home
        </Container>
    )      
}