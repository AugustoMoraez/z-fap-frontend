import { SubTitle } from "../../AppStyle";
import { Background, Container, FormHeader } from "./style";
import { IoMdCloseCircle } from "react-icons/io";


type Prop = {
    subtitle:string,
    children: JSX.Element|React.ReactNode,
    func:()=>void,
    display:"flex"|"none"
};
export const ModalForm = ( {children,display,subtitle,func}:Prop  ) => {
    
    return(
        <Background display={display}>
            <Container >
                <FormHeader>
                    <SubTitle>{subtitle}</SubTitle>
                    <IoMdCloseCircle onClick={()=>func()} />
                </FormHeader>
                {children}
            </Container>
        </Background>
    )
}