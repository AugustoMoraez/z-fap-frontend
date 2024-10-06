import { Background, Container } from "./style"


type Prop = {
    children: JSX.Element|React.ReactNode;
    display:"flex"|"none"
}
export const ModalForm = ( {children,display}:Prop  ) => {
    return(
        <Background display={display}>
            <Container >
                {children}
            </Container>
        </Background>
    )
}