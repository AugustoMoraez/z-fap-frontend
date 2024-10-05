import { Container,Modal } from "./style"

export type modalData = {
    on:boolean,
    msg?:string,
    func:()=>void,
}

export const MsgModal = (prop:modalData) => {
    return(
        <Container opacity={prop.on ?"flex" :"none"}>
            <Modal>
                <p>
                {prop.msg ? prop.msg : "Você nao tem permissoes necessarias para acessar esta pagina"}
                </p>
                <button onClick={()=>prop.func()}>OK</button>
            </Modal>
        </Container>
    )
}