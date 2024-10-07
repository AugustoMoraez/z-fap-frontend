import { sector } from "../../../types/sector";
import { BaseApi } from "../../axiosConfig"; 

const getOptionsRegister = async (): Promise<sector[]> => {
    
    const response = await BaseApi.get<{data:sector[]}>("/register-options");
   
    return response.data.data

};



export default getOptionsRegister;