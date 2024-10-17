import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    padding: 10px;
    height: 100vh;
    background-color: #F4B835;
    margin: auto;
    position:relative;
`;

export const InputContainer = styled.div`
    width: 100%;
    max-width: 350px;
    margin-bottom: 20px;
    border-radius: 60px;
    border: 1px solid #E8E8E8;
    background-color:#E8E8E8;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 30px;
        margin-left: 20px;
    }
    input{
        height: 50px;
        width: 100%;
        max-width: 350px;
        border-radius: 60px;
        border: none;
        padding: 10px;
        background: none;
        outline: none;
    }
`;

export const BackgroundContainer = styled.div`
    width: 100%;
    min-height: 50vh;
    top: 0;
    left:0;
    background-color: #E8E8E8;
    position: absolute;
    border-bottom-left-radius:50px ;
    border-bottom-right-radius: 50px;
    box-shadow: 2px 0px 20px #333;
`;

export const Title = styled.h1`
    color:#000066;
    position: absolute;
    top: 23%;
    left:50%;
    transform: translate(-50%,-5%);
    text-align: center;
    cursor:default;
    span{
        font-weight: lighter;
    }
    b{
        font-weight: 900;
    }
    
`;

export const Form = styled.form`
    width:85% ;
    max-width: 450px;
    padding: 20px;
    min-height: 350px;
    position: absolute;
    top: 60%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    box-shadow: 2px 0px 20px #333;
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
export const Logo = styled.img`
    width: 100%;
    max-width: 200px;
    position: absolute;
    top: 5%;
    left:50%;
    transform: translate(-50%,-5%);

    @media (max-height:1300px) {
        max-width: 150px;
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