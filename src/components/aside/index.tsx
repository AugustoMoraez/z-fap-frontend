import { Container, Nav,NavItem, NavLink, NavSubMenu, NavSubMenuLink } from "./style"
import { options } from "./menuOptions"
import { Link } from "react-router-dom"

export const Aside = () => {


    return (
        <Container>
            <Nav>
                {
                    options.map((option)=>(
                        <NavItem>
                            <NavLink href={"#"+option.title}>{option.title}</NavLink>
                            <NavSubMenu id={option.title}>
                                {option.options.map((item)=>(
                                    <NavSubMenuLink href={"#"+item} >
                                        <Link to={option.title+"/"+item}>
                                            {item.split("-").join(" ")}
                                        </Link>
                                    </NavSubMenuLink>
                                ))}
                            </NavSubMenu>
                        </NavItem>
                    ))
                }
            </Nav>
        </Container>
    )
}