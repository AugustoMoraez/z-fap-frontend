import { useState } from "react";
import { BackgroundContainer, Container, Form,  Logo,  Menssage, Title } from "./style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userRegisterSchema, userRegisterType } from "../../libs/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Load } from "../../components/loader";
import { AxiosError } from "axios";
import { BaseApi } from "../../libs/fetchs/axiosConfig";
import { modalErroData, ModalErro } from "../../components/modalErro";
import { Input, Label } from "../../AppStyle";
import logo from "../../../public/logo.png";

export const Register = () => {

    const [loading, setLoad] = useState<boolean>(false)
    const [modalErroData, setModalErroData] = useState<modalErroData>({
        msg: "",
        on: false,
        func: () => setModalErroData({...modalErroData,on:false})
    })

    const nav = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<userRegisterType>({
        resolver: zodResolver(userRegisterSchema),
    });

    const handleRegisterErro = (e: unknown) => {
        if (e instanceof AxiosError) {
            {
                e.response?.data.erro === "P2002" ?
                setModalErroData({
                    ...modalErroData,
                    msg: "Email que voce esta tentando usar ja esta cadastrado",
                    on: true,
                })
                :
                setModalErroData({
                    ...modalErroData,
                    msg: "Erro na requisição, tente novamente mais tarde",
                    on: true,
                }) 
            }
        } else {
            setModalErroData({
                ...modalErroData,
                msg: "Erro nao catalogado, tente novamente mais tarde",
                on: true,
            }) 
        }
        setLoad(false)
    }

    const handleRegisterUser = async (data: userRegisterType) => {

        if (data.email === data.email_repeat &&
            data.password === data.password_repeat
        ) {
            setLoad(true);
            try {
                const response = await BaseApi.post("/register", {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                })

                console.log(response.data, response.status)
                setModalErroData({
                    msg: "Solicitação de cadastro foi enviada, aguarde um ADM aceita-la",
                    on: true,
                    func:()=>{nav("/auth/login")}
                }) 
                

            } catch (e) {
                handleRegisterErro(e)
            }

        } else {
            setModalErroData({
                ...modalErroData,
                msg: "Emails ou senhas se diferem",
                on: true,
            }) 
        }
    }

    if (loading) {
        return (
            <>
                <ModalErro msg={modalErroData.msg} on={modalErroData.on} func={modalErroData.func} />
                <Load />
            </>
        )
    }

    return (
        <Container>
            <ModalErro msg={modalErroData.msg} on={modalErroData.on} func={modalErroData.func} />
            <BackgroundContainer/>
            <Logo src={logo}/>
           
            <Form onSubmit={handleSubmit(handleRegisterUser)}>

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