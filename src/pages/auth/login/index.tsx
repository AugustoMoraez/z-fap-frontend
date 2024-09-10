import { Container,Form } from "./stylet"
import { useNavigate } from "react-router-dom"
export const Login = () => {

    const nav = useNavigate();

    return(
        <Container>
            <Form>
                <h2>Z-Fap Manager</h2>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="email@email.com"/>
            
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" placeholder="********" />
               
                <input type="submit" value="Entrar" className="button"/>

                <p>Ainda não possui cadastro ?</p>
                <a onClick={()=>nav("/auth/register")}>Registre-se</a>
            </Form>
        </Container>
    )
}