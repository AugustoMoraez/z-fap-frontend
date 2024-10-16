import { Load } from "../../../components/loader";
import { Container, Information, Table, TableHead } from "./style"
import { ModalForm } from "../../../components/modalForm";
import { Label, Input, FormOptions } from "../../../AppStyle";
import { useState } from "react";
import { useQuery } from "react-query";
import { sector } from "../../../libs/types/sector";
import { userType } from "../../../libs/schemas/userSchema";
import getSolicitationsRequest from "../../../libs/fetchs/adm-pages/SolicitationsRegister/getSolicitationsRequest";
import getOptionsRegister from "../../../libs/fetchs/adm-pages/SolicitationsRegister/getOptionsRegister";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { activateUserType, userActivateSchema } from "../../../libs/schemas/authSchemas";
import { activateUserRegistration } from "../../../libs/fetchs/adm-pages/SolicitationsRegister/activateUserRegistration";
import { modalErroData, ModalErro } from "../../../components/modalErro";

export const SolicitationsRegister = () => {
    const { data: listSolicitations, isLoading } = useQuery<userType[]>("solicitationsRequest", getSolicitationsRequest, { retry: 1 });
    const { data: optionsRegister, isLoading: optionsLoad } = useQuery<sector[]>("optionsRegister", getOptionsRegister, { retry: 1 });

    const [availablePositions, setAvailablePositions] = useState<string[]>([]);
    const [toggleForm, setToggleForm] = useState<"none" | "flex">("none")

    const [modalErroData, setModalErroData] = useState<modalErroData>({
        msg: "",
        on: false,
        func: () => setModalErroData({ ...modalErroData, on: false })
    })
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        email: "",
        permissions: [
            ["Colaborador"],
            ["Colaborador", "Gestor"],
            ["Colaborador", "Gestor", "ADM"],
        ]
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<activateUserType>({
        resolver: zodResolver(userActivateSchema),
    });

    const HandleToggleModal = (id: string, name: string, email: string) => {
        setUserData({
            ...userData,
            id,
            name,
            email
        })
        setToggleForm("flex")
    }

    const onSubmit = (data: activateUserType) => {
        const sector = optionsRegister?.find(sec => sec.id === data.sectorID);

        if (sector && sector.positions.includes(data.position)) {
            activateUserRegistration({
                id: userData.id,
                sectorID: data.sectorID,
                position: data.position,
                permissions: data.permissions
            }).then(() => {
                setModalErroData({ ...modalErroData, msg: "Usuario ativo com sucesso", on: true })
                setToggleForm("none");
                window.location.reload();

            }).catch(() => {
                setModalErroData({ ...modalErroData, msg: "Erro: chame o suporte", on: true })
            });
        } else {

            setModalErroData({ ...modalErroData, msg: "Selecione um setor novamente", on: true })
        }
    };

    const handleSectorChange = (sectorId: string) => {
        const sector = optionsRegister?.find(sec => sec.id === sectorId);
        if (sector) {
            setAvailablePositions([]);
            setTimeout(() => setAvailablePositions(sector.positions), 100);
        } else {
            setAvailablePositions([]);
        }
    };
    const checkErro = () => {
        if (errors) {
            setModalErroData({
                ...modalErroData,
                msg: "Selecione um setor e um cargo",
                on: !modalErroData.on
            })
        }
        return null
    }
    return (
        <Container>
            <ModalErro msg={modalErroData.msg} on={modalErroData.on} func={modalErroData.func} />
            <ModalForm display={toggleForm} subtitle="Registro de usuario" func={() => setToggleForm("none")}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input className="hidden" type="text" value={userData.id} {...register("id")} />

                    <Label htmlFor="user_name">Usuario</Label>
                    <Input type="text" name="user_name" value={userData.name} disabled />

                    <Label htmlFor="user_email">Email</Label>
                    <Input type="email" name="user_email" value={userData.email} disabled />

                    <Label htmlFor="user_permissions">Permissão</Label>
                    <FormOptions {...register("permissions")} >
                        <option value={userData.permissions[0]}>Colaborador</option>
                        <option value={userData.permissions[1]}>Gestor</option>
                        <option value={userData.permissions[2]}>ADM</option>
                    </FormOptions>

                    <Label htmlFor="user_sector">Setor</Label>
                    <FormOptions {...register("sectorID")} onChange={(e) => handleSectorChange(e.target.value)}>
                        {
                            optionsLoad ?
                                <option disabled>Carregando</option>
                                :
                                <>
                                    <option value={""}>Selecionar</option>
                                    {
                                        optionsRegister && optionsRegister.map(option => (
                                            option.name !== "Sem Setor" &&
                                            <option key={option.id} value={option.id} >{option.name}</option>
                                        ))
                                    }
                                </>

                        }
                    </FormOptions>
                    {
                        availablePositions.length > 0 ?
                            <>
                                <Label htmlFor="user_position">Cargo</Label>
                                <FormOptions {...register("position")} >
                                    <option key={"0"} value={""} >Selecionar</option>
                                    {availablePositions.map(position => (
                                        <option key={position} value={position}>{position}</option>
                                    ))}
                                </FormOptions>

                            </> :
                            <></>
                    }

                    <Input type="submit" onClick={() => checkErro()} value={"Ativar usuario"} className="button" />
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


                            {
                                listSolicitations
                                    ?
                                    (
                                        listSolicitations.length > 0 ?

                                            listSolicitations.map((user, key) => (
                                                <tr key={key} className="row">
                                                    <td key={key + 1}>{key + 1}</td>
                                                    <td key={key + 2} className="name">{user.name}</td>
                                                    <td key={key + 3} className="email"> {user.email}</td>
                                                    <td key={key + 4}><p className="button" onClick={() => HandleToggleModal(user.id as string, user.name, user.email)}>Ativar</p></td>
                                                </tr>
                                            ))

                                            :
                                            (<tr key="1" className="row">
                                                <td key="2">{"1"}</td>
                                                <td key="3" className="name">Sem solicitações</td>
                                                <td key="4" className="email">Sem solicitações</td>
                                                <td key="5"><p className="button" >Refresh</p></td>
                                            </tr>)
                                    )
                                    :
                                    (
                                        <Information>No data available</Information>
                                    )
                            }
                        </tbody>
                    </Table>
            }
        </Container >
    )



}