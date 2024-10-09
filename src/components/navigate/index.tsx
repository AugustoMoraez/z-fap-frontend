import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { dataMenuOption, getMenuOptions } from "./dataMenu";
import { Bar,Nav,NavItem,MenuContainer,SectionTitle,NavContainer} from "./style";
import { TfiMenuAlt } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

export const Navigate = () => {
    const[toggle,setToggle] = useState(false);
    const nav = useNavigate();
    const user = useAppSelector(state=> state.user.CurrentUser)
    const permissions = user?.data.permissions ? user?.data.permissions :[""] 
    const[validOptions,setValidOptions] = useState<dataMenuOption>([])
    {console.log(validOptions)}
    useEffect(()=>{
        setValidOptions(getMenuOptions(permissions))  
        {console.log(validOptions)}

    },[permissions])
    const redirect = (url:string) => {
        setToggle(false);
        nav(url);
    }

    return(
       <>
            <Bar>
                <TfiMenuAlt onClick={()=> setToggle(!toggle)} />
            </Bar>
            <MenuContainer width={toggle ? "350px" : "0px"}>
               
                {
                    validOptions.map((item,itemIndex) => (
                        item.rotas.map(rota=>(
                            <NavContainer key={`${itemIndex}-${rota.title}`}>
                                <SectionTitle href={"#"+rota.title}>{rota.title.split("-").join(" ")}</SectionTitle>
                                <Nav id={rota.title} key={rota.title}>
                                    {
                                        rota.subrotas.map((subrota, subrotaIndex)=>(
                                            <NavItem  key={ subrotaIndex} onClick={()=>redirect(`/${rota.title}/${subrota}`)}>{subrota.split("-").join(" ")}</NavItem>
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