import { Link } from "react-router-dom";
import { Container } from "./style";


export const NotFound = () => {
    
    return(
        <Container>
            <h1>Pagina não encontrada</h1>
            <Link to={"/"}>Voltar</Link>            
        </Container>
    )      
}