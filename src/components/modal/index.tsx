import { Container,Modal } from "./style"

export type modalData = {
    on:boolean,
    msg:string,
    func:()=>void,
}

export const MsgModal = (prop:modalData) => {
    return(
        <Container opacity={prop.on}>
            <Modal>
                <p>
                {prop.msg}
                </p>
                <button onClick={()=>prop.func()}>OK</button>
            </Modal>
        </Container>
    )
}