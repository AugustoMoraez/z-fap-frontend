import { Header } from "../../components/header"
import { useAppSelector } from "../../hooks/useAppSelector"
import { Container } from "./style"

export const Home = () => {

    const { data:user,token } = useAppSelector(state => state.user.CurrentUser);
    return(
       
        <Container>
            <Header/>
            <p>meu id {token}</p>
            <p>meu nome é {user.name} e ocupo o cargo de {user.position}</p>
        </Container>
        
    )
}