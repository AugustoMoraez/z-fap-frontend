import { Container,IconProfile ,MenuContainer, MenuOptions,Option} from "./style"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useNavigate } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { ImExit } from "react-icons/im";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { setCurrentUser } from "../../libs/redux/user/userReducer";
import { modalData,MsgModal } from "../modal";

export const Header = () => {
    const[toggleMenu,setToggleMenu] =useState<boolean>(false)
    const [modalData, setModalData] = useState<modalData>({
        msg: "Voce nao tem autorização",
        on: false,
        func: () => setModalData({...modalData,on:false})
    })
    const user = useAppSelector(state => state.user.CurrentUser)
    const dispatch = useDispatch();
    const permissions = user ? user.data.permissions : ["Colaborador"]
    const nav = useNavigate()

    const redirect = (path:string) => {
        switch(path){
            case "colaborador":
                nav("/")
            break;
            case "gestor":
                if(permissions.includes("gestor")) 
                return    nav("/gestao");

                setModalData({
                    ...modalData,
                    on:true
                })
                
            break;
            case "ADM":
                if(permissions.includes("ADM"))
                    nav("/painel-adm")
            break;
            default:null;
        }
    }
    const logout = () => {
        dispatch(setCurrentUser(null))
        nav("/auth/login")
    }
    return(
       
        <Container>
            <MsgModal 
            on={modalData.on} 
            msg={modalData.msg} 
            func={modalData.func}/>

            <MenuContainer>
                <IconProfile onClick={()=> setToggleMenu(!toggleMenu)}>
                    <CgProfile/>
                    {user?.data.name.split(" ")[0]}
                </IconProfile>
                <MenuOptions toggle={toggleMenu}>
                    <Option>Meu perfil</Option>
                    {
                        permissions.map(item=>(
                            <Option onClick={()=>redirect(item)}>{item}</Option>
                        ))
                    }
                    <Option onClick={logout}>Sair <ImExit /></Option>
                </MenuOptions>

            </MenuContainer>
            <img src="../../public/fap.png"/>
            
        </Container>
        
    )
}