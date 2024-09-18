import { Container } from "./style"

export const Header = () => {
    return(
       
        <Container>
            <h2>Z-FAP</h2>
            <select>
                <option value="Colaborador">Colaborador</option>
                <option value="Gestor">Gestor</option>
            </select>
            
        </Container>
        
    )
}