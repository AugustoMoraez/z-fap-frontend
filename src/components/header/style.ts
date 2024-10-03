import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    position: fixed;     
`;

export const SubContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  0px 30px;
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
    color: #15A4FA;
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
    margin-top:100px ;
    
    width: 80px;
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