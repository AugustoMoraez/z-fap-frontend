import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { sector } from "../../../types";
import { Container, Form } from "./stylet"
import { useNavigate } from "react-router-dom"



export const Register = () => {
    const [selectedOption, setSelectedOption] = useState<number|null>(null);

    const { data } = useFetch<sector[]>("/sector")
    const nav = useNavigate();
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(parseInt(event.target.value));
        
    };
    

    return (
        <Container>
            <Form>
                <h2>Cadastre-se</h2>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="ex: Marcos Zayrão L. Pinheiro" />

                <label htmlFor="sector-options">Setor</label>
                <select id="sector-options" value={selectedOption?.toString()} onChange={handleChange}>
                    <option value="">Selecione...</option>
                {
                    data ? 
                    data.map((option,key) => (
                        <>
                            <option key={key} value={key}>
                                {option.name}
                            </option>
                        </>
                        ))
                        : null
                    }
                </select>
                
                <label htmlFor="position-options">Cargo</label>
                <select id="position-options" value={selectedOption? selectedOption.toString() : ""} onChange={handleChange}>
                    <option value="">Selecione...</option>
                {
                    data ?
                    data[selectedOption ? selectedOption : 0].positions.map((option,key)=>(
                        <option key={key} value={key}>
                            {option}
                        </option>
                    ))
                    :
                    null
                }
                </select>

{/*                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Seu email" />

                <label htmlFor="email">Confirme o email</label>
                <input type="email" name="email" id="email" placeholder="Confirme o email" />


                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" placeholder="********" />

                <label htmlFor="password">Confirmar senha</label>
                <input type="password" name="password" id="password" placeholder="********" />
 */}

                <input type="submit" value="Entrar" className="button" />

                <p>Já possui cadastro ?</p>
                <a onClick={() => nav("/auth/login")}>Clique aqui</a>
            </Form>
        </Container>
    )
}