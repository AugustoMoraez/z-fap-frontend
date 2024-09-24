import { useState } from "react";
import { Container, Form,Label,Input,Title,Menssage } from "./stylet";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {  userRegisterSchema, userRegisterType } from "../../../libs/zodSchemas";
import {zodResolver} from "@hookform/resolvers/zod";
import { Load } from "../../../components/loader";
import {AxiosError} from "axios";
import { BaseApi } from "../../../libs/axiosConfig";
import { MsgModal } from "../../../components/modal";


export const Register = () => {

    const[loading,setLoad]= useState<boolean>(false)
    const[msgModal,setMsgModal]= useState<boolean>(false)
    const nav = useNavigate(); 
    
    const{ 
        register, 
        handleSubmit,
        formState:{errors}
        } = useForm<userRegisterType>({
            resolver:zodResolver(userRegisterSchema),
    });

    const handleRegisterErro = (e:unknown) => {
        if(e instanceof AxiosError){
            {
                e.response?.data.erro === "P2002"&&
                alert("Email que voce esta tentando usar ja esta cadastrado")
            }
        }else{
            alert("Erro nao catalogado chame no suporte")
        }
        setLoad(false)
    }

    const handleRegisterUser = async (data:userRegisterType) => {
         
        if(data.email===data.email_repeat &&
            data.password===data.password_repeat 
        ){
            setLoad(true);
            try {
                const response = await BaseApi.post("/register",{
                    name:data.name,
                    email:data.email,
                    password:data.password,
                })
              
                console.log(response.data,response.status)
                alert("Sua solicitação de cadastro foi criado, aguarde um adm do zfap aceita-la para poder logar")
                setTimeout(()=>nav("/auth/login"), 5000)
                
            } catch (e) {
                handleRegisterErro(e)
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
            {
            msgModal && 
            <MsgModal 
            msg="Sua solicitação de registro foi criada. Aguarde um ADM do Z-FAP aceita-la" 
            func={ ()=> {setMsgModal(!msgModal)} }
            />
            }

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