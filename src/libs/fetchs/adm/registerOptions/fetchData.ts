import { BaseApi } from "../../axiosConfig"; 

const fetchData = async () => {
    
    const response = await BaseApi.get("/register-options");
    return response.data

};



export default fetchData;