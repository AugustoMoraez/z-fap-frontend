import styled from "styled-components";


type ContainerProp = {
    opacity:string
}

export const ModalContainer = styled.div<ContainerProp>`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    z-index: 99;
    top:0px ;
    display: ${(props)=> props.opacity };

`;

export const Modal = styled.div`
    width: 250px;
    height: 250px;
    background-color: #ffff;
    color:#333;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    z-index: 99;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    p{
        padding: 10px;
        text-align: center;
    }
    button{
        width: 50px;
        border: none;
        border-radius: 5px;
        padding: 5px;
        background-color: royalblue;
        color: white;
        justify-content: center;
        &:hover{
            opacity: 0.7;
            cursor: pointer;
            
        }
    }

`;