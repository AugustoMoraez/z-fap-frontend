import { useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { dataMenuOption, getMenuOptions } from "./dataMenu";
import { Bar,Nav,NavItem,MenuContainer,SectionTitle,NavContainer} from "./style";
import { TfiMenuAlt } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

export const Navigate = () => {
    const[toogle,setToogle] = useState(false);
    const nav = useNavigate();
    const user = useAppSelector(state => state.user.CurrentUser)
    const permissions = user?.data.permissions ? user?.data.permissions :[""] 
    const menuOptions:dataMenuOption = getMenuOptions(permissions);
    
    const redirect = (url:string) => {
        setToogle(false);
        nav(url);
    }

    return(
       <>
            <Bar>
                <TfiMenuAlt onClick={()=> setToogle(!toogle)} />
            </Bar>
            <MenuContainer width={toogle ? "350px" : "0px"}>
                {
                    menuOptions.map(item => (
                        item.rotas.map(rota=>(
                            <NavContainer>
                                <SectionTitle href={"#"+rota.title}>{rota.title.split("-").join(" ")}</SectionTitle>
                                <Nav id={rota.title} key={rota.title}>
                                    {
                                        rota.subrotas.map((subrota,key)=>(
                                            <NavItem  key={key} onClick={()=>redirect(`/${rota.title}/${subrota}`)}>{subrota.split("-").join(" ")}</NavItem>
                                        ))
                                    }
                                </Nav>
                            </NavContainer>
                        ))
                    ))
                }
              
              
                
            </MenuContainer>
       </>
        
    )
}