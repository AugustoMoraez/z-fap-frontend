import { activateUserType } from "../../../schemas/authSchemas";
import { BaseApi } from "../../axiosConfig";

export const activateUserRegistration = async (data:activateUserType) => {
    try {
        const response = await BaseApi.post<{data:string}>('/activate-user', {data:{
            id:data.id,
            sectorID:data.sectorID,
            position:data.position,
            permissions:data.permissions.split(",")
        }
        });
        return response.data.data; 
    } catch (error) {
        console.error('Erro ao habilitar cadastro:', error); 
    }
}