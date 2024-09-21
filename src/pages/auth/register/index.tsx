import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { sector } from "../../../types";
import { Container, Form,Label,Select,Input,Title,Option } from "./stylet"
import { useNavigate } from "react-router-dom"



export const Register = () => {
    const [selectedOption, setSelectedOption] = useState<number|null>(null);
    const [selectedPosition, setSelectedPosition] = useState<string>("");

    const { data } = useFetch<sector[]>("/sector")
    const nav = useNavigate();
    
    const handleChangeSector = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(parseInt(event.target.value));
        
    };
    
    const handleChangePosition = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPosition(event.target.value);
        
    };
    

    return (
        <Container>
            <Form>
                <Title>Cadastre-se</Title>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" name="name" id="name" placeholder="ex: Marcos Zayrão L. Pinheiro" />


                <Label htmlFor="sector-options">Setor</Label>
                <Select 
                id="sector-options" 
                value={selectedOption?.toString()} 
                onChange={handleChangeSector}
                >
                {
                    data ? 
                    data.map((option,key) => (
                        
                        <Option key={option.id} value={key}>
                            {option.name}
                        </Option>
                        
                    ))
                    : null
                }
                </Select>
            

                <Label htmlFor="position-options">Cargo</Label>
                <Select 
                id="position-options" 
                value={selectedPosition} 
                onChange={handleChangePosition}
                >
                {
                    data ?
                    data[selectedOption ? selectedOption : 0].positions.map((option,key)=>(
                        <Option key={option} value={key}>
                            {option}
                        </Option>
                    ))
                    :
                    null
                }
                </Select>

                
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Seu email" />
                <Label htmlFor="email-repeat">Confirme o email</Label>
                <Input type="email" name="email-repeat" id="email-repeat" placeholder="Confirme o email" />


                <Label htmlFor="password">Senha</Label>
                <Input type="password" name="password" id="password" placeholder="********" />
                <Label htmlFor="password-repeat">Confirmar senha</Label>
                <Input type="password" name="password-repeat" id="password-repeat" placeholder="********" /> 
  

                <Input type="submit" value="Entrar" className="button" />

                <p>Já possui cadastro ?</p>
                <a onClick={() => nav("/auth/login")}>Clique aqui</a>
            </Form>
        </Container>
    )
}