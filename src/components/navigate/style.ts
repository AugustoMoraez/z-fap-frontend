import styled from "styled-components";


export const Container = styled.div`
  position: relative;

`;

export const Bar = styled.div`
  background-color:  #15A4FA;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  svg{
    font-size: 30px;
    cursor: pointer;
    color:#fff;
  }
`;
type toogle = {
  width:"0px" | "350px"
}
export const MenuContainer = styled.aside<toogle>`
  width: 100%;
  max-width: ${(prop)=> prop.width};
  height: calc(100vh - 120px);
  background-color: #efefef;
  position: absolute;
  transition: 0.5s ease-in-out;
  opacity: ${prop => prop.width == "0px" ? "0" : "1"};
  overflow-y: scroll;

`;
export const NavContainer = styled.div`

`;

export const SectionTitle = styled.a`
    display: flex;
    padding: 10px;
    background-color: #15A4FA;
    color: #fff;
    cursor: pointer;
    transition: 100ms;
    text-decoration: none;
    &:hover{
    opacity: 0.7;
   }
   
  
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin: auto;
  list-style: none;
  height: 0px;
  overflow: hidden;   
  &:target{
     height: auto;
   
  }
  
`;
export const NavItem = styled.li`
 
  background-color: #efefef;
  width:100%;
  padding:10px ;
  &:hover{
    background-color: rgba(255,255,255,0.7);
    cursor: pointer;
  }
  &:last-child{
    border: none;
  }
`;