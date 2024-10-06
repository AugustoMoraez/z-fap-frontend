import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
    body{
        background-color: #fff;
        color:#333;
    }
     
    .button{
        color:#fff;
        font-weight: 600;
        background-color: #15a4fa;
        transition: 0.5s;
        
         
        &:hover{
            opacity: 0.8;
            cursor: pointer;
        }
    }
         
   

`;