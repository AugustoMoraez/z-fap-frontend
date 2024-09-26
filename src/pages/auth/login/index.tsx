import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema, userLoginType } from "../../../libs/zodSchemas";
import { Container, Form, Label, Input, Title, Menssage } from "../stylet";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { modalData,MsgModal } from "../../../components/modal";
import { Load } from "../../../components/loader";
import { BaseApi } from "../../../libs/axiosConfig";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../libs/redux/user/userReducer";



export const Login = () => {

    const [loading, setLoad] = useState<boolean>(false)
    const [modalData, setModalData] = useState<modalData>({
        msg: "",
        on: false,
        func: () => setModalData({...modalData,on:false})
    })

    const nav = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<userLoginType>({
        resolver: zodResolver(userLoginSchema),
    });
    
    const handleErroLogin = (e:unknown) => {
        if(e instanceof AxiosError){
            if(e.response){
                const msgErro = e.response.data.erro ? e.response.data.erro : "erro desconhecido"
                setModalData({
                    ...modalData,
                    on:true,     
                    msg:msgErro          
                })
                setLoad(false)
            }
        }else{
            setModalData({
                ...modalData,
                on:true,     
                msg:"Erro: Chame o suporte"           
            })
        }
                  
    }

    const handleLogin = async ({email,password}: userLoginType) => {
        setLoad(true)
        try {
            const response = await BaseApi.post("/login",{email,password});
            dispatch(setCurrentUser(response.data));
            nav("/")
        } catch (e) {
            handleErroLogin(e)
        }
    }
    if(loading){
        return(
            <Container>
                <MsgModal msg={modalData.msg} on={modalData.on} func={modalData.func}/>
                <Load/>
            </Container>
        )
    }
    return(
        <Container>
            <MsgModal msg={modalData.msg} on={modalData.on} func={modalData.func}/>
            <Form onSubmit={handleSubmit(handleLogin)}>
                <Title>Z-Fap Manager</Title>
                <Label htmlFor="email">Email</Label>
                <Input 
                {...register("email")}
                type="email" 
                name="email" 
                id="email" 
                placeholder="email@email.com"
                />
                {errors.email?.message && <Menssage>{errors.email?.message}</Menssage>}
            


                <Label htmlFor="password">Senha</Label>
                <Input 
                {...register("password")}
                type="password" 
                name="password" 
                id="password" 
                placeholder="********" 
                maxLength={8}
                />
                {errors.password?.message && <Menssage>{errors.password?.message}</Menssage>}
               
                <Input type="submit" value="Entrar" className="button"/>

                <p>Ainda não possui cadastro ?</p>
                <a onClick={()=>nav("/auth/register")}>Registre-se</a>
            </Form>
        </Container>
    )
}