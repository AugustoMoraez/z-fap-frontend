import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 120px;
    background-color: royalblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    select{
        background-color: #333;
        color: #fff;
        width: 150px;
        height: 30px;
        border-radius: 7px;
        text-transform: uppercase;
        text-align: center;
        
    }
    `;
export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const IconProfile = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:0%;
    cursor:pointer;
    svg{
        font-size: 35px;
    }
`;
type propMenu ={
    opacity:string,
    display:string
} 
export const MenuOptions = styled.ul<propMenu>`
    margin-top:150px ;
    width: 120px;
    opacity: ${prop => prop.opacity};
    background-color: aliceblue;
    color:#333;
    list-style: none;
    transition: 1s;
    position: absolute;
    border-radius: 5px;
    li{
        display: ${prop => prop.display};
    } 
`;
export const Option = styled.li`
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    svg{
        margin-left: 5px;
        color:#ff6961;
    }

`;