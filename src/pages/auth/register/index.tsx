import { Container,Form } from "./stylet"
import { useNavigate } from "react-router-dom"

export const Register = () => {

    const nav = useNavigate();

    return(
        <Container>
            <Form>
                <h2>Cadastre-se</h2>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="ex: Marcos Zayrão L. Pinheiro"/>

                

                <label htmlFor="Setor">Setor</label>
                <input type="text" name="Setor" id="Setor" placeholder="Pedagogico" />
                <label htmlFor="Cargo">Cargo</label>
                <input type="text" name="Cargo" id="Cargo" placeholder="Professor" />
                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Seu email" />
                <label htmlFor="email">Confirme o email</label>
                <input type="email" name="email" id="email" placeholder="Confirme o email" />
                
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" placeholder="********" />
                <label htmlFor="password">Confirmar senha</label>
                <input type="password" name="password" id="password" placeholder="********" />
               
                <input type="submit" value="Entrar" className="button"/>

                <p>Já possui cadastro ?</p>
                <a onClick={()=>nav("/auth/login")}>Clique aqui</a>
            </Form>
        </Container>
    )
}