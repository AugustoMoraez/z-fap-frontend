import { Load } from "../../../components/loader";
import { Container, Table, TableHead } from "./style"
import { ModalForm } from "../../../components/modalForm";
import { Label, Input, FormOptions } from "../../../AppStyle";
import { useState } from "react";
import { useQuery } from "react-query";
import { sector } from "../../../libs/types/sector";
import { userType } from "../../../libs/schemas/userSchema";
import getSolicitationsRequest from "../../../libs/fetchs/adm/solicitationsRequest/getSolicitationsRequest";
import getOptionsRegister from "../../../libs/fetchs/adm/registerOptions/getOptionsRegister";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { activateUserType, userActivateSchema } from "../../../libs/schemas/authSchemas";

export const SolicitationsRegister = () => {
    const { data: listSolicitations, isLoading } = useQuery<userType[]>("solicitationsRequest", getSolicitationsRequest, { retry: 1 });
    const { data: optionsRegister, isLoading: optionsLoad } = useQuery<sector[]>("optionsRegister", getOptionsRegister, { retry: 1 });

    const [toggle, setToggle] = useState<"none" | "flex">("none")
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        permissions: ["Colaborador"],
        manager: "",
        sector: "",
        position: ""
    })

    const HandleToggleModal = (name: string, email: string) => {
        setUserData({
            ...userData,
            name,
            email
        })
        setToggle("flex")

    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<activateUserType>({
        resolver: zodResolver(userActivateSchema),
    });
    const onSubmit = (data: activateUserType) => {
        console.log(data);
    };
    return (
        <Container>
            <ModalForm display={toggle} subtitle="Registro de usuario" func={() => setToggle("none")}>
                <form onSubmit={handleSubmit(onSubmit)}>



                    <Label htmlFor="user_name">Usuario</Label>
                    <Input type="text" name="user_name" value={userData.name} disabled />

                    <Label htmlFor="user_email">Email</Label>
                    <Input type="email" name="user_email" value={userData.email} disabled />

                    <Label htmlFor="user_permissions">Permissão</Label>

                    <FormOptions {...register("permissions")}>
                        <option value={["Colaborador"]}>Colaborador</option>
                        <option value={["Colaborador", "Gestor"]}>Gestor</option>
                        <option value={["Colaborador", "Gestor", "ADM"]}>ADM</option>
                    </FormOptions>

                    <Label htmlFor="user_sector">Setor</Label>

                    <FormOptions {...register("sectorID")}>
                        {
                            optionsLoad ?
                                <option disabled>Carregando</option>
                                :
                                <>
                                    {
                                        optionsRegister && optionsRegister.map(option => (
                                            option.name !== "Sem Setor" &&
                                            <option key={option.id} value={option.id} onClick={() => setUserData({ ...userData, sector: option.id })}>{option.name}</option>
                                        ))
                                    }
                                </>

                        }
                    </FormOptions>
                        

                    <Input type="submit" value={"Ativar usuario"} className="button" />
                </form>
            </ModalForm>

            {
                isLoading ? <Load /> :

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
                                listSolicitations.map((user, key) => (
                                    <tr key={key} className="row">
                                        <td key={key + 1}>{key + 1}</td>
                                        <td key={key + 2} className="name">{user.name}</td>
                                        <td key={key + 3} className="email"> {user.email}</td>
                                        <td key={key + 4}><p className="button" onClick={() => HandleToggleModal(user.name, user.email)}>Ativar</p></td>
                                    </tr>
                                ))
                            ) : (
                                <p>No data available</p>
                            )}


                        </tbody>
                    </Table>
            }
        </Container >
    )



}