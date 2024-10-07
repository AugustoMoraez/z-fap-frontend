import { useQuery } from "react-query";
import fetchData from "./fetchData";
import { AxiosError } from "axios";
import { userType } from "../../../schemas/userSchema";
import { solicitationsRequest } from "../../../types/requisitions/solicitations-request";

const useSolicitationsQuery = ():solicitationsRequest  => {
    const { data, isLoading, error } = useQuery("solicitationsRequest", fetchData, { retry: 1 });

    const listSolicitations: userType[] = data?.data || []; 

    return { listSolicitations, isLoading, Error: error as AxiosError | null }; 
}

export default useSolicitationsQuery;
