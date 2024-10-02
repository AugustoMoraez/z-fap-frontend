import { useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { dataMenuOption, getMenuOptions } from "./dataMenu";
import { Bar,Nav,NavItem,MenuContainer,SectionTitle,NavContainer} from "./style";
import { TfiMenuAlt } from "react-icons/tfi";

export const Navigate = () => {
    const[toogle,setToogle] = useState(false);
    const user = useAppSelector(state => state.user.CurrentUser)
    const permissions = user?.data.permissions ? user?.data.permissions :[""] 
    const menuOptions:dataMenuOption = getMenuOptions(permissions);
    
    return(
       <>
            <Bar>
                <TfiMenuAlt onClick={()=> setToogle(!toogle)} />
            </Bar>
            <MenuContainer width={toogle ? "350px" : "0px"}>
                
              
                
            </MenuContainer>
       </>
        
    )
}