import { sector } from "../../../types/sector";
import { BaseApi } from "../../axiosConfig"; 

const fetchData = async (): Promise<{data:sector[]}> => {
    const response = await BaseApi.get<{data:sector[]}>("/register-options");
    return response.data
};



export default fetchData;