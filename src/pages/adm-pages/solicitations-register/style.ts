import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
     
    
`;
export const Title = styled.h1`
    
    text-align: center;
    color: #333;

`;

export const Table = styled.table`
    width: 100%;
    max-width: 800px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-collapse: collapse;
    margin-top: 20px;
    cursor: default;
    tr{
        text-overflow: ellipsis;
    }
    th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    
    td {
        color: #555;
    }
    @media (max-width:600px) {
        .email{
            display: none;
        }
    }
`;
export const TableHead = styled.thead`
    background-color: #15A4FA;
    color: white;

`;