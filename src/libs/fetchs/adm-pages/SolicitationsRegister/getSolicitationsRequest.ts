import { userType } from "../../../schemas/userSchema";
import { BaseApi } from "../../axiosConfig"; 

const getSolicitationsRequest = async (): Promise<userType[]> => {
    
    const response = await BaseApi.get<{data:userType[]}>("/solicitations-request");
    return response.data.data

};



export default getSolicitationsRequest;