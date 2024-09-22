import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { sector } from "../../../types";
import { Container, Form,Label,Select,Input,Title,Option,Menssage } from "./stylet";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userRegisterSchema, userRegisterSchemaType } from "../../../libs/zodSchemas";
import {zodResolver} from "@hookform/resolvers/zod";
import { useEffect } from "react";



export const Register = () => {
    const nav = useNavigate();
    const [name, setName] = useState<string>("");
    const [selectedSector, setSelectedSector] = useState<string>("");
    const [sectorPositions, setSectorPositions] = useState<string[]>([""]);
    const [selectedPosition, setSelectedPosition] = useState<string>("");
    const { data } = useFetch<sector[]>("/sector")
    
    useEffect(()=>{
        if(data){
            const sector = data.filter(sector => sector.id === selectedSector)
            setSectorPositions(sector[0].positions)
        }else{
            setSectorPositions(["Selecione primeiro o setor"])
        }
    },[selectedSector])





    const{ 
        register, 
        handleSubmit,
        formState:{errors}
        } = useForm<userRegisterSchemaType>({
            resolver:zodResolver(userRegisterSchema),
        });
    
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleChangeSector = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSector(event.target.value);
    };
    
    const handleChangePosition = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPosition(event.target.value);
        
    };
    const handleRegisterUser = (data:userRegisterSchemaType) => {
        console.log(data)
    }
    
    return (
        <Container>
            <Form onSubmit={handleSubmit(handleRegisterUser)}>
                <Title>Cadastre-se</Title>

                <Label htmlFor="name">Nome</Label>
                <Input 
                {...register("name")}
                type="text" 
                name="name" 
                id="name" 
                placeholder="ex: Marcos Zayrão L. Pinheiro" 
                value={name}
                onChange={handleChangeName}
                />
                {errors.name && <Menssage>Dados inválidos</Menssage>}


                <Label htmlFor="sector-options">Setor</Label>
                <Select 
                id="sector-options" 
                value={selectedSector} 
                {...register("sectorID")}
                onChange={handleChangeSector}
                required
                >
                <option value={"selecione..."}>Selecione...</option>
                {
                    data ? 
                    data.map((option,key) => (
                        
                        <Option key={key} value={option.id}>
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
                required
                {...register("position")}
                onChange={handleChangePosition}
                >
                <option value={"selecione..."}>Selecione...</option>
                {

                    sectorPositions ?
                    sectorPositions.map((option,key)=>(
                        <Option key={key} value={option}>
                            {option}
                        </Option>
                    ))
                    :
                    null
                }
                </Select>

                
                <Label htmlFor="email">Email</Label>
                <Input 
                {...register("email")}
                type="email" 
                name="email" 
                id="email" 
                placeholder="Seu email" 
                />
                {errors.email && <Menssage>Dados inválidos</Menssage>}


                <Label htmlFor="email_repeat">Confirme o email</Label>
                <Input 
                type="email" 
                {...register("email_repeat")}
                name="email_repeat" 
                id="email_repeat" 
                placeholder="Confirme o email" 
                />
                {errors.email_repeat && <Menssage>Dados inválidos</Menssage>}


                <Label htmlFor="password">Senha</Label>
                <Input
                {...register("password")} 
                type="password" 
                name="password" 
                id="password" 
                placeholder="********" 
                minLength={8}
                maxLength={8}
                />
                {errors.password && <Menssage>Dados inválidos</Menssage>}


                <Label htmlFor="password_repeat">Confirmar senha</Label>
                <Input 
                {...register("password_repeat")}
                type="password" 
                name="password_repeat" 
                id="password_repeat" 
                placeholder="********" 
                minLength={8}
                maxLength={8}
                /> 
                {errors.password_repeat && <Menssage>Dados inválidos</Menssage>}
  

                <Input 
                type="submit" 
                value="Entrar" 
                className="button" 
                />

                <p>Já possui cadastro ?</p>
                <a onClick={() => nav("/auth/login")}>Clique aqui</a>
            </Form>
        </Container>
    )
}