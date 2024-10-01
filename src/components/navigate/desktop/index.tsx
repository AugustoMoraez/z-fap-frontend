import { useAppSelector } from "../../../hooks/useAppSelector";
import { dataMenuOption, getMenuOptions } from "../dataMenu";
import { Container,Nav,NavItem } from "./style";

export const Navigate = () => {
    const user = useAppSelector(state => state.user.CurrentUser)
    const permissions = user?.data.permissions ? user?.data.permissions :[""] 
    const menuOptions:dataMenuOption = getMenuOptions(permissions);
    
    return(
       
        <Container>
            <Nav>
                {
                    menuOptions.map((item)=>(
                        
                        <>
                        {item.rotas.map(item=>(
                            <li key={item.title}>
                                {item.subrotas}
                            </li>
                        ))}
                        
                        </>
                        
                    ))
                }
                
            </Nav>

        </Container>
        
    )
}