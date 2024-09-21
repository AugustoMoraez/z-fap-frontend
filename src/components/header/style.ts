import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width: 1040px;
    height: 120px;
    background-color: royalblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    h2{
        background-color: #fff;
        color:royalblue;
        border-radius: 10px;
        padding: 7px;
        cursor: pointer;
        
    }
    select{
        background-color: #333;
        color: #fff;
        width: 120px;
        height: 30px;
        border-radius: 7px;
        text-transform: uppercase;
        text-align: center;
        
    }
`;