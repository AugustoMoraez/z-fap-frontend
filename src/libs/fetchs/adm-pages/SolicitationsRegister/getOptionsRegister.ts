import { BaseApi } from "../../axiosConfig"; 

const getOptionsRegister = async () => {
    
    const response = await BaseApi.get("/register-options");
    return response.data

};



export default getOptionsRegister;