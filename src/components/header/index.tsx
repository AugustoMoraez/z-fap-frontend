import { Container,IconProfile ,MenuContainer, MenuOptions,Option, SubContainer} from "./style"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useNavigate } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { ImExit } from "react-icons/im";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { setCurrentUser } from "../../libs/redux/user/userReducer";
import { modalData,MsgModal } from "../modal";
import { Navigate } from "../navigate";

export const Header = () => {
    const[toggleMenu,setToggleMenu] =useState<boolean>(false)
    const [modalData, setModalData] = useState<modalData>({
        msg: "Voce nao tem autorização",
        on: false,
        func: () => setModalData({...modalData,on:false})
    })
    const user = useAppSelector(state => state.user.CurrentUser)
    const dispatch = useDispatch();
    const nav = useNavigate()

    const logout = () => {
        dispatch(setCurrentUser(null))
        nav("/auth/login")
    }
    return(
       <Container>
        <SubContainer>
            <MsgModal 
            on={modalData.on} 
            msg={modalData.msg} 
            func={modalData.func}/>

            <MenuContainer>
                <IconProfile onClick={()=> setToggleMenu(!toggleMenu)}>
                    <CgProfile/>
                    {user?.data.name.split(" ")[0]}
                </IconProfile>
                <MenuOptions 
                 display={toggleMenu ? "flex":"none"}
                 opacity={toggleMenu ? "1" : "0"}
                >
                    <Option onClick={logout}>Sair <ImExit /></Option>
                </MenuOptions>
            </MenuContainer>
        </SubContainer>
        <Navigate/>
       </Container>
        
    )
}