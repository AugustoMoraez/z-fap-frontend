
import { useState } from "react";
import { Load } from "../../../components/loader";
import { BaseApi } from "../../../libs/axiosConfig";
import { userSchema, userType } from "../../../libs/shemas/userSchema"
import { Container, Table, TableHead, Title } from "./style"
import { useQuery } from "react-query"

export const SolicitationsRegister = () => {

    const { data, isFetching } = useQuery<{ data: userType[] }>("solicitations-register", async () => {

        const response = await BaseApi.get("/solicitations-request");
        return response.data
    })
    return (
        <Container>
            <Title>Solicitações de registro</Title>

            {isFetching ? 
            <Load />
            :
      

            <Table>
                <TableHead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th className="email">Email</th>
                        <th>Status</th>
                    </tr>
                </TableHead>
                <tbody>


                    {data?.data ? (
                        data.data.map((user,key) => (
                            <tr key={key}>
                                <td key={key+1}>{key+1}</td>
                                <td key={key+2} className="name">{user.name}</td>
                                <td key={key+3} className="email"> {user.email}</td>
                                <td key={key+4}>{user.active ?"Ativo" : "Inativo"}</td>
                            </tr>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                    

                </tbody>
            </Table>
            }
        </Container>
    )



}