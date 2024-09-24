import { Container,Modal } from "./style"

type msgModalProp = {
    msg:string,
    func:()=>void,
}

export const MsgModal = (prop:msgModalProp) => {
    return(
        <Container>
            <Modal>
                <p>
                {prop.msg}
                </p>
                <button onClick={()=>prop.func()}>OK</button>
            </Modal>
        </Container>
    )
}