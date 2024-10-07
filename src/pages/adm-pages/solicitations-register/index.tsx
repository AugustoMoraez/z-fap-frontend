
import { Load } from "../../../components/loader";
import { BaseApi } from "../../../libs/requests/axiosConfig";
import { userType } from "../../../libs/schemas/userSchema"
import { Container, Table, TableHead } from "./style"
import { useQuery } from "react-query"
import { ModalForm } from "../../../components/modalForm";
import { Label,Input, FormOptions } from "../../../AppStyle";
import { useState } from "react";
import useSoliciationsQuery from "../../../libs/requests/adm/solicitations-request/customQuery";

export const SolicitationsRegister = () => {
    const[toggle,setToggle] = useState<"none"|"flex">("none")
    const[userData,setUserData]=useState({
        name:"",
        email:"",
        permissions:["Colaborador"],
        manager:"",
        sector:"",
        position:""
    })
    const {listSolicitations,isLoading } = useSoliciationsQuery();
     
    
    const HandleToggleModal = (name:string,email:string) => {
        setUserData({
            ...userData,
            name,
            email
        })
        setToggle("flex")
         
    } 

    return (
        <Container>
           
            <ModalForm display={toggle} subtitle="Registro de usuario" func={()=>setToggle("none")}>
                <Label htmlFor="user_name">Usuario</Label>
                <Input type="text" name="user_name" value={userData.name}/>
               
                <Label htmlFor="user_email">Email</Label>
                <Input type="email" name="user_email" value={userData.email} disabled/>
                
                <Label htmlFor="user_permissions">Permissão</Label>

                <FormOptions>
                    <option value={["Colaborador"]}>Colaborador</option>
                    <option value={["Colaborador","Gestor"]}>Gestor</option>
                    <option value={["Colaborador","Gestor","ADM"]}>ADM</option>
                </FormOptions>
                 
                
                <Label htmlFor="user_sector">Setor</Label>
                <Input type="text" name="user_sector" value={userData.sector}/>
                
                <Label htmlFor="user_gestor">Gestor</Label>
                <Input type="text" name="user_gestor" value={userData.manager}/>
                
                <Label htmlFor="user_position">Cargo</Label>
                <Input type="text" name="user_position" value={userData.position}/>

                <Input type="submit" value={"Ativar usuario"} className="button"/>
            </ModalForm>

            {isLoading ? <Load /> :

            <Table>
                <TableHead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ação</th>
                    </tr>
                </TableHead>
                <tbody>


                    {listSolicitations ? (
                        listSolicitations.map((user,key) => (
                            <tr key={key} className="row">
                                <td key={key+1}>{key+1}</td>
                                <td key={key+2} className="name">{user.name}</td>
                                <td key={key+3} className="email"> {user.email}</td>
                                <td key={key+4}><p className="button" onClick={()=>HandleToggleModal(user.name, user.email)}>Ativar</p></td>
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