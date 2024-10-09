import { ModalContainer,Modal } from "./style"

export type modalErroData = {
    on:boolean,
    msg?:string,
    func:()=>void,
}

export const ModalErro = (prop:modalErroData) => {
    return(
        <ModalContainer  opacity={prop.on ?"flex" :"none"}>
            <Modal>
                <p>
                {prop.msg ? prop.msg : "Você nao tem permissoes necessarias para acessar esta pagina"}
                </p>
                <button onClick={()=>prop.func()}>OK</button>
            </Modal>
        </ModalContainer >
    )
}