import styled from "styled-components"

export const Container = styled.aside`
    font-family: 'Mulish', sans-serif;
    background: #222;
    height: calc(120px - 100vh);
    
.nav {
   list-style-type: none;
   background: #666;
   margin: 0;
   padding: 0;
   width: 300px;
   overflow: hidden;
}

.nav-item {
   font-size: 20px;
   background: #9701f0;
   border-bottom: 1px solid rgba(63, 46, 73, 0.3);
}

.nav-item:last-child {
   border-bottom: none;
}

.nav-link, .nav-submenu-link {
   text-decoration: none;
   padding: 16px 20px;
   display: block;
   color: #fff;
}

.nav-submenu {
   overflow: hidden;
   max-height: 0;
   transition: max-height 0.5s;
   background: #3f2e49;
}
.nav-submenu:target {
   max-height: 10rem;
}
.nav-submenu-link {
   font-size: 16px;
   background: transparent;
   transition: background 0.2s ease-in;
}
.nav-submenu-link:hover {
   background: #36253f;
}
`;

export const Item = styled.div``;
export const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
    border-top:1px solid #FFD326;
    padding: 5px;
    background-color: #FFD326;
    color:#000;
`;
export const List = styled.ul``;
export const ListItem = styled.li`
    border-top:1px solid #333;
    background-color: #ffecaa;
    padding: 7px;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }

`;