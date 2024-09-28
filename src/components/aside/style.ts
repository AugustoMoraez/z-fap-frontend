import styled from "styled-components"

export const Container = styled.aside`
   width: 100%;
   max-width: 300px;
   height: calc(100vh - 120px);
   font-family: 'Mulish', sans-serif;
   background: #222;
   display: flex;
   justify-content: start;
   flex-direction: center;
   align-items: start;
    
`;

export const Nav = styled.ul`
list-style-type: none;
   background: #666;
   margin: 0;
   padding: 0;
   width: 300px;
   overflow: hidden;`;
export const NavItem = styled.li`
   font-size: 20px;
   background: #7393f4;
   border-bottom: 1px solid rgba(63, 46, 73, 0.3);
   &:last-child{
      border-bottom: none;
   }
`;
export const NavLink = styled.a`
 text-decoration: none;
   padding: 16px 20px;
   display: block;
   color: #fff; text-decoration: none;
   padding: 16px 20px;
   display: block;
   color: #fff;`;
export const NavSubMenu = styled.div`
 overflow: hidden;
   max-height: 0;
   transition: max-height 0.5s;
   background: #3659c1;
   &:target{
      max-height: 10rem;
   }
 `;
export const NavSubMenuLink = styled.a`
    text-decoration: none;
   padding: 16px 20px;
   display: block;
   color: #fff;
   font-size: 16px;
   background: transparent;
   transition: background 0.2s ease-in;

   &:hover{
      background: #36253f;
   }
`;