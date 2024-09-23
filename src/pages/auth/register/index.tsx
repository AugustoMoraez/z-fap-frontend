import { useState } from "react";
import { Container, Form,Label,Input,Title,Menssage } from "./stylet";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {  userRegisterSchema, userRegisterType } from "../../../libs/zodSchemas";
import {zodResolver} from "@hookform/resolvers/zod";
import { Load } from "../../../components/loader";
import axios,{AxiosError} from "axios";


export const Register = () => {
    const[loading,setLoad]= useState<boolean>(false)
    const nav = useNavigate(); 
    const{ 
        register, 
        handleSubmit,
        formState:{errors}
        } = useForm<userRegisterType>({
            resolver:zodResolver(userRegisterSchema),
    });
    const handleRegisterUser = async (data:userRegisterType) => {
         
        if(data.email===data.email_repeat &&
            data.password===data.password_repeat 
        ){
            setLoad(true);
            try {
                console.log(1)
                const response = await axios.post('https://z-fap.onrender.com/register', {
                    name:data.name,
                    email:data.email,
                    password:data.password,
                });
                nav("/home")
            } catch (err) {
                if(err instanceof AxiosError){
                    {
                        err.response?.data.erro === "P2002"?
                        alert("Email que voce esta tentando usar ja esta cadastrado"):
                        alert("Erro nao catalogado, chame o suporte.")
                    }
                }else{
                    alert(err)
                }
                setLoad(false);
                console.log(err)
            }

        }else{
            alert("Senhas ou emails diferem")
        }
    }
    
    if(loading){
        return(
            <Load/>
        )
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
                />
                {errors.name && <Menssage>Dados inválidos</Menssage>}

                
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