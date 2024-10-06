
import { Load } from "../../../components/loader";
import { BaseApi } from "../../../libs/axiosConfig";
import { userType } from "../../../libs/shemas/userSchema"
import { Container, Table, TableHead } from "./style"
import { useQuery } from "react-query"
import { ModalForm } from "../../../components/modalForm";
import { Label,Input, Title,SubTitle } from "../../../AppStyle";
import { useState } from "react";

export const SolicitationsRegister = () => {
    const[userData,setUserData]=useState({
        name:"",
        manager:"",
        position:""
    })
    const { data, isFetching } = useQuery<{ data: userType[] }>("solicitations-register", async () => {

        const response = await BaseApi.get("/solicitations-request");
        return response.data
    })
    
    return (
        <Container>
           
            <ModalForm display="flex">
                <SubTitle>Registrar em Setor</SubTitle>
                <Label htmlFor="user_name">Usuario</Label>
                <Input type="text" name="user_name" value={userData.name}/>
                
                <Label htmlFor="user_gestor">Gestor</Label>
                <Input type="text" name="user_gestor" value={userData.manager}/>
                
                <Label htmlFor="user_position">Cargo</Label>
                <Input type="text" name="user_position" value={userData.position}/>

                <Input type="submit" value={"Ativar usuario"} className="button"/>
            </ModalForm>
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
                            <tr key={key} className="row">
                                <td key={key+1}>{key+1}</td>
                                <td key={key+2} className="name">{user.name}</td>
                                <td key={key+3} className="email"> {user.email}</td>
                                <td key={key+4}>{user.active ?"Ativo" : "Pendente"}</td>
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