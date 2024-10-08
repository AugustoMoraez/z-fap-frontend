import styled from "styled-components";


type toogleBackground = {
   display: "none" | "flex"
}

export const Background = styled.div<toogleBackground>`
   top: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0,0,0,0.7);
   position: absolute;
   position: fixed;
   justify-content: center;
   align-items: center;
   z-index: 99;
   padding: 10px;
   display: ${prop => prop.display};
   *{
    display: ${prop => prop.display};
   }
`;
export const Container = styled.div`
   width: 100%;
   max-width: 500px;
   min-height: 300px;
   
   background-color: aliceblue;
   border-radius:10px;
   flex-direction:column;
   display: flex;
   justify-content: center;
   align-items: center;

   form{
      width: 100%;
      flex-direction:column;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;
export const FormHeader = styled.div`
   background-color: #15a4fa;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 7px 10px;
   color: #fff;
   margin-bottom: 25px;
   h3{
      margin:0;
      color: #fff;
   }
   svg{
      margin-left: auto;
      font-size: 25px;
      cursor: pointer;
      &:hover{
         scale:1.1;
      }
   }
`;
