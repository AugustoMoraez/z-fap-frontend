import styled from "styled-components";


export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   position: relative;

   @keyframes girar {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

   .load{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border-top:5px solid royalblue;
        animation: girar 1s linear infinite;
   }

   
`;