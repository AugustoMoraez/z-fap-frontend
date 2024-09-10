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
    height: 600px;
    background-color: #fff;
    color: #333;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        font-size: 30px;
        margin:20px;
    }
    input{
        width: 100%;
        max-width: 350px;
        height: 40px;
        margin-bottom: 10px;

        border-radius: 5px;
        border: 1px solid royalblue;
        padding: 5px;
    }
    .button{
        color:#fff;
        font-weight: 600;
        background-color: royalblue;
        transition: 0.5s;

        &:hover{
            opacity: 0.8;
        }
    }
    label{
        width: 100%;
        max-width: 350px;
        margin-left: 10px;
        font-weight: bold;
    }
    p{
        margin-top: 30px;
    }
    a{
        cursor: pointer;
        color:royalblue;
    }

`;