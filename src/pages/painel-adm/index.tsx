import { Route,  Routes } from "react-router-dom"
import { Aside } from "../../components/aside"
import { Header } from "../../components/header"
import { Container,SubContainer } from "./style"
import { Pessoas } from "./subpages/usuarios"
import { Setores } from "./subpages/setores"

export const PainelADM = () => {
    return (
        <Container>
            <Header />
            <SubContainer>
                <Aside />
               
                <Routes>
                    <Route Component={Pessoas} path="Usuarios/Gerenciar-Cadastros" />
                    <Route Component={Setores} path="Setores/Gerenciar-setores" />
                    
                </Routes>
            </SubContainer>
        </Container>

    )
}