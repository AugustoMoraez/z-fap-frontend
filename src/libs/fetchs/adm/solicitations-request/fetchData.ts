import { userType } from "../../../schemas/userSchema";
import { BaseApi } from "../../axiosConfig"; 

const fetchData = async (): Promise<{data:userType[]}> => {
    
    const response = await BaseApi.get<{data:userType[]}>("/solicitations-request");
    return response.data

};



export default fetchData;