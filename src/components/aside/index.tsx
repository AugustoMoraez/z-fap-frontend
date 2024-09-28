import { Container, Nav,NavItem, NavLink, NavSubMenu, NavSubMenuLink } from "./style"
import { options } from "./menuOptions"


export const Aside = () => {







    return (
        <Container>
            <Nav>
                {
                    options.map((item)=>(
                        <NavItem>
                            <NavLink href={"#"+item.title}>{item.title}</NavLink>
                            <NavSubMenu id={item.title}>
                                {item.options.map((item)=>(
                                    <NavSubMenuLink href={"#"+item} >{item.split("-").join(" ")}</NavSubMenuLink>
                                ))}
                            </NavSubMenu>
                        </NavItem>
                    ))
                }
            </Nav>
        </Container>
    )
}