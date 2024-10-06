import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1040px;
    padding: 10px;
    height: 100vh;
    background-color: #3e3e3e;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 450px;
    padding: 20px;
    
    background-color: #fff;
    color: #333;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p{
        margin-top: 30px;
    }
    a{
        cursor: pointer;
        color:royalblue;
    }

`;
 



export const Menssage = styled.span`
    text-align: left;
    width: 100%;
    max-width: 350px;
    margin-bottom: 15px;
    margin-top: -10px;
    margin-left: 10px;
    font-weight: bolder;
    color:red;

`;