
import { Load } from "../../../components/loader";
import { BaseApi } from "../../../libs/axiosConfig";
import { userType } from "../../../libs/shemas/userSchema"
import { Container, Table, TableHead } from "./style"
import { useQuery } from "react-query"
import { ModalForm } from "../../../components/modalForm";
import { Label,Input } from "../../../AppStyle";
import { useState } from "react";

export const SolicitationsRegister = () => {
    const[toggle,setToggle] = useState<"none"|"flex">("none")
    const[userData,setUserData]=useState({
        name:"",
        permissions:["Colaborador"],
        manager:"",
        position:""
    })
    const { data, isFetching } = useQuery<{ data: userType[] }>("solicitations-register", async () => {

        const response = await BaseApi.get("/solicitations-request");
        return response.data
    })
    
    const HandleToggleModal = () => {
        setToggle("flex")
         
    } 

    return (
        <Container>
           
            <ModalForm display={toggle} subtitle="Registro de usuario" func={()=>setToggle("none")}>
                <Label htmlFor="user_name">Usuario</Label>
                <Input type="text" name="user_name" value={userData.name}/>
               
                <Label htmlFor="user_email">Email</Label>
                <Input type="email" name="user_email" value={userData.name} disabled/>
                
                <Label htmlFor="user_permissions">Permissão</Label>
                <Input type="text" name="user_permissions" value={userData.permissions}/>
                
                <Label htmlFor="user_gestor">Gestor</Label>
                <Input type="text" name="user_gestor" value={userData.manager}/>
                
                <Label htmlFor="user_position">Cargo</Label>
                <Input type="text" name="user_position" value={userData.position}/>

                <Input type="submit" value={"Ativar usuario"} className="button"/>
            </ModalForm>

            {isFetching ? <Load /> :

            <Table>
                <TableHead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th className="email">Email</th>
                        <th>Ação</th>
                    </tr>
                </TableHead>
                <tbody>


                    {data?.data ? (
                        data.data.map((user,key) => (
                            <tr key={key} className="row">
                                <td key={key+1}>{key+1}</td>
                                <td key={key+2} className="name">{user.name}</td>
                                <td key={key+3} className="email"> {user.email}</td>
                                <td key={key+4}><p className="button" onClick={HandleToggleModal}>Ativar</p></td>
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